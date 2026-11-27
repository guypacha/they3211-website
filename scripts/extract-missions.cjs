// Reads the mission order from the built playground and writes src/data/missions.json.
// Run after syncing a new playground build: node scripts/extract-missions.cjs
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.route('**/sync.js', r => r.fulfill({ body: '', contentType: 'text/javascript' }));
  await p.goto('file://' + path.resolve('public/train/app/index.html')); await p.waitForTimeout(500);
  const paths = await p.evaluate(() => { const o = {}; for (const k in PATHS) o[k] = PATHS[k].filter(m => m.play).map(m => m.id); return o; });
  await b.close();
  const prev = {}, world = {}, lic = {}, min = {};
  for (const [w, ids] of Object.entries(paths)) ids.forEach((id, i) => { prev[id] = i ? ids[i - 1] : ''; world[id] = w; if (/lic$/.test(id)) lic[id] = true; min[id] = lic[id] ? 45 : 15; });
  fs.writeFileSync('src/data/missions.json', JSON.stringify({ paths, prev, world, lic, min }, null, 1) + '\n');
  console.log('missions:', Object.keys(prev).length);
})();
