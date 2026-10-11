<script>
import { Editor } from 'harper-editor';
import { onMount } from 'svelte';
import { applySettings, createLinter, normalizeDialect, ruleLabel } from './linter.js';
import Settings from './Settings.svelte';
import { load, loadStrings, save } from './store.js';

const APP_NAME = 'Scratchpad';

// --- What was saved last time -------------------------------------------------------------

const savedDraft = load('draft', '');
const savedDisplay = load('display', {}) ?? {};
const initialText = typeof savedDraft === 'string' ? savedDraft : '';

/** Dialect, personal dictionary and switched-off rules. Replaced, never mutated. */
let settings = $state.raw({
	dialect: normalizeDialect(load('dialect', null)),
	words: loadStrings('words'),
	disabledRules: loadStrings('disabledRules'),
});

/** Harper's own record of dismissed problems (an opaque JSON string of hashes). */
let ignored = load('ignored', null);
if (typeof ignored !== 'string') {
	ignored = null;
}

// --- Live state -----------------------------------------------------------------------------

let linter = $state.raw(null);
let startError = $state(null);
/** True once starting has taken long enough that the reader deserves an explanation. */
let slowStart = $state(false);
/** Harper's editor component, once it is on the page. */
let editor = $state.raw(null);
/** The text currently in the editor. */
let text = $state(initialText);
let showSettings = $state(false);
let toast = $state.raw(null);

let saveTimer = null;
let toastTimer = null;

onMount(() => {
	const slowTimer = setTimeout(() => {
		slowStart = true;
	}, 12000);

	const startedWith = settings;
	createLinter({ ...startedWith, ignored }, rememberIgnored).then(
		(ready) => {
			linter = ready;
			// Settings can be changed while the engine is still loading.
			if (settings !== startedWith) {
				syncLinter();
			}
		},
		(error) => {
			console.error(error);
			startError = String(error?.message ?? error);
		},
	);

	// Make sure the last few keystrokes are saved when the window is closed or hidden.
	const flush = () => saveDraft();
	const onVisibility = () => {
		if (document.visibilityState === 'hidden') {
			saveDraft();
		}
	};
	window.addEventListener('pagehide', flush);
	document.addEventListener('visibilitychange', onVisibility);
	document.addEventListener('copy', keepPlainTextOnly);
	document.addEventListener('cut', keepPlainTextOnly);
	window.addEventListener('keydown', handleSaveShortcut);
	keepOfflineCopy();

	return () => {
		window.removeEventListener('pagehide', flush);
		document.removeEventListener('visibilitychange', onVisibility);
		document.removeEventListener('copy', keepPlainTextOnly);
		document.removeEventListener('cut', keepPlainTextOnly);
		window.removeEventListener('keydown', handleSaveShortcut);
		clearTimeout(slowTimer);
	};
});

/**
 * Ask the browser to keep a copy of the app (see src/sw.template.js) so it opens without a
 * network, and check for a newer version each time the app starts.
 *
 * Skipped in the single-file build, which has nothing to download in the first place.
 */
function keepOfflineCopy() {
	if (!import.meta.env.PROD || __SINGLE_FILE__ || !('serviceWorker' in navigator)) {
		return;
	}

	// A copy that takes over while an older one was in charge means a new version was deployed.
	const wasAlreadyInstalled = navigator.serviceWorker.controller != null;
	navigator.serviceWorker.addEventListener('controllerchange', () => {
		if (wasAlreadyInstalled) {
			showToast({
				message: 'A newer version is ready',
				actionLabel: 'Reload',
				action: () => {
					saveDraft();
					location.reload();
				},
			});
		}
	});

	navigator.serviceWorker.register('./sw.js').then(
		(registration) => {
			// Browsers look for updates lazily; look now, so a new deploy shows up on this visit.
			// Failing here is routine (no network), and the saved copy keeps working.
			registration.update().catch(() => {});
		},
		(error) => console.warn('Offline copy could not be set up.', error),
	);
}

/** Ctrl+S is a reflex. Answer it, instead of letting the browser offer to save the web page. */
function handleSaveShortcut(event) {
	if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key?.toLowerCase() === 's') {
		event.preventDefault();
		saveDraft();
		showToast({ message: 'Saved on this device. Drafts save as you type.' });
	}
}

/**
 * When text is copied out of the editor with Ctrl+C or Ctrl+X, the editor puts two versions on
 * the clipboard: plain text, and HTML in which every space is a non-breaking space. Mail and chat
 * apps prefer the HTML version, so they would receive text that no longer wraps or searches
 * normally. Drop the HTML version; this is a plain-text tool.
 */
function keepPlainTextOnly(event) {
	const surface = document.querySelector('.harper-editor-surface');
	// Ask where the event travelled rather than where its target is now: a cut removes the
	// paragraphs it started in before this runs.
	if (surface != null && event.composedPath().includes(surface)) {
		event.clipboardData?.clearData('text/html');
	}
}

// --- Draft ------------------------------------------------------------------------------------

function handleChange(next) {
	text = next;
	clearTimeout(saveTimer);
	saveTimer = setTimeout(saveDraft, 300);
}

