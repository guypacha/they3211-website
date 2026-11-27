# Website accounts

Guests use the site and the training ground with no account. Students and mentors log in with a
username and password. Every account starts from a one-time invite code (valid 14 days) made on the
"My account" page: mentors invite students, admins invite anyone. Roles: student, mentor, admin.

Email: mentors and admins must add and confirm a real email (the rules lock their tools until then).
For students it is optional. Once an email is confirmed, the account logs in with that email and can
reset its password with "Forgot your password?". A student without an email asks a mentor for a new code.

Training ground: `progress/{uid}` is written by the playground through `/train/sync.js`. The rules
accept a mission only in order, at least 15 s (licenses 45 s) after it was opened, with 1-3 stars.
Licenses count only after a mentor approves them on the progress board. The order and minimum times
come from `config/missions`, which an admin publishes with "Update mission list".

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

## After the permissions update (round 4)

1. **Firestore › Rules:** paste the new `firebase/firestore.rules` and **Publish**.
2. **Firestore › users › your document:** change `role` to `admin` (lowercase).
3. On the site, **My account › Email and security:** add your email, open the link in your inbox,
   then log in again with the email. Your admin tools unlock.
4. **My account › Update mission list:** click once (and again after new games go live).
5. Every mentor does step 3 too.
6. Optional: **Authentication › Templates** to set the sender name and the email language to Hebrew.

## Local testing

    npx firebase emulators:start --only auth,firestore --project demo-they3211
    PUBLIC_USE_EMULATOR=true npm run dev
