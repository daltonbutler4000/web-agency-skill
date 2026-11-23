#!/usr/bin/env node
/*
 * Build the standalone reference board from the evidence record.
 *
 *   node build-board.cjs --dir agency/02-research [--out board.html] [--title "Project name"]
 *
 * Reads <dir>/references.json and embeds the screenshots, so the HTML file is portable.
 * Fields used per reference (add the notes by editing references.json after capture):
 *   name, url, found_via, direction, status, captured_at, shots[], error,
 *   observations { typography, imagery, layout, colour, interaction, motion },
 *   principle (what to take from it), caveat (what will not transfer)
 * Top level: project, round, directions [{ id, name, idea }]
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const get = (k, d) => { const i = args.indexOf(k); return i > -1 ? args[i + 1] : d; };
const dir = get('--dir', 'agency/02-research');
const out = path.join(dir, get('--out', 'board.html'));
const rec = JSON.parse(fs.readFileSync(path.join(dir, 'references.json'), 'utf8'));
if (get('--title')) rec.project = get('--title');

for (const r of rec.references || []) {
  for (const s of r.shots || []) {
    const p = path.join(dir, s.file);
    s.src = fs.existsSync(p) ? 'data:image/jpeg;base64,' + fs.readFileSync(p).toString('base64') : null;
  }
}
const tpl = fs.readFileSync(path.join(__dirname, '..', 'assets', 'reference-board.html'), 'utf8');
const json = JSON.stringify(rec).replace(/</g, '\\u003c');
fs.writeFileSync(out, tpl.replace('/*__DATA__*/null', () => json));
const n = (rec.references || []).length, bad = (rec.references || []).filter(r => r.status !== 'inspected').length;
console.log(`Wrote ${out}: ${n} references, ${bad} not inspected.`);