function saveDraft() {
	clearTimeout(saveTimer);
	saveTimer = null;
	save('draft', text);
}

/** Swap the whole text. The editor records it as an ordinary edit, so Ctrl+Z takes it back. */
function replaceText(next) {
	editor?.replaceAll(next);
	saveDraft();
	focusEditor();
}

function focusEditor() {
	const surface = document.querySelector('.harper-editor-surface');
	if (!(surface instanceof HTMLElement)) {
		return;
	}

	surface.focus();

	// Put the caret at the end, ready to keep typing.
	const range = document.createRange();
	range.selectNodeContents(surface);
	range.collapse(false);
	const selection = window.getSelection();
	selection?.removeAllRanges();
	selection?.addRange(range);
}

// --- Toolbar actions -------------------------------------------------------------------------

async function copyText() {
	if (text === '') {
		return;
	}

	let copied = false;
	try {
		await navigator.clipboard.writeText(text);
		copied = true;
	} catch {
		copied = copyWithSelection(text);
	}

	showToast(
		copied
			? { message: 'Copied as plain text' }
			: { message: 'The browser blocked copying. Select the text and press Ctrl+C instead.' },
	);
}

/** Older, permission-free way to copy, used when the clipboard API is unavailable. */
function copyWithSelection(value) {
	const holder = document.createElement('textarea');
	holder.value = value;
	holder.setAttribute('readonly', '');
	holder.style.position = 'fixed';
	holder.style.opacity = '0';
	document.body.appendChild(holder);
	holder.select();
	let copied = false;
	try {
		copied = document.execCommand('copy');
	} catch {
		copied = false;
	}
	holder.remove();
	return copied;
}

function clearText() {
	if (text === '') {
		return;
	}

	const previousText = text;
	replaceText('');

	showToast({
		message: 'Cleared. Ctrl+Z brings it back.',
		actionLabel: 'Undo',
		action: () => replaceText(previousText),
	});
}

// --- Settings that Harper needs to hear about ---------------------------------------------

function rememberIgnored(next) {
	ignored = next;
	save('ignored', next);
}

function updateSettings(change) {
	settings = { ...settings, ...change };
	save('dialect', settings.dialect);
	save('words', settings.words);
	save('disabledRules', settings.disabledRules);

	return syncLinter();
}

let syncing = Promise.resolve();

/**
 * Bring Harper in line with the current settings and ignore list.
 *
 * Runs are queued and each one applies whatever is current when its turn comes. Two changes
 * made in quick succession (pick a dialect, then close Settings with an edited dictionary)
 * would otherwise overlap, and the older one could finish last and win.
 */
function syncLinter() {
	syncing = syncing
		.then(async () => {
			if (linter != null) {
				await applySettings(linter, { ...settings, ignored });
				recheck();
			}
		})
		.catch((error) => console.error('Could not apply the settings to Harper.', error));

	return syncing;
}

/**
 * Ask the editor to check the text again now. It re-checks whenever the window reports a
 * change, and otherwise about once a second, so announce a change instead of waiting.
 */
function recheck() {
	window.dispatchEvent(new Event('resize'));
}

async function addToDictionary(words) {
	const added = [];
	for (const raw of words) {
		const word = raw.trim();
		if (word !== '' && !settings.words.includes(word) && !added.includes(word)) {
			added.push(word);
		}
	}
	if (added.length === 0) {
		return;
	}

	await updateSettings({ words: [...settings.words, ...added] });

	showToast({
		message: `Added “${added.join('”, “')}” to your dictionary`,
		actionLabel: 'Undo',
		action: () => updateSettings({ words: settings.words.filter((word) => !added.includes(word)) }),
	});
}

async function setRuleEnabled(rule, enabled) {
	const others = settings.disabledRules.filter((name) => name !== rule);
	await updateSettings({ disabledRules: enabled ? others : [...others, rule] });

	if (!enabled) {
		showToast({
			message: `Turned off the “${ruleLabel(rule)}” rule`,
			actionLabel: 'Undo',
			action: () => setRuleEnabled(rule, true),
		});
	}
}

// --- Toast -------------------------------------------------------------------------------------

function showToast(next) {
	clearTimeout(toastTimer);
	toast = next;
	toastTimer = setTimeout(
		() => {
			toast = null;
		},
		next.action ? 8000 : 2500,
	);
}

async function runToastAction() {
	const action = toast?.action;
	clearTimeout(toastTimer);
	toast = null;
	await action?.();
}
</script>

