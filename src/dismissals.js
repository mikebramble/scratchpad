// Dismissing a problem, for the rest of the draft.
//
// Harper's own "ignore" remembers a problem by the exact words it covers plus the two words on
// either side. That breaks as soon as you edit nearby: fix a typo inside a long sentence and
// the long-sentence warning is a "new" problem, back again. So the app keeps its own list of
// dismissed problems and recognises them more loosely:
//
//   - a problem about a whole sentence (more than SENTENCE_WORDS words) stays dismissed while
//     the sentence still shares most of its words with the one you dismissed;
//   - a problem about a word or phrase stays dismissed while it is the same word or phrase,
//     with mostly the same words around it.
//
// The list belongs to the draft: "Clear" empties it.
//
// This file also replaces Harper's "remove overlapping problems" step. Harper keeps the
// longest problem in any overlap, so a long-sentence warning hid every spelling and grammar
// problem inside that sentence. Here sentence-wide problems never hide anything.

const SENTENCE_WORDS = 8;
const CONTEXT_WORDS = 6;
/** Share of words a sentence must keep in common with the dismissed one. */
const SAME_SENTENCE = 0.6;
/** Share of surrounding words a word-level problem must keep in common. */
const SAME_PLACE = 0.5;
/** Dismissals kept per draft; the oldest go first. */
export const MAX_DISMISSED = 500;

