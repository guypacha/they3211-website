// Training-ground account bridge, loaded by /train/app (both languages) as /train/sync.js.
// Exposes window.Y3211Sync for the app:
//   ready:  Promise<null | { name, role, m: {id: {stars, n}}, lic: {id: true} }>   null = guest, play locally
//   start(id):          stamp "mission opened" on the server (needed before finish)
//   finish(id, stars):  save a finished mission; the security rules accept it only if it is
//                       unlocked, took at least the minimum time, and has 1-3 stars. -> 'ok' | 'rejected' | 'offline'
// When logged in, the account (not localStorage) decides what is done and unlocked.
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, doc, getDoc, setDoc, updateDoc, serverTimestamp, type Timestamp } from 'firebase/firestore/lite';

declare const __CFG__: { apiKey: string; authDomain: string; projectId: string; appId: string; emulator: boolean };
type Entry = { stars: number; n: number; at?: Timestamp; s?: Timestamp };
type State = { name: string; role: string; m: Record<string, Entry>; lic: Record<string, unknown> };

const cfg = __CFG__;
let resolveReady: (v: State | null) => void;
const ready = new Promise<State | null>(r => (resolveReady = r));
let uid = '', state: State | null = null;
const starts: Record<string, Timestamp> = {};
const api = {
  ready,
  async start(id: string) {
    if (!uid) return false;
    try { await setDoc(doc(db, 'progress', uid, 'starts', id), { at: serverTimestamp() }); starts[id] = (await getDoc(doc(db, 'progress', uid, 'starts', id))).data()!.at; return true; }
    catch { return false; }
  },
  async finish(id: string, stars: number): Promise<'ok' | 'rejected' | 'offline'> {
    if (!uid || !state) return 'offline';
    const old = state.m[id];
    const s = starts[id] ?? (await getDoc(doc(db, 'progress', uid, 'starts', id)).then(d => d.data()?.at).catch(() => undefined));
    if (!s) return 'rejected';
    const e = { stars: Math.max(old?.stars || 0, Math.min(3, Math.max(1, Math.round(stars)))), n: (old?.n || 0) + 1, at: serverTimestamp(), s };
    try { await updateDoc(doc(db, 'progress', uid), { [`m.${id}`]: e, last: id, updatedAt: serverTimestamp() }); state.m[id] = { stars: e.stars, n: e.n }; return 'ok'; }
    catch (x: any) { return x?.code === 'permission-denied' ? 'rejected' : 'offline'; }
  },
};
(window as any).Y3211Sync = api;

let db: ReturnType<typeof getFirestore>;
if (!(cfg.apiKey && cfg.projectId)) resolveReady!(null);
else {
  const app = initializeApp(cfg);
  const auth = getAuth(app); db = getFirestore(app);
  if (cfg.emulator) { connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true }); connectFirestoreEmulator(db, '127.0.0.1', 8080); }
  let first = true;
  onAuthStateChanged(auth, async u => {
    if (!first) { location.reload(); return; }   // logged in or out in another tab
    first = false;
    if (!u) return resolveReady(null);
    try {
      // Until the admin publishes the mission list (and the new security rules are in), keep playing locally.
      const cfgDoc = await getDoc(doc(db, 'config', 'missions')).catch(() => null);
      if (!cfgDoc?.exists()) return resolveReady(null);
      const p = await getDoc(doc(db, 'users', u.uid));
      if (!p.exists() || p.data().disabled) return resolveReady(null);
      const ref = doc(db, 'progress', u.uid);
      let pr = await getDoc(ref);
      if (!pr.exists()) { await setDoc(ref, { m: {}, lic: {}, updatedAt: serverTimestamp() }); pr = await getDoc(ref); }
      const d = pr.data()!;
      uid = u.uid;
      state = { name: p.data().name, role: p.data().role, m: d.m || {}, lic: d.lic || {} };
      resolveReady(state);
    } catch { resolveReady(null); }
  });
}
