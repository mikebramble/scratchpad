// End-to-end check of the built site (docs/) in headless Chromium, served from a sub-path the way
// GitHub Pages serves a project site. Run with: npm test
//
// Set SHOTS=some/folder to also save screenshots along the way.
const { chromium } = require('playwright');
const { serve } = require('./serve.cjs');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const ORIGIN = 'http://127.0.0.1:4173';
const URL_ = ORIGIN + '/scratchpad/';
const SHOTS = process.env.SHOTS ? path.resolve(process.env.SHOTS) : null;
if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
const shot = async (page, name) => { if (SHOTS) await page.screenshot({ path: path.join(SHOTS, name + '.png') }); };

let failures = 0;
function check(name, ok, detail = '') {
	console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
	if (!ok) failures++;
}

(async () => {
	const srv = await serve(path.join(ROOT, 'docs'), '/scratchpad/', 4173);
	const browser = await chromium.launch();
	const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
	await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: ORIGIN });
	const page = await context.newPage();

	const requests = [];
	const problemsLog = [];
	page.on('request', (r) => requests.push(r.url()));
	page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problemsLog.push(`[${m.type()}] ${m.text()}`); });
	page.on('pageerror', (e) => problemsLog.push('[pageerror] ' + e.message));

	// ---- helpers ------------------------------------------------------------------------------
	const ready = async () => { await page.waitForSelector('.harper-editor-surface', { timeout: 60000 }); };
	const problemCount = () => page.evaluate(() => {
		const t = document.querySelector('footer[aria-label="Editor status"]')?.innerText ?? '';
		if (/All clear/.test(t)) return 0;
		const m = t.match(/(\d+) problem/); return m ? Number(m[1]) : -1;
	});
	const waitProblems = (pred, timeout = 8000) => page.waitForFunction((src) => {
		const t = document.querySelector('footer[aria-label="Editor status"]')?.innerText ?? '';
		const n = /All clear/.test(t) ? 0 : Number((t.match(/(\d+) problem/) ?? [])[1] ?? -1);
		return new Function('n', 'return ' + src)(n);
	}, pred, { timeout }).then(() => true, () => false);
	const stored = (key) => page.evaluate((k) => { const v = localStorage.getItem('scratchpad:' + k); return v == null ? null : JSON.parse(v); }, key);
	const kinds = () => page.evaluate(() => [...document.querySelectorAll('aside[aria-label="Problems"] [role="group"] > button')].map((b) => b.innerText.trim()));
	const pointOf = (word) => page.evaluate((w) => {
		const root = document.querySelector('.harper-editor-surface');
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
		let n;
		while ((n = walker.nextNode())) {
			const i = n.textContent.indexOf(w);
			if (i >= 0) {
				const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + w.length);
				const b = r.getBoundingClientRect();
				return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
			}
		}
		return null;
	}, word);
	const clickWord = async (word) => { const p = await pointOf(word); if (!p) throw new Error('word not found: ' + word); await page.mouse.click(p.x, p.y); };
	const toastText = () => page.evaluate(() => document.querySelector('.toast')?.innerText.replace(/\s+/g, ' ') ?? null);
	const editorText = () => page.evaluate(() => [...document.querySelectorAll('.harper-editor-surface p')].map((p) => p.textContent).join('\n'));
	const typeAll = async (text) => { await page.click('.harper-editor-surface'); await page.keyboard.insertText(text); };

	// ---- 1. first load --------------------------------------------------------------------------
	const t0 = Date.now();
	await page.goto(URL_);
	await ready();
	console.log(`(editor ready ${Date.now() - t0} ms after navigation)`);
	check('editor loads from a sub-path', true);
	check('editor is focused, ready to type', await page.evaluate(() => document.activeElement?.classList.contains('harper-editor-surface')));
	await shot(page, 'site-0-empty');

	// ---- 2. linting -------------------------------------------------------------------------------
	const sample = [
		"There are some cases where the the standard grammar checkers don't cut it. That;s where Harper comes in handy.",
		'Harper is an language checker for developers. It can detect improper capitalization and misspellled words.',
		'',
		'Our team flew the Zorblatt spectrometer over the the test site, and their was alot of good data.',
	].join('\n');
	await typeAll(sample);
	check('problems are found', await waitProblems('n >= 5'), `count=${await problemCount()} kinds=${JSON.stringify(await kinds())}`);
	await page.waitForTimeout(600);
	check('draft is saved as typed, blank line intact', (await stored('draft')) === sample);
	await shot(page, 'site-1-linted');

	// ---- 3. fix from a sidebar card ---------------------------------------------------------------
	const before = await problemCount();
	await page.click('aside[aria-label="Problems"] [role="group"] button[title^="Replace with"]');
	await waitProblems(`n === ${before - 1}`);
	await page.waitForTimeout(500);
	const afterCard = await stored('draft');
	check('one-click fix from the sidebar card changes the text', afterCard !== sample && afterCard.length < sample.length, JSON.stringify(afterCard.slice(0, 60)));

	// ---- 4. popup on an underlined word, apply a suggestion ------------------------------
	await clickWord('misspellled');
	const popupOpen = await page.waitForSelector('harper-render-box .harper-popup', { timeout: 5000 }).then(() => true, () => false);
	check('clicking an underlined word opens the suggestion popup', popupOpen);
	await page.waitForTimeout(300);
	await shot(page, 'site-2-popup');
	const popupInfo = await page.evaluate(() => {
		const hosts = [...document.querySelectorAll('harper-render-box')];
		const root = hosts.map((h) => h.shadowRoot).find((r) => r?.querySelector('.harper-popup'));
		return {
			rows: [...root.querySelectorAll('.harper-row')].map((r) => r.innerText.replace(/\s+/g, ' ').trim()),
			buttons: [...root.querySelectorAll('button,[role="button"]')].map((b) => b.title || b.getAttribute('aria-label') || b.innerText.trim()).filter(Boolean),
		};
	});
	console.log('(popup rows:', JSON.stringify(popupInfo.rows), ' buttons:', JSON.stringify(popupInfo.buttons), ')');
	check('popup offers "add to dictionary" and "disable rule"', popupInfo.buttons.some((b) => /dictionary/i.test(b)) && popupInfo.buttons.some((b) => /Disable/i.test(b)));
	await page.click('harper-render-box #harper-suggestion-0');
	await page.waitForTimeout(700);
	check('applying the popup suggestion fixes the word', /misspelled words/.test(await stored('draft')), JSON.stringify((await stored('draft')).slice(160, 230)));

	// ---- 5. add to dictionary -------------------------------------------------------------------
	const beforeDict = await problemCount();
	await clickWord('Zorblatt');
	await page.waitForSelector('harper-render-box .harper-popup');
	await page.click('harper-render-box [title="Add word to user dictionary"]');
	check('adding a word clears its underline right away', await waitProblems(`n === ${beforeDict - 1}`, 4000), `before=${beforeDict} after=${await problemCount()}`);
	check('the word is saved', JSON.stringify(await stored('words')) === '["Zorblatt"]', JSON.stringify(await stored('words')));
	check('a toast confirms it with Undo', /Zorblatt.*dictionary.*Undo/.test(await toastText() ?? ''), await toastText());
	await shot(page, 'site-3-dictionary-toast');

	// ---- 6. ignore a problem ----------------------------------------------------------------------
	const cardFor = (kind) => page.locator('aside[aria-label="Problems"] [role="group"]').filter({ has: page.locator(`> button:has-text("${kind}")`) }).first();
	const messages = async () => {
		await page.click('button[aria-label="More problem actions"]');
		const openAll = page.locator('#problem-actions-menu button:has-text("Open All")');
		if (await openAll.isEnabled()) await openAll.click(); else await page.keyboard.press('Escape');
		await page.waitForTimeout(350);
		return page.evaluate(() => [...document.querySelectorAll('aside[aria-label="Problems"] [role="group"]')].map((c) => c.innerText.replace(/\s+/g, ' ').trim()));
	};
	const beforeIgnore = await messages();
	check('the article problem is listed', beforeIgnore.some((m) => /Incorrect indefinite article/.test(m)), JSON.stringify(beforeIgnore.map((m) => m.slice(0, 40))));
	await cardFor('Miscellaneous').locator('button:has-text("Ignore")').click();
	await page.waitForTimeout(900);
	const afterIgnore = await messages();
	check('Ignore dismisses that problem', !afterIgnore.some((m) => /Incorrect indefinite article/.test(m)) && afterIgnore.length === beforeIgnore.length - 1, `before=${beforeIgnore.length} after=${afterIgnore.length}`);
	const savedDismissals = await stored('dismissed');
	check('the dismissal is saved with the draft', Array.isArray(savedDismissals) && savedDismissals.length === 1 && savedDismissals[0].text === 'an', JSON.stringify(savedDismissals));

	// ---- 7. font size is remembered -------------------------------------------------------------
	await page.selectOption('select[aria-label="Font size"]', '18');
	await page.waitForTimeout(200);
	check('font size choice is saved', (await stored('display'))?.fontSize === 18, JSON.stringify(await stored('display')));

	// ---- 8. reload: everything comes back ------------------------------------------------------
	const draftBeforeReload = await stored('draft');
	const countBeforeReload = await problemCount();
	await page.reload();
	await ready();
	await waitProblems(`n === ${countBeforeReload}`, 8000);
	const surfaceText = await page.evaluate(() => document.querySelector('.harper-editor-surface').innerText);
	check('draft survives a reload', surfaceText.replace(/\n+/g, '\n').trim() === draftBeforeReload.replace(/\n+/g, '\n').trim());
	check('dictionary word and ignored problem stay quiet after reload', (await problemCount()) === countBeforeReload, `before=${countBeforeReload} after=${await problemCount()}`);
	check('font size survives a reload', await page.evaluate(() => getComputedStyle(document.querySelector('.harper-editor-surface')).fontSize) === '18px');

	// ---- 8b. real keystrokes, typed fast, are not dropped or re-ordered -------------------------
	await page.click('.harper-editor-surface');
	await page.keyboard.press('Control+End');
	const typed = ' Quick brown foxes jump over lazy dogs, twice.';
	await page.keyboard.type(typed, { delay: 0 });
	await page.keyboard.press('Enter');
	await page.keyboard.type('Second line', { delay: 0 });
	await page.waitForTimeout(600);
	check('fast typing arrives intact', (await stored('draft')) === draftBeforeReload + typed + '\nSecond line', JSON.stringify((await stored('draft')).slice(-70)));
	// Undo: the typing goes away, and pressing undo again must never roll back the restored draft.
	for (let i = 0; i < 6; i++) { await page.keyboard.press('Control+z'); await page.waitForTimeout(120); }
	await page.waitForTimeout(500);
	check('Ctrl+Z undoes typing but never wipes the restored draft', (await editorText()) === draftBeforeReload && (await stored('draft')) === draftBeforeReload, JSON.stringify((await editorText()).slice(-40)));
	await page.keyboard.press('Control+Shift+z');
	await page.waitForTimeout(300);
	check('redo brings typing back', (await editorText()) !== draftBeforeReload, JSON.stringify((await editorText()).slice(-30)));
	for (let i = 0; i < 6; i++) { await page.keyboard.press('Control+z'); await page.waitForTimeout(120); }
	await page.waitForTimeout(500);

	// A fix applied from a card can be taken back with undo as well.
	await messages();   // opens every card
	await cardFor('Repetition').locator('button[title^="Replace with"]').click();
	await page.waitForTimeout(600);
	const fixedText = await editorText();
	await page.click('.harper-editor-surface');
	await page.keyboard.press('Control+z');
	await page.waitForTimeout(600);
	const undoneText = await editorText();
	check('a one-click fix can be undone with Ctrl+Z', fixedText !== draftBeforeReload && undoneText === draftBeforeReload, `fixed=${fixedText.length} chars, after undo=${undoneText.length}, original=${draftBeforeReload.length}`);
	if (undoneText !== draftBeforeReload) {
		// keep the rest of the run meaningful
		console.log('   after fix :', JSON.stringify(fixedText.slice(-90)));
		console.log('   after undo:', JSON.stringify(undoneText.slice(-90)));
	}

	// ---- 8c. ordinary select-all + copy also yields clean plain text ----------------------
	await page.click('.harper-editor-surface');
	await page.keyboard.press('Control+a');
	await page.keyboard.press('Control+c');
	await page.waitForTimeout(200);
	const manual = await page.evaluate(async () => {
		const items = await navigator.clipboard.read();
		const out = {};
		for (const item of items) for (const type of item.types) out[type] = await (await item.getType(type)).text();
		return out;
	});
	check('Ctrl+A, Ctrl+C gives the same plain text', (manual['text/plain'] ?? '').replace(/\r\n/g, '\n').replace(/\n$/, '') === draftBeforeReload, JSON.stringify((manual['text/plain'] ?? '').slice(0, 40)));
	check('…and nothing but plain text (no HTML version with non-breaking spaces)', JSON.stringify(Object.keys(manual)) === '["text/plain"]', JSON.stringify(Object.keys(manual)) + ' ' + JSON.stringify((manual['text/html'] ?? '').slice(0, 80)));
	await page.keyboard.press('Control+End');

	// ---- 8d. cut and paste ---------------------------------------------------------------------------
	await page.keyboard.press('Control+a');
	await page.keyboard.press('Control+x');
	await page.waitForTimeout(500);
	const cut = await page.evaluate(async () => { const out = {}; for (const item of await navigator.clipboard.read()) for (const type of item.types) out[type] = await (await item.getType(type)).text(); return out; });
	check('Ctrl+X removes the text and leaves plain text on the clipboard', (await editorText()) === '' && JSON.stringify(Object.keys(cut)) === '["text/plain"]' && cut['text/plain'].replace(/\r\n/g, '\n').replace(/\n$/, '') === draftBeforeReload, JSON.stringify(Object.keys(cut)) + ` editor=${JSON.stringify((await editorText()).slice(0, 20))}`);
	await page.keyboard.press('Control+v');
	await page.waitForTimeout(700);
	check('Ctrl+V puts it back unchanged', (await editorText()) === draftBeforeReload && (await stored('draft')) === draftBeforeReload, JSON.stringify((await editorText()).slice(0, 40)));

	// Pasting rich text from elsewhere (a web page, a mail) arrives as plain text.
	await page.keyboard.press('Control+a');
	await page.evaluate(async () => {
		const html = '<p>Results were <b>very</b> <a href="https://example.com">promising</a>.</p><p>Second&nbsp;para <i>here</i>.</p>';
		await navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob(['Results were very promising.\r\nSecond\u00a0para here.'], { type: 'text/plain' }) })]);
	});
	await page.keyboard.press('Control+v');
	await page.waitForTimeout(700);
	const pasted = await page.evaluate(() => ({ html: document.querySelector('.harper-editor-surface').innerHTML, tags: [...new Set([...document.querySelectorAll('.harper-editor-surface *')].map((e) => e.tagName))] }));
	console.log('(rich paste ->', JSON.stringify(await editorText()), 'tags', JSON.stringify(pasted.tags), ')');
	check('rich text pasted in loses its formatting', !pasted.tags.some((t) => ['B', 'STRONG', 'A', 'I', 'EM'].includes(t)) && /^Results were very promising\.\nSecond.para here\.$/.test(await editorText()), JSON.stringify(pasted.tags));
	// restore the working text for the remaining steps
	await page.keyboard.press('Control+a');
	await page.evaluate((t) => navigator.clipboard.writeText(t), draftBeforeReload);
	await page.keyboard.press('Control+v');
	await page.waitForTimeout(900);
	check('(text restored for the remaining steps)', (await stored('draft')) === draftBeforeReload);

	// ---- 9. copy ---------------------------------------------------------------------------------------
	await page.click('button:has-text("Copy text")');
	await page.waitForTimeout(200);
	const clip = await page.evaluate(() => navigator.clipboard.readText());
	check('Copy puts exactly the plain text on the clipboard', clip === draftBeforeReload, JSON.stringify(clip.slice(0, 50)) + ` (${clip.length} chars, ${clip.split('\n').length} lines)`);
	check('copy toast', /Copied/.test(await toastText() ?? ''), await toastText());

	// ---- 9b. Ctrl+S is answered instead of opening the browser's "save page" dialog -----
	await page.click('.harper-editor-surface');
	const savePrevented = await page.evaluate(() => new Promise((resolve) => {
		window.addEventListener('keydown', (e) => { if (e.key === 's' && e.ctrlKey) setTimeout(() => resolve(e.defaultPrevented), 0); }, { once: true });
		document.querySelector('.harper-editor-surface').dispatchEvent(new KeyboardEvent('keydown', { key: 's', ctrlKey: true, bubbles: true, cancelable: true }));
	}));
	await page.waitForTimeout(150);
	check('Ctrl+S is handled and confirms the draft is saved', savePrevented && /Saved on this device/.test(await toastText() ?? ''), `prevented=${savePrevented} toast=${await toastText()}`);

	// ---- 10. clear + undo ---------------------------------------------------------------------------
	await page.click('button:has-text("Clear")');
	await page.waitForTimeout(500);
	check('Clear empties the editor and the saved draft', (await stored('draft')) === '' && (await page.evaluate(() => document.querySelector('.harper-editor-surface').innerText.trim())) === '');
	check('…and the editor is focused for the next text', await page.evaluate(() => document.activeElement?.classList.contains('harper-editor-surface')));
	await shot(page, 'site-4-cleared');
	await page.click('.toast button:has-text("Undo")');
	await page.waitForTimeout(600);
	check('Undo in the toast brings the text back', (await stored('draft')) === draftBeforeReload && (await editorText()) === draftBeforeReload);
	// The same with the keyboard, after the toast is gone: clear, type something, undo twice.
	await page.click('button:has-text("Clear")');
	await page.waitForTimeout(1200);
	await page.keyboard.type('oops', { delay: 0 });
	await page.waitForTimeout(1200);
	await page.keyboard.press('Control+z');
	await page.waitForTimeout(300);
	check('Ctrl+Z after Clear first removes what was typed since', (await editorText()) === '', JSON.stringify((await editorText()).slice(0, 30)));
	await page.keyboard.press('Control+z');
	await page.waitForTimeout(600);
	check('…then restores the cleared text', (await editorText()) === draftBeforeReload && (await stored('draft')) === draftBeforeReload, JSON.stringify((await editorText()).slice(0, 40)));
	for (let i = 0; i < 5; i++) { await page.keyboard.press('Control+z'); await page.waitForTimeout(100); }
	await page.waitForTimeout(500);
	check('…and the previously ignored problem stays ignored', await waitProblems(`n === ${countBeforeReload}`, 5000), `expected=${countBeforeReload} got=${await problemCount()}`);

	// ---- 11. disable a rule from the popup, re-enable in settings ------------------------
	const beforeRule = await messages();
	check('"alot" is flagged by the compound-word rule', beforeRule.some((m) => /should be written as two words/.test(m)));
	await clickWord('alot');
	await page.waitForSelector('harper-render-box .harper-popup');
	const disableTitle = await page.evaluate(() => {
		const root = [...document.querySelectorAll('harper-render-box')].map((h) => h.shadowRoot).find((r) => r?.querySelector('.harper-popup'));
		return root.querySelector('[title^="Disable the"]')?.title ?? null;
	});
	await page.click('harper-render-box [title^="Disable the"]');
	await page.waitForTimeout(900);
	const afterRule = await messages();
	check('disabling a rule removes that rule\'s problems', !afterRule.some((m) => /should be written as two words/.test(m)), `${disableTitle}`);
	check('the rule is off for this draft only; the toast offers Always and Undo', JSON.stringify(await stored('draftRules')) === '["OpenCompounds"]' && (await stored('disabledRules'))?.length === 0 && /for this draft.*Always.*Undo/.test(await toastText() ?? ''), JSON.stringify(await stored('draftRules')) + ' / ' + (await toastText()));

	await page.click('button[aria-label="Settings"]');
	await page.waitForSelector('dialog[open]');
	await page.waitForTimeout(200);
	await shot(page, 'site-5-settings');
	const listed = await page.evaluate(() => [...document.querySelectorAll('dialog li')].map((li) => li.innerText.replace(/\s+/g, ' ').trim()));
	check('settings lists the dictionary word, the dismissal and the rule off for this draft', (await page.evaluate(() => document.querySelector('dialog textarea').value)) === 'Zorblatt' && listed.some((t) => /^1 dismissed problem/.test(t)) && listed.some((t) => /^Open Compounds is off/.test(t)), JSON.stringify(listed));
	const box = await page.evaluate(() => { const r = document.querySelector('dialog').getBoundingClientRect(); return { left: Math.round(r.left), right: Math.round(innerWidth - r.right), top: Math.round(r.top), bottom: Math.round(innerHeight - r.bottom) }; });
	check('settings dialog is centred', Math.abs(box.left - box.right) <= 1 && Math.abs(box.top - box.bottom) <= 1, JSON.stringify(box));
	await page.click('dialog li:has-text("Open Compounds") button:has-text("Always off")');
	await page.waitForTimeout(400);
	check('"Always off" makes it permanent', JSON.stringify(await stored('disabledRules')) === '["OpenCompounds"]' && (await stored('draftRules'))?.length === 0, JSON.stringify([await stored('disabledRules'), await stored('draftRules')]));
	await page.click('dialog li:has-text("Open Compounds") button:has-text("Turn back on")');
	await page.waitForTimeout(400);
	check('rule can be turned back on', (await stored('disabledRules'))?.length === 0 && (await stored('draftRules'))?.length === 0);

	// ---- 12. dictionary edits and dialect in settings -----------------------------------
	await page.fill('dialog textarea', '');
	await page.selectOption('dialog select', { label: 'British' });
	await page.click('dialog button:has-text("Done")');
	await page.waitForTimeout(400);
	check('settings dialog closes and saves', (await page.locator('dialog[open]').count()) === 0 && (await stored('dialect')) === 1 && JSON.stringify(await stored('words')) === '[]', `dialect=${await stored('dialect')} words=${JSON.stringify(await stored('words'))}`);
	let afterSettings = [];
	for (let i = 0; i < 12; i++) {
		afterSettings = await messages();
		if (afterSettings.some((m) => /Zorblatt/.test(m)) && afterSettings.some((m) => /two words/.test(m))) break;
		await page.waitForTimeout(400);
	}
	check('removing the word and re-enabling the rule brings both problems back', afterSettings.some((m) => /should be written as two words/.test(m)) && afterSettings.some((m) => /Zorblatt/.test(m) && /^Spelling/.test(m)), JSON.stringify(afterSettings.map((m) => m.slice(0, 34))));
	await shot(page, 'site-5b-after-settings');

	await page.click('button:has-text("Clear")');
	await typeAll('The color of the center is gray.');
	const british = await waitProblems('n >= 1', 5000);
	check('British dialect flags American spellings', british, `count=${await problemCount()} kinds=${JSON.stringify(await kinds())}`);
	await shot(page, 'site-6-british');

	// ---- 12b. long sentences ------------------------------------------------------------------------
	await page.click('button:has-text("Clear")');
	await page.waitForTimeout(300);
	check('Clear starts the new draft with nothing dismissed', (await stored('dismissed'))?.length === 0 && (await stored('draftRules'))?.length === 0);
	const longSentence = 'The instrument was calibrated in the lab using a blackbody source at several temperatures and then we recieved the data from the team who processed it with their pipeline before sending it back to us for a final review of all the results and figures.';
	await typeAll(longSentence);
	let long = [];
	for (let i = 0; i < 10; i++) { long = await messages(); if (long.some((t) => /words long/.test(t)) && long.some((t) => /recieved/.test(t))) break; await page.waitForTimeout(300); }
	check('a long sentence no longer hides the problems inside it', long.some((t) => /words long/.test(t)) && long.some((t) => /recieved/.test(t)), JSON.stringify(long.map((t) => t.slice(0, 40))));
	check('…and its warning is listed after them', /words long/.test(long[long.length - 1] ?? ''));
	await clickWord('recieved');
	await page.waitForSelector('harper-render-box .harper-popup');
	const popupKind = await page.evaluate(() => [...document.querySelectorAll('harper-render-box')].map((h) => h.shadowRoot).find((r) => r?.querySelector('.harper-popup')).querySelector('.harper-popup').innerText.replace(/\s+/g, ' '));
	check('clicking a misspelled word inside it opens the spelling fix, not the sentence warning', /received/.test(popupKind) && !/words long/.test(popupKind), popupKind.slice(0, 80));
	await page.keyboard.press('Escape');
	await page.mouse.click(5, 5);
	await page.waitForTimeout(200);
	await shot(page, 'site-7-long-sentence');

	await cardFor('Readability').locator('button:has-text("Ignore")').click();
	await page.waitForTimeout(800);
	long = await messages();
	check('dismissing the long-sentence warning hides it', !long.some((t) => /words long/.test(t)) && long.some((t) => /recieved/.test(t)), JSON.stringify(long.map((t) => t.slice(0, 30))));
	await cardFor('Spelling').filter({ hasText: 'recieved' }).locator('button[title^="Replace with"]').first().click();
	await page.waitForTimeout(900);
	long = await messages();
	check('…it stays dismissed after fixing a word inside the sentence', /received the data/.test(await editorText()) && !long.some((t) => /words long/.test(t)), JSON.stringify(long.map((t) => t.slice(0, 30))));
	// Reword part of the sentence: insert a word after "calibrated".
	await page.evaluate(() => {
		const root = document.querySelector('.harper-editor-surface');
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
		let node;
		while ((node = walker.nextNode())) {
			const i = node.textContent.indexOf('calibrated');
			if (i >= 0) { const r = document.createRange(); r.setStart(node, i + 'calibrated'.length); r.collapse(true); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); root.focus(); return; }
		}
	});
	await page.keyboard.type(' very carefully', { delay: 0 });
	await page.waitForTimeout(1200);
	long = await messages();
	check('…and after rewording part of it', /calibrated very carefully/.test(await editorText()) && !long.some((t) => /words long/.test(t)), JSON.stringify(long.map((t) => t.slice(0, 30))));
	await page.reload();
	await ready();
	await page.waitForTimeout(1500);
	long = await messages();
	check('…and after a reload', !long.some((t) => /words long/.test(t)), JSON.stringify(long.map((t) => t.slice(0, 30))));
	await page.click('.harper-editor-surface');
	await page.keyboard.press('Control+End');
	await page.keyboard.press('Enter');
	await page.keyboard.insertText('A completely different sentence that goes on and on about the weather in the mountains and the snow on the trails and the people who walk them every morning before work in the cold and the dark of winter, which is long.');
	long = [];
	for (let i = 0; i < 10; i++) { long = await messages(); if (long.some((t) => /words long/.test(t))) break; await page.waitForTimeout(300); }
	check('a different long sentence is still flagged', long.filter((t) => /words long/.test(t)).length === 1, JSON.stringify(long.map((t) => t.slice(0, 30))));
	await page.click('button[aria-label="Settings"]');
	await page.waitForSelector('dialog[open]');
	await page.click('dialog li:has-text("dismissed") button:has-text("Bring back")');
	await page.click('dialog button:has-text("Done")');
	long = [];
	for (let i = 0; i < 10; i++) { long = await messages(); if (long.filter((t) => /words long/.test(t)).length === 2) break; await page.waitForTimeout(300); }
	check('"Bring back" in Settings restores dismissed problems', long.filter((t) => /words long/.test(t)).length === 2 && (await stored('dismissed'))?.length === 0, JSON.stringify(long.map((t) => t.slice(0, 30))));

	// ---- 13. offline -----------------------------------------------------------------------------------
	const swReady = await page.evaluate(async () => {
		const reg = await Promise.race([navigator.serviceWorker.ready, new Promise((r) => setTimeout(() => r(null), 15000))]);
		return reg ? { scope: reg.scope, active: !!reg.active, controlled: !!navigator.serviceWorker.controller } : null;
	});
	console.log('(service worker:', JSON.stringify(swReady), ')');
	check('service worker installs with the right scope', swReady?.scope === URL_ && swReady.active);
	const cached = await page.evaluate(async () => { const names = await caches.keys(); const c = await caches.open(names[0]); return { names, entries: (await c.keys()).length }; });
	console.log('(cache:', JSON.stringify(cached), ')');
	await context.setOffline(true);
	srv.close();   // really gone, not just "offline" in the browser
	await new Promise((r) => setTimeout(r, 200));
	requests.length = 0;
	const offlineLoaded = await page.reload().then(() => true, (e) => { console.log('reload error', e.message); return false; });
	const offlineReady = offlineLoaded && await ready().then(() => true, () => false);
	check('page reloads with the network and server gone', offlineReady);
	if (offlineReady) {
		check('offline: draft is back and problems are found', await waitProblems('n >= 1', 8000), `count=${await problemCount()}`);
		await page.click('.harper-editor-surface');
		await page.keyboard.press('Control+End');
		const offlineBefore = await problemCount();
		await page.keyboard.insertText(' This sentense is new.');
		check('offline: new text is checked', await waitProblems(`n === ${offlineBefore + 1}`, 8000), `before=${offlineBefore} after=${await problemCount()}`);
		await shot(page, 'site-7-offline');
	}

	// ---- wrap-up ------------------------------------------------------------------------------------
	const external = requests.filter((u) => !u.startsWith(ORIGIN + '/') && !u.startsWith('blob:') && !u.startsWith('data:'));
	check('no requests to any other server at any point', external.length === 0, JSON.stringify(external));
	const noise = problemsLog.filter((l) => !/Failed to load resource: net::ERR_INTERNET_DISCONNECTED/.test(l));
	check('no console errors or warnings', noise.length === 0, JSON.stringify(noise.slice(0, 6)));

	await browser.close();
	console.log(failures === 0 ? '\nALL PASSED' : `\n${failures} FAILED`);
	process.exit(failures === 0 ? 0 : 1);
})().catch((e) => { console.error('TEST CRASHED', e); process.exit(2); });
