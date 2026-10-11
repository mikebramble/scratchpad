import { Dialect, LocalLinter, WorkerLinter } from 'harper.js';
import { harperBinary } from 'virtual:harper-binary';

export const DIALECTS = [
	{ value: Dialect.American, label: 'American' },
	{ value: Dialect.British, label: 'British' },
	{ value: Dialect.Canadian, label: 'Canadian' },
	{ value: Dialect.Australian, label: 'Australian' },
	{ value: Dialect.Indian, label: 'Indian' },
];

/** Harper names its rules like `SentenceCapitalization`; show them as "Sentence Capitalization". */
export function ruleLabel(rule) {
	return rule.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

export function normalizeDialect(value) {
	return DIALECTS.some((d) => d.value === value) ? value : Dialect.American;
}

/**
 * Start Harper and apply the reader's saved settings.
 *
 * Harper normally runs in a web worker so that checking never blocks typing. A page opened
 * straight from disk (file://) is not allowed to start that kind of worker, and Harper would
 * wait for it forever, so check first and run Harper on the page itself when workers are out.
 */
export async function createLinter(settings, onIgnoredChange) {
	const Linter = (await moduleWorkersWork()) ? WorkerLinter : LocalLinter;
	const linter = new Linter({ binary: harperBinary, dialect: settings.dialect });
	await linter.setup();

	await applySettings(linter, settings);
	reportIgnores(linter, onIgnoredChange);
	return linter;
}

/** Try to start a do-nothing worker the same way Harper starts its own. */
function moduleWorkersWork() {
	return new Promise((resolve) => {
		let url = null;
		let probe = null;
		let settled = false;

		const finish = (works) => {
			if (settled) {
				return;
			}
			settled = true;
			probe?.terminate();
			if (url != null) {
				URL.revokeObjectURL(url);
			}
			resolve(works);
		};

		try {
			url = URL.createObjectURL(new Blob(['postMessage(1)'], { type: 'text/javascript' }));
			probe = new Worker(url, { type: 'module' });
			probe.onmessage = () => finish(true);
			probe.onerror = () => finish(false);
			setTimeout(() => finish(false), 3000);
		} catch {
			finish(false);
		}
	});
}

/**
 * Push the saved dialect, personal dictionary, disabled rules and ignored problems into Harper.
 *
 * Changing the dialect makes Harper rebuild its engine from scratch, which drops everything
 * else, so the whole set is always applied together and in this order.
 */
export async function applySettings(linter, settings) {
	await linter.setDialect(settings.dialect);

	await linter.clearWords();
	if (settings.words.length > 0) {
		await linter.importWords(settings.words);
	}

	// Start from this engine's defaults each time, so a newer Harper's defaults are picked up.
	const config = await linter.getDefaultLintConfig();
	for (const rule of settings.disabledRules) {
		if (rule in config) {
			config[rule] = false;
		}
	}
	await linter.setLintConfig(config);

	await linter.clearIgnoredLints();
	if (settings.ignored) {
		try {
			await linter.importIgnoredLints(settings.ignored);
		} catch (error) {
			console.warn('Saved ignore list could not be read; starting with an empty one.', error);
		}
	}
}

/**
 * The editor tells Harper directly when a problem is ignored, so wrap those calls to learn
 * about them and let the app save the ignore list.
 */
function reportIgnores(linter, onIgnoredChange) {
	for (const name of ['ignoreLint', 'ignoreLints', 'ignoreLintHash']) {
		const original = linter[name].bind(linter);
		linter[name] = async (...args) => {
			const result = await original(...args);
			try {
				onIgnoredChange(await linter.exportIgnoredLints());
			} catch (error) {
				console.warn('Could not save the ignore list.', error);
			}
			return result;
		};
	}
}
