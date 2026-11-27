// Bundles src/sync/bridge.ts into public/train/sync.js with the Firebase settings baked in.
import { build } from 'esbuild';
import { readFileSync, existsSync } from 'node:fs';
const env = { ...Object.fromEntries((existsSync('.env.production') && process.env.PUBLIC_USE_EMULATOR !== 'true' ? readFileSync('.env.production', 'utf8') : '').split('\n').filter(l => /^\w+=/.test(l)).map(l => l.split(/=(.*)/s).slice(0, 2))), ...process.env };
const emulator = env.PUBLIC_USE_EMULATOR === 'true';
const cfg = { apiKey: env.PUBLIC_FIREBASE_API_KEY || (emulator ? 'demo-key' : ''), authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN || '', projectId: emulator ? 'demo-they3211' : env.PUBLIC_FIREBASE_PROJECT_ID || '', appId: env.PUBLIC_FIREBASE_APP_ID || '', emulator };
await build({ entryPoints: ['src/sync/bridge.ts'], bundle: true, minify: true, format: 'esm', target: 'es2020', outfile: process.argv[2] || 'public/train/sync.js', define: { __CFG__: JSON.stringify(cfg) }, logLevel: 'warning' });
console.log('sync.js built', emulator ? '(emulator)' : cfg.projectId || '(accounts off)');
