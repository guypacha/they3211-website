# Website accounts

Guests use the site and the training ground with no account. Students and mentors log in with a
username and password. Every account starts from a one-time invite code that a mentor makes on the
"My account" page. A forgotten password is handled the same way: the mentor makes a new code, and
disables the old account.

Data (Firestore): `users/{uid}` (username, name, role, disabled), `usernames/{username}`,
`invites/{code}`. Rules: `firebase/firestore.rules`. Usernames become a private address
`<username>@accounts.they3211.invalid`, so nobody needs an email.

## One-time setup (about 10 minutes)

1. Go to console.firebase.google.com, **Add project**, name it e.g. `they3211-site`. Analytics: off.
2. **Build › Authentication › Get started › Sign-in method › Email/Password › Enable** (leave "Email link" off).
3. **Authentication › Settings › Authorized domains › Add domain:** `guypacha.github.io`
   (later also the custom domain).
4. **Build › Firestore Database › Create database**, production mode, location `eur3` (Europe).
5. **Firestore › Rules:** paste the content of `firebase/firestore.rules` and **Publish**.
6. **Project settings (gear) › General › Your apps › Web (</>)**, nickname `website`, no hosting.
   Copy `apiKey`, `authDomain`, `projectId`, `appId`.
7. Put those four values in `.env.production` in the repo (already done for project `they3211-site`).
   They are public web settings that end up in the page anyway. Security comes from the rules.
8. The first mentor invite, by hand: **Firestore › Start collection** `invites`, document ID = a code
   you choose (10 capital letters/digits, e.g. `GUYSTART26`), fields:
   `role` (string) `mentor`, `name` (string) your name, `createdBy` (string) `console`,
   `createdAt` (timestamp) now, `usedBy` (null).
9. After the next deploy, open `/signup?code=GUYSTART26` on the site, pick a username and password.
   From then on, make every other invite from the "My account" page.

## Local testing

    npx firebase emulators:start --only auth,firestore --project demo-they3211
    PUBLIC_USE_EMULATOR=true npm run dev
