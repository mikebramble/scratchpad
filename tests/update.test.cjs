// Checks two things about the built site (docs/):
//   1. Chromium considers it installable as an app.
//   2. Deploying a new version replaces the old one cleanly, without downloading the engine again.
const { chromium } = require('playwright');
const { serve } = require('./serve.cjs');
const path = require('path'), fs = require('fs'), os = require('os');
const ROOT = path.resolve(__dirname, '..');
let failures = 0;
const check = (name, ok, detail = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); if (!ok) failures++; };
(async () => {
  // Serve from a copy, so the "deployed" files can be swapped underneath the browser.
  const site = fs.mkdtempSync(path.join(os.tmpdir(), 'padsite'));
  fs.cpSync(path.join(ROOT, 'docs'), site, { recursive: true });
  const srv = await serve(site, '/scratchpad/', 4176);
  const hits = [];
  srv.on('request', (req) => hits.push(req.url));
  const url = 'http://127.0.0.1:4176/scratchpad/';
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const fetched = [];
  page.on('console', (m) => { if (m.type() === 'error') console.log('[page error]', m.text().slice(0, 200)); });
  context.on('request', (r) => fetched.push(r.url()));   // includes service-worker requests

  await page.goto(url);
  await page.waitForSelector('.harper-editor-surface');
  const cdp = await context.newCDPSession(page);
  const manifest = await cdp.send('Page.getAppManifest');
  check('manifest is found and parses', !!manifest.url && manifest.errors.length === 0, `${manifest.url} errors=${JSON.stringify(manifest.errors)}`);
  const inst = await cdp.send('Page.getInstallabilityErrors');
  check('Chromium reports no installability errors', inst.installabilityErrors.length === 0, JSON.stringify(inst.installabilityErrors));
  const parsed = JSON.parse(manifest.data);
  console.log('(manifest:', JSON.stringify({ name: parsed.name, display: parsed.display, start_url: parsed.start_url, scope: parsed.scope, icons: parsed.icons.map((i) => i.sizes + (i.purpose ? ' ' + i.purpose : '')) }), ')');

  // ---- version 1 is installed and cached
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.waitForFunction(async () => (await caches.keys()).length === 1 && (await (await caches.open((await caches.keys())[0])).keys()).length >= 15, null, { timeout: 20000 });
  const v1 = await page.evaluate(async () => (await caches.keys())[0]);
  await page.click('.harper-editor-surface');
  await page.keyboard.insertText('Draft written under version one.');
  await page.waitForTimeout(600);

  // ---- "deploy" version 2: same engine, different page (new index.html + a changed asset name)
  const index = path.join(site, 'index.html');
  fs.writeFileSync(index, fs.readFileSync(index, 'utf8').replace('<title>Scratchpad</title>', '<title>Scratchpad v2</title>'));
  const sw = path.join(site, 'sw.js');
  fs.writeFileSync(sw, fs.readFileSync(sw, 'utf8').replace(/const VERSION = '[0-9a-f]+'/, "const VERSION = 'version2test'"));

  const engineDownloads = hits.filter((h) => h.endsWith('.wasm')).length;
  // Not asserted: headless Chromium keeps its HTTP cache in memory and will not hold a 16 MB entry,
  // so the page, Harper's worker and the offline copy each fetch the engine here. A desktop browser's
  // disk cache can serve the repeats.
  console.log(`(first visit: ${hits.length} requests reached the server, ${engineDownloads} of them for the engine)`);
  hits.length = 0;
  await page.reload();                      // still served by the old copy; the app checks for a newer one
  await page.waitForSelector('.harper-editor-surface');
  const titleFirst = await page.title();
  const toast = await page.waitForSelector('.toast button:has-text("Reload")', { timeout: 20000 }).then(() => true, () => false);
  const v2 = await page.evaluate(async () => (await caches.keys()));
  check('after a deploy, the app fetches the new copy and says so', toast && v2.length === 1 && v2[0].endsWith('version2test'), `toast=${toast} was ${v1.split(':').pop()} now ${JSON.stringify(v2.map((k) => k.split(':').pop()))}`);
  check('only the changed files are downloaded; the 16 MB engine is carried over', !hits.some((h) => h.includes('/assets/')), JSON.stringify(hits.map((h) => h.replace('/scratchpad/', '') || './')));
  await page.click('.toast button:has-text("Reload")');
  await page.waitForFunction(() => document.title === 'Scratchpad v2', null, { timeout: 10000 }).catch(() => {});
  await page.waitForSelector('.harper-editor-surface p');
  check('Reload shows the new version', (await page.title()) === 'Scratchpad v2', `before: "${titleFirst}", after: "${await page.title()}"`);
  check('the draft survives the update', /version one/.test(await page.evaluate(() => document.querySelector('.harper-editor-surface').innerText)));

  // ---- and it still works with the server gone
  srv.close(); await context.setOffline(true);
  await page.reload();
  const ok = await page.waitForSelector('.harper-editor-surface p', { timeout: 20000 }).then(() => true, () => false);
  check('updated copy opens offline', ok && (await page.title()) === 'Scratchpad v2');
  await browser.close();
  console.log(failures === 0 ? '\nALL PASSED' : `\n${failures} FAILED`);
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error('CRASHED', e); process.exit(2); });