function wordsOf(text) {
	return text.toLowerCase().match(/[\p{L}\p{N}']+/gu) ?? [];
}

/** Jaccard overlap of two word lists: 1 when identical, 0 when they share nothing. */
function overlap(a, b) {
	const left = new Set(a);
	const right = new Set(b);
	if (left.size === 0 && right.size === 0) {
		return 1;
	}
	let common = 0;
	for (const word of left) {
		if (right.has(word)) {
			common++;
		}
	}
	return common / (left.size + right.size - common);
}

/**
 * A problem described by what it is about rather than where it is. Context stops at line
 * breaks, because the editor checks one paragraph at a time.
 */
export function describe(rule, source, start, end) {
	const lineStart = source.lastIndexOf('\n', start - 1) + 1;
	const nextBreak = source.indexOf('\n', end);
	const lineEnd = nextBreak === -1 ? source.length : nextBreak;
	const text = source.slice(start, end);

	return {
		rule,
		text,
		context: [
			...wordsOf(source.slice(lineStart, start)).slice(-CONTEXT_WORDS),
			...wordsOf(source.slice(end, lineEnd)).slice(0, CONTEXT_WORDS),
		],
	};
}

function isSentenceWide(description) {
	return wordsOf(description.text).length > SENTENCE_WORDS;
}

export function isSameProblem(dismissed, problem) {
	if (dismissed.rule !== problem.rule) {
		return false;
	}
	if (isSentenceWide(dismissed) || isSentenceWide(problem)) {
		return overlap(wordsOf(dismissed.text), wordsOf(problem.text)) >= SAME_SENTENCE;
	}
	return dismissed.text === problem.text && overlap(dismissed.context, problem.context) >= SAME_PLACE;
}

/** Keep only well-formed entries from storage. */
export function cleanDismissals(value) {
	if (!Array.isArray(value)) {
		return [];
	}
	return value
		.filter(
			(d) =>
				d != null &&
				typeof d.rule === 'string' &&
				typeof d.text === 'string' &&
				Array.isArray(d.context) &&
				d.context.every((w) => typeof w === 'string'),
		)
		.slice(-MAX_DISMISSED);
}

/**
 * Put the draft-level dismissals between Harper and the editor.
 *
 * The editor asks Harper for problems with `organizedLints` and reports a dismissal with
 * `ignoreLintHash` (a fingerprint it got from `contextHash`), `ignoreLint` or `ignoreLints`.
 * Those calls are replaced here; everything else about the linter is untouched.
 *
 * `dismissed()` returns the current list; `onDismiss(descriptions)` is told about new ones;
 * `onHarperIgnore()` runs when a dismissal had to fall back to Harper's own ignore list.
 */
export function addDraftDismissals(linter, { dismissed, onDismiss, onHarperIgnore }) {
	const original = {
		organizedLints: linter.organizedLints.bind(linter),
		contextHash: linter.contextHash.bind(linter),
		ignoreLint: linter.ignoreLint.bind(linter),
		ignoreLints: linter.ignoreLints.bind(linter),
		ignoreLintHash: linter.ignoreLintHash.bind(linter),
	};

	/** What each problem handed to the editor is about. */
	const descriptions = new WeakMap();
	/** The same, by the fingerprint the editor uses to name a problem when it is dismissed. */
	const byFingerprint = new Map();
	const priorities = new WeakMap();

	const priorityOf = (lint) => {
		if (!priorities.has(lint)) {
			let priority = 127;
			try {
				priority = JSON.parse(lint.to_json()).inner?.priority ?? 127;
			} catch {
				// Keep the default.
			}
			priorities.set(lint, priority);
		}
		return priorities.get(lint);
	};

	linter.organizedLints = async (text, options = {}) => {
		const groups = await original.organizedLints(text, { ...options, dedup: false });
		const current = dismissed();
		const entries = [];

		for (const [rule, lints] of Object.entries(groups)) {
			for (const lint of lints) {
				const span = lint.span();
				const start = span.start;
				const end = span.end;
				span.free();

				const description = describe(rule, text, start, end);
				if (current.some((d) => isSameProblem(d, description))) {
					lint.free();
					continue;
				}

				descriptions.set(lint, description);
				entries.push({ rule, lint, start, end, wide: isSentenceWide(description) });
			}
		}

		const kept = options.dedup === false ? entries : removeOverlaps(entries, priorityOf);

		// The popup opens for the first problem under the pointer, so list sentence-wide ones
		// last: a click on a misspelled word inside a long sentence should open the spelling fix.
		kept.sort((a, b) => Number(a.wide) - Number(b.wide));

		const result = {};
		for (const entry of kept) {
			(result[entry.rule] ??= []).push(entry.lint);
		}
		return result;
	};

	linter.contextHash = async (source, lint) => {
		const fingerprint = await original.contextHash(source, lint);
		const description = descriptions.get(lint);
		if (description != null) {
			byFingerprint.set(String(fingerprint), description);
			if (byFingerprint.size > 5000) {
				byFingerprint.delete(byFingerprint.keys().next().value);
			}
		}
		return fingerprint;
	};

	linter.ignoreLintHash = async (fingerprint) => {
		const description = byFingerprint.get(String(fingerprint));
		if (description != null) {
			onDismiss([description]);
			return;
		}
		await original.ignoreLintHash(fingerprint);
		await onHarperIgnore();
	};

	linter.ignoreLint = async (source, lint) => {
		const description = descriptions.get(lint);
		if (description != null) {
			onDismiss([description]);
			return;
		}
		await original.ignoreLint(source, lint);
		await onHarperIgnore();
	};

	linter.ignoreLints = async (source, lints) => {
		const known = lints.filter((lint) => descriptions.has(lint));
		const unknown = lints.filter((lint) => !descriptions.has(lint));
		if (known.length > 0) {
			onDismiss(known.map((lint) => descriptions.get(lint)));
		}
		if (unknown.length > 0) {
			await original.ignoreLints(source, unknown);
			await onHarperIgnore();
		}
	};

	return linter;
}

/**
 * Harper's overlap rule (where problems overlap, keep the one that starts first and runs
 * longest), applied only among word- and phrase-level problems. Sentence-wide problems are
 * always kept and never hide anything.
 */
function removeOverlaps(entries, priorityOf) {
	const ordered = entries
		.filter((entry) => !entry.wide)
		.sort((a, b) => priorityOf(a.lint) - priorityOf(b.lint))
		.sort((a, b) => a.start - b.start || b.end - a.end);

	const dropped = new Set();
	let reach = 0;
	for (const entry of ordered) {
		if (entry.start < reach) {
			dropped.add(entry);
		} else {
			reach = entry.end;
		}
	}

	for (const entry of dropped) {
		entry.lint.free();
	}
	return entries.filter((entry) => !dropped.has(entry));
}
