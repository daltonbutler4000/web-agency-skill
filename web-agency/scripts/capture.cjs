#!/usr/bin/env node
/*
 * Capture screenshots of live pages and keep an honest evidence record.
 *
 *   node capture.cjs --out agency/02-research [--mobile] [--full] <url> [<url> ...]
 *
 * Writes <out>/shots/<id>-<viewport>.jpg and merges into <out>/references.json.
 * A page that fails to load is recorded with status "failed" and the error; it is
 * never given a screenshot or a description. Existing notes in references.json are kept.
 *
 * Needs Playwright (`require('playwright')`) and a Chromium it can launch.
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const opt = { out: 'agency/02-research', mobile: false, full: false, urls: [] };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--out') opt.out = args[++i];
  else if (a === '--mobile') opt.mobile = true;
  else if (a === '--full') opt.full = true;
  else if (a === '-h' || a === '--help') { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(0); }
  else opt.urls.push(a);
}
if (!opt.urls.length) { console.error('No URLs given. See --help.'); process.exit(2); }

let chromium;
try { ({ chromium } = require('playwright')); }
catch { console.error('Playwright is not available here. Install it (npm i -g playwright && npx playwright install chromium) or use a browser tool instead.'); process.exit(3); }

const VIEWPORTS = [{ name: 'desktop', width: 1440, height: 900 }];
if (opt.mobile) VIEWPORTS.push({ name: 'mobile', width: 390, height: 844 });

const slug = u => { const x = new URL(u); return (x.hostname.replace(/^www\./, '') + x.pathname).replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 60); };

(async () => {
  const shotsDir = path.join(opt.out, 'shots');
  fs.mkdirSync(shotsDir, { recursive: true });
  const recPath = path.join(opt.out, 'references.json');
  const rec = fs.existsSync(recPath) ? JSON.parse(fs.readFileSync(recPath, 'utf8')) : { directions: [], references: [] };
  rec.references = rec.references || [];

  const browser = await chromium.launch();
  for (const url of opt.urls) {
    let id;
    try { id = slug(url); } catch { console.error(`skip (not a URL): ${url}`); continue; }
    let entry = rec.references.find(r => r.url === url);
    if (!entry) { entry = { id, name: new URL(url).hostname.replace(/^www\./, ''), url }; rec.references.push(entry); }
    entry.shots = []; delete entry.error;
    try {
      for (const vp of VIEWPORTS) {
        const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2 });
        const page = await ctx.newPage();
        const res = await page.goto(url, { waitUntil: 'load', timeout: 45000 });
        if (!res || res.status() >= 400) throw new Error(`HTTP ${res ? res.status() : 'no response'}`);
        await page.waitForTimeout(2500); // let fonts, loaders and entrance motion settle
        if (vp.name === 'desktop') entry.title = (await page.title()).slice(0, 120);
        const file = `shots/${id}-${vp.name}.jpg`;
        await page.screenshot({ path: path.join(opt.out, file), type: 'jpeg', quality: 80, fullPage: opt.full });
        entry.shots.push({ file, viewport: `${vp.width}x${vp.height}`, label: vp.name, frame: opt.full ? 'full page' : 'first viewport' });
        await ctx.close();
      }
      entry.status = 'inspected';
      entry.captured_at = new Date().toISOString();
      console.log(`ok      ${url}`);
    } catch (e) {
      entry.status = 'failed';
      entry.shots = [];
      entry.error = String(e.message || e).split('\n')[0].slice(0, 200);
      console.log(`FAILED  ${url}  (${entry.error})`);
    }
  }
  await browser.close();
  fs.writeFileSync(recPath, JSON.stringify(rec, null, 2));
  console.log(`\nRecord: ${recPath}\nOpen each saved image before citing it: loaders and cookie banners count as failed captures.`);
})();