<div class="app">
	<header class="bar">
		<h1 class="name">{APP_NAME}</h1>
		<span class="tagline">Checked on this device by Harper</span>
		<span class="spacer"></span>
		<button type="button" class="btn" disabled={text === ''} onclick={clearText}>Clear</button>
		<button
			type="button"
			class="btn primary"
			disabled={text === ''}
			title="Copy everything as plain text"
			onclick={copyText}
		>
			Copy text
		</button>
		<button
			type="button"
			class="btn icon"
			aria-label="Settings"
			title="Settings"
			onclick={() => (showSettings = true)}
		>
			<svg viewBox="0 0 20 20" aria-hidden="true">
				<path d="M4 6h5M13 6h3M4 14h3M11 14h5" />
				<circle cx="11" cy="6" r="2" />
				<circle cx="9" cy="14" r="2" />
			</svg>
		</button>
	</header>

	<main class="stage">
		{#if linter}
			<Editor
				bind:this={editor}
				content={initialText}
				{linter}
				defaultFontFamily={savedDisplay.fontFamily ?? 'sans'}
				defaultFontSize={savedDisplay.fontSize ?? 'default'}
				onChange={handleChange}
				onReady={focusEditor}
				onAddToDictionary={addToDictionary}
				onSetRuleEnabled={setRuleEnabled}
				onDisplayChange={(display) => save('display', display)}
			/>
		{:else if startError}
			<div class="notice" role="alert">
				<strong>The grammar engine could not start.</strong>
				<p>{startError}</p>
				<p>Your saved draft is untouched. Reloading the page usually fixes this.</p>
			</div>
		{:else}
			<div class="notice" role="status">
				<span class="spinner" aria-hidden="true"></span>
				Loading the grammar engine…
				{#if slowStart}
					<p>
						{#if __SINGLE_FILE__}
							This is taking longer than usual. If it does not finish, reload the page.
						{:else}
							The first visit downloads the engine, about 16 MB. If this does not finish, check the
							connection and reload. Your saved draft is safe.
						{/if}
					</p>
				{/if}
			</div>
		{/if}
	</main>

	{#if toast}
		<div class="toast" role="status">
			<span>{toast.message}</span>
			{#if toast.action}
				<button type="button" onclick={runToastAction}>{toast.actionLabel}</button>
			{/if}
		</div>
	{/if}

	{#if showSettings}
		<Settings
			{settings}
			onChange={updateSettings}
			onClose={() => {
				showSettings = false;
				focusEditor();
			}}
		/>
	{/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
		color: #0c0a09;
		font-family: 'Atkinson Hyperlegible', system-ui, 'Segoe UI', sans-serif;
	}

	.bar {
		display: flex;
		flex: 0 0 auto;
		align-items: center;
		gap: 8px;
		min-width: 0;
		padding: 8px 12px 8px 18px;
	}

	.name {
		margin: 0;
		font-size: 15px;
		font-weight: 700;
		line-height: 1;
	}

	.tagline {
		overflow: hidden;
		color: #79716b;
		font-size: 12px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.spacer {
		flex: 1;
	}

	.btn {
		display: inline-flex;
		flex: 0 0 auto;
		align-items: center;
		justify-content: center;
		height: 28px;
		padding: 0 12px;
		border: 0.5px solid #d6d3d1;
		border-radius: 7px;
		background: linear-gradient(to bottom, #fff, #fafaf9);
		box-shadow: 0 1px 2px rgba(12, 10, 9, 0.05);
		color: #44403b;
		font: inherit;
		font-size: 13px;
		font-weight: 700;
		line-height: 1;
		cursor: pointer;
	}

	.btn:hover:not(:disabled) {
		color: #0c0a09;
	}

	.btn:disabled {
		opacity: 0.45;
		cursor: default;
	}

	.btn:focus-visible,
	.toast button:focus-visible {
		outline: 2px solid #155dfc;
		outline-offset: 2px;
	}

	.btn.primary {
		border-color: #1c1a16;
		background: #1c1a16;
		color: #fbfaf6;
	}

	.btn.primary:hover:not(:disabled) {
		background: #35312a;
		color: #fff;
	}

	.btn.icon {
		width: 28px;
		padding: 0;
	}

	.btn.icon svg {
		width: 16px;
		height: 16px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-linecap: round;
	}

	.stage {
		flex: 1;
		min-height: 0;
		padding: 0 10px 10px;
	}

	.notice {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 24px;
		color: #57534d;
		font-size: 14px;
		text-align: center;
	}

	.notice p {
		max-width: 44ch;
		margin: 0;
	}

	.spinner {
		width: 22px;
		height: 22px;
		border: 2px solid rgba(28, 26, 22, 0.14);
		border-top-color: #57534d;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.spinner {
			animation-duration: 2.4s;
		}
	}

	.toast {
		position: fixed;
		bottom: 52px;
		left: 50%;
		z-index: 40;
		display: flex;
		gap: 14px;
		align-items: center;
		max-width: min(520px, calc(100vw - 32px));
		padding: 9px 14px;
		border-radius: 9px;
		background: #1c1a16;
		box-shadow: 0 10px 30px rgba(12, 10, 9, 0.25);
		color: #fbfaf6;
		font-size: 13px;
		line-height: 1.35;
		transform: translateX(-50%);
	}

	.toast button {
		flex: 0 0 auto;
		padding: 0;
		border: 0;
		background: none;
		color: #fcd34d;
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}

	.toast button:hover {
		text-decoration: underline;
	}

	@media (max-width: 520px) {
		.tagline {
			display: none;
		}
	}
</style>
