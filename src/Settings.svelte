<script>
import { onMount } from 'svelte';
import { DIALECTS, ruleLabel } from './linter.js';

let { settings, onChange, onClose } = $props();

let dialog;
/** The dictionary as editable text, one word per line. Saved when the dialog closes. */
let wordsDraft = $state(settings.words.join('\n'));

const draftWords = $derived(parseWords(wordsDraft));

onMount(() => {
	dialog.showModal();
});

function parseWords(value) {
	const words = [];
	for (const line of value.split(/\r?\n/)) {
		const word = line.trim();
		if (word !== '' && !words.includes(word)) {
			words.push(word);
		}
	}
	return words;
}

async function close() {
	if (draftWords.join('\n') !== settings.words.join('\n')) {
		await onChange({ words: draftWords });
	}
	onClose();
}

function closeOnBackdrop(event) {
	// A click on the dialog element itself (not its contents) landed on the backdrop.
	if (event.target === dialog) {
		dialog.close();
	}
}

/** Single-file build: the license texts ride along inside the page; show them in a new tab. */
function openLicenses() {
	const text = document.getElementById('licenses')?.textContent ?? '';
	const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
	window.open(url, '_blank', 'noopener');
}

function enableRule(rule) {
	onChange({ disabledRules: settings.disabledRules.filter((name) => name !== rule) });
}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} aria-labelledby="settings-title" onclose={close} onclick={closeOnBackdrop}>
	<form method="dialog">
		<header>
			<h2 id="settings-title">Settings</h2>
			<button type="submit" class="done">Done</button>
		</header>

		<section>
			<label for="dialect">English dialect</label>
			<p>Decides which spellings count as correct, such as “color” or “colour”.</p>
			<select
				id="dialect"
				value={settings.dialect}
				onchange={(event) => onChange({ dialect: Number(event.currentTarget.value) })}
			>
				{#each DIALECTS as dialect}
					<option value={dialect.value}>{dialect.label}</option>
				{/each}
			</select>
		</section>

		<section>
			<label for="words">
				Personal dictionary
				<span class="count">{draftWords.length} {draftWords.length === 1 ? 'word' : 'words'}</span>
			</label>
			<p>One word per line. Words you add from a spelling suggestion land here too.</p>
			<textarea id="words" rows="7" spellcheck="false" bind:value={wordsDraft}></textarea>
		</section>

		{#if settings.disabledRules.length > 0}
			<section>
				<h3>Rules you turned off</h3>
				<ul>
					{#each settings.disabledRules as rule}
						<li>
							<span>{ruleLabel(rule)}</span>
							<button type="button" class="link" onclick={() => enableRule(rule)}>Turn back on</button>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		<footer>
			<p>
				Your draft, dictionary and settings are kept in this browser only. Nothing you type is sent
				anywhere.
			</p>
			<p>
				Grammar checking by
				<a href="https://github.com/Automattic/harper" target="_blank" rel="noreferrer">Harper</a>
				(engine {__ENGINE_VERSION__}, editor {__EDITOR_VERSION__}).
				{#if __SINGLE_FILE__}
					<button type="button" class="link" onclick={openLicenses}>Open-source licenses</button>
				{:else}
					<a href="./THIRD-PARTY-NOTICES.txt" target="_blank" rel="noreferrer">Open-source licenses</a>
				{/if}
			</p>
		</footer>
	</form>
</dialog>

<style>
	dialog {
		width: min(460px, calc(100vw - 32px));
		max-height: calc(100vh - 48px);
		/* The editor's stylesheet resets every margin to 0; a modal dialog is centred by its auto margin. */
		margin: auto;
		padding: 0;
		overflow: auto;
		border: 0.5px solid rgba(28, 26, 22, 0.16);
		border-radius: 10px;
		background: #fff;
		box-shadow: 0 25px 50px rgba(12, 10, 9, 0.2);
		color: #0c0a09;
		font-family: 'Atkinson Hyperlegible', system-ui, 'Segoe UI', sans-serif;
		font-size: 13px;
		line-height: 1.5;
	}

	dialog::backdrop {
		background: rgba(12, 10, 9, 0.35);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 18px;
		margin: 0;
		padding: 16px 18px 18px;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h2 {
		margin: 0;
		font-size: 15px;
		font-weight: 700;
	}

	h3,
	label {
		display: flex;
		gap: 8px;
		align-items: baseline;
		margin: 0;
		font-size: 13px;
		font-weight: 700;
	}

	.count {
		color: #79716b;
		font-weight: 400;
		font-variant-numeric: tabular-nums;
	}

	p {
		margin: 2px 0 8px;
		color: #57534d;
	}

	select,
	textarea {
		box-sizing: border-box;
		width: 100%;
		border: 0.5px solid #d6d3d1;
		border-radius: 7px;
		background: #fbfaf6;
		color: inherit;
		font: inherit;
	}

	select {
		height: 30px;
		padding: 0 8px;
	}

	textarea {
		display: block;
		padding: 8px 10px;
		font-family: 'JetBrains Mono', ui-monospace, Consolas, monospace;
		font-size: 12px;
		line-height: 1.6;
		resize: vertical;
	}

	ul {
		margin: 6px 0 0;
		padding: 0;
		list-style: none;
	}

	li {
		display: flex;
		gap: 12px;
		align-items: baseline;
		justify-content: space-between;
		padding: 5px 0;
		border-top: 0.5px solid rgba(28, 26, 22, 0.09);
	}

	button {
		font: inherit;
		cursor: pointer;
	}

	.done {
		height: 28px;
		padding: 0 12px;
		border: 0.5px solid #1c1a16;
		border-radius: 7px;
		background: #1c1a16;
		color: #fbfaf6;
		font-weight: 700;
	}

	.link {
		flex: 0 0 auto;
		padding: 0;
		border: 0;
		background: none;
		color: #9a3412;
		font-weight: 700;
	}

	.link:hover,
	a:hover {
		text-decoration: underline;
	}

	select:focus-visible,
	textarea:focus-visible,
	button:focus-visible,
	a:focus-visible {
		outline: 2px solid #155dfc;
		outline-offset: 2px;
	}

	footer {
		padding-top: 12px;
		border-top: 0.5px solid rgba(28, 26, 22, 0.09);
	}

	footer p {
		margin: 0 0 4px;
		font-size: 12px;
	}

	a {
		color: #9a3412;
		font-weight: 700;
		text-decoration: none;
	}
</style>
