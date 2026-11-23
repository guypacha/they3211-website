// Site accounts: Firebase Auth (username + password) + Firestore roles.
// Config comes from PUBLIC_FIREBASE_* env vars at build time. Without them,
// accounts are switched off and the pages say "coming soon".
import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getAuth, connectAuthEmulator, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, deleteUser, type Auth, type User,
} from 'firebase/auth';
import {
  getFirestore, connectFirestoreEmulator, doc, getDoc, setDoc, updateDoc, deleteDoc, writeBatch,
  collection, getDocs, query, orderBy, serverTimestamp, type Firestore,
} from 'firebase/firestore';

const env = import.meta.env;
const useEmulator = env.PUBLIC_USE_EMULATOR === 'true';
const config = {
  apiKey: env.PUBLIC_FIREBASE_API_KEY || (useEmulator ? 'demo-key' : ''),
  authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: useEmulator ? 'demo-they3211' : env.PUBLIC_FIREBASE_PROJECT_ID || '',
  appId: env.PUBLIC_FIREBASE_APP_ID || '',
};
export const enabled = Boolean(config.apiKey && config.projectId);

let app: FirebaseApp, auth: Auth, db: Firestore;
if (enabled) {
  app = initializeApp(config);
  auth = getAuth(app);
  db = getFirestore(app);
  if (useEmulator) {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
  }
}

export type Role = 'student' | 'mentor';
export type Profile = { uid: string; username: string; name: string; role: Role; disabled?: boolean };

// Usernames are turned into a private, never-mailed address, so minors need no email.
const DOMAIN = 'accounts.they3211.invalid';
export const cleanUsername = (u: string) => u.trim().toLowerCase();
export const validUsername = (u: string) => /^[a-z0-9._-]{3,20}$/.test(u);
const emailOf = (u: string) => `${cleanUsername(u)}@${DOMAIN}`;

// Small cache so the nav can show "hello, name" without loading Firebase on every page.
const KEY = 'y3211-account';
function remember(p: Profile | null) {
  try { p ? localStorage.setItem(KEY, JSON.stringify({ name: p.name, role: p.role })) : localStorage.removeItem(KEY); } catch {}
}

export async function loadProfile(u: User): Promise<Profile | null> {
  const s = await getDoc(doc(db, 'users', u.uid));
  if (!s.exists()) return null;
  const p = { uid: u.uid, ...(s.data() as Omit<Profile, 'uid'>) };
  remember(p.disabled ? null : p);
  return p;
}

export function watch(cb: (p: Profile | null) => void) {
  if (!enabled) { cb(null); return () => {}; }
  return onAuthStateChanged(auth, async u => {
    if (!u) { remember(null); cb(null); return; }
    try { cb(await loadProfile(u)); } catch { cb(null); }
  });
}

export async function login(username: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, emailOf(username), password);
  const p = await loadProfile(cred.user);
  if (!p || p.disabled) { await signOut(auth); remember(null); throw Object.assign(new Error('disabled'), { code: 'app/disabled' }); }
  return p;
}

export async function logout() { remember(null); if (enabled) await signOut(auth); }

export async function readInvite(code: string) {
  const s = await getDoc(doc(db, 'invites', code.trim().toUpperCase()));
  if (!s.exists()) return null;
  const d = s.data() as { role: Role; name: string; usedBy: string | null };
  return d.usedBy ? { ...d, used: true } : { ...d, used: false };
}

export async function usernameFree(username: string) {
  return !(await getDoc(doc(db, 'usernames', cleanUsername(username)))).exists();
}

export async function signup(code: string, username: string, password: string, name: string) {
  code = code.trim().toUpperCase();
  username = cleanUsername(username);
  const inv = await readInvite(code);
  if (!inv) throw Object.assign(new Error('no invite'), { code: 'app/no-invite' });
  if (inv.used) throw Object.assign(new Error('used'), { code: 'app/invite-used' });
  if (!validUsername(username)) throw Object.assign(new Error('bad username'), { code: 'app/bad-username' });
  if (!(await usernameFree(username))) throw Object.assign(new Error('taken'), { code: 'app/username-taken' });
  const cred = await createUserWithEmailAndPassword(auth, emailOf(username), password);
  const uid = cred.user.uid;
  const b = writeBatch(db);
  b.set(doc(db, 'users', uid), { username, name: name.trim(), role: inv.role, invite: code, createdAt: serverTimestamp() });
  b.set(doc(db, 'usernames', username), { uid });
  b.update(doc(db, 'invites', code), { usedBy: uid });
  try { await b.commit(); }
  catch (e) { await deleteUser(cred.user).catch(() => {}); throw e; } // don't leave a half-made account
  return loadProfile(cred.user);
}

// ---- mentor tools ----
const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export function newCode(n = 10) {
  const a = new Uint32Array(n); crypto.getRandomValues(a);
  return Array.from(a, x => ALPHA[x % ALPHA.length]).join('');
}
export async function createInvite(role: Role, name: string) {
  const code = newCode();
  await setDoc(doc(db, 'invites', code), { role, name: name.trim(), createdBy: auth.currentUser!.uid, createdAt: serverTimestamp(), usedBy: null });
  return code;
}
export async function listInvites() {
  const s = await getDocs(query(collection(db, 'invites'), orderBy('createdAt', 'desc')));
  return s.docs.map(d => ({ code: d.id, ...(d.data() as { role: Role; name: string; usedBy: string | null }) }));
}
export const deleteInvite = (code: string) => deleteDoc(doc(db, 'invites', code));
export async function listMembers() {
  const s = await getDocs(query(collection(db, 'users'), orderBy('createdAt', 'asc')));
  return s.docs.map(d => ({ uid: d.id, ...(d.data() as Omit<Profile, 'uid'>) }));
}
export const setMember = (uid: string, data: { role?: Role; disabled?: boolean }) => updateDoc(doc(db, 'users', uid), data);
export const rename = (name: string) => updateDoc(doc(db, 'users', auth.currentUser!.uid), { name: name.trim() });
