// Opens the single-file build (dist-single/index.html) straight from disk, as a double-click would.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs'), os = require('os');
const ROOT = path.resolve(__dirname, '..');
const src = process.argv[2] || path.join(ROOT, 'dist-single/index.html');
let failures = 0;
const check = (name, ok, detail = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); if (!ok) failures++; };
(async () => {
  // Copy to a path with a space in it, like a Windows "My Documents" folder.
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pad single '));
  const file = path.join(dir, 'Scratchpad.html');
  fs.copyFileSync(src, file);
  const url = 'file://' + file.split(path.sep).map(encodeURIComponent).join('/');
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1100, height: 720 } });
  const page = await context.newPage();
  const requests = [], log = [];
  page.on('request', (r) => requests.push(r.url()));
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') log.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => log.push('[pageerror] ' + e.message));
  const count = () => page.evaluate(() => { const t = document.querySelector('footer[aria-label="Editor status"]')?.innerText ?? ''; return /All clear/.test(t) ? 0 : Number((t.match(/(\d+) problem/) ?? [])[1] ?? -1); });
  const waitCount = (n, timeout = 8000) => page.waitForFunction((n) => { const t = document.querySelector('footer[aria-label="Editor status"]')?.innerText ?? ''; const c = /All clear/.test(t) ? 0 : Number((t.match(/(\d+) problem/) ?? [])[1] ?? -1); return c === n; }, n, { timeout }).then(() => true, () => false);
  const t0 = Date.now();
  await page.goto(url);
  const ok = await page.waitForSelector('.harper-editor-surface', { timeout: 60000 }).then(() => true, () => false);
  check('opens from disk and the editor starts', ok, `${Date.now() - t0} ms`);
  if (ok) {
    await page.click('.harper-editor-surface');
    await page.keyboard.insertText('This is an test of the the Zorblatt instrument.');
    check('problems are found', await waitCount(3), `count=${await count()}`);
    await page.click('aside[aria-label="Problems"] [role="group"] button[title^="Replace with"]');
    check('one-click fix works', await waitCount(2), `count=${await count()}`);
    await page.waitForTimeout(600);
    await page.reload();
    await page.waitForSelector('.harper-editor-surface p');
    check('draft is remembered across a reload', await waitCount(2) && /Zorblatt instrument/.test(await page.evaluate(() => document.querySelector('.harper-editor-surface').innerText)), await page.evaluate(() => document.querySelector('.harper-editor-surface').innerText));
    await page.click('button:has-text("Copy text")');
    await page.waitForTimeout(300);
    check('Copy reports success', /Copied/.test(await page.evaluate(() => document.querySelector('.toast')?.innerText ?? '')), await page.evaluate(() => document.querySelector('.toast')?.innerText ?? ''));
  }
  const external = requests.filter((u) => !u.startsWith('file://') && !u.startsWith('blob:') && !u.startsWith('data:'));
  check('no network requests', external.length === 0, JSON.stringify(external.slice(0, 5)));
  check('no console errors or warnings', log.length === 0, JSON.stringify(log.slice(0, 5)));
  console.log('(requests made:', requests.map((u) => u.slice(0, 60)).join(' | '), ')');
  await browser.close();
  console.log(failures === 0 ? '\nALL PASSED' : `\n${failures} FAILED`);
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error('CRASHED', e); process.exit(2); });
