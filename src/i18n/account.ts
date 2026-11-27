export const A = {
  he: {
    soon: 'חשבונות באתר יופעלו בקרוב. בינתיים אפשר לקרוא על הקבוצה ולשחק במגרש האימונים בלי להתחבר.',
    user: 'שם משתמש', pass: 'סיסמה', pass2: 'סיסמה שוב', name: 'השם שיוצג', code: 'קוד הזמנה',
    err: {
      'auth/invalid-credential': 'שם המשתמש או הסיסמה לא נכונים.', 'auth/wrong-password': 'שם המשתמש או הסיסמה לא נכונים.', 'auth/user-not-found': 'שם המשתמש או הסיסמה לא נכונים.',
      'auth/too-many-requests': 'יותר מדי ניסיונות. נסו שוב בעוד כמה דקות.', 'auth/weak-password': 'הסיסמה קצרה מדי. צריך לפחות 6 תווים.',
      'auth/network-request-failed': 'אין חיבור לרשת. נסו שוב.', 'app/disabled': 'החשבון הזה הושבת. דברו עם מנטור.',
      'app/no-invite': 'קוד ההזמנה לא נמצא. בדקו שהקלדתם נכון.', 'app/invite-used': 'כבר פתחו חשבון עם הקוד הזה. בקשו קוד חדש ממנטור.', 'app/invite-expired': 'תוקף הקוד פג. בקשו קוד חדש ממנטור.',
      'app/bad-username': 'שם משתמש: 3 עד 20 תווים, אותיות באנגלית, ספרות, נקודה, מקף או קו תחתון.', 'app/username-taken': 'שם המשתמש הזה תפוס. נסו אחר.',
      'app/mismatch': 'הסיסמאות לא זהות.', 'auth/email-already-in-use': 'שם המשתמש הזה תפוס. נסו אחר.', other: 'משהו השתבש. נסו שוב.',
    },
    role: { student: 'תלמיד', mentor: 'מנטור', admin: 'מנהל' },
  },
  en: {
    soon: 'Website accounts are coming soon. Meanwhile you can read about the team and play in the training ground without logging in.',
    user: 'Username', pass: 'Password', pass2: 'Password again', name: 'Display name', code: 'Invite code',
    err: {
      'auth/invalid-credential': 'Wrong username or password.', 'auth/wrong-password': 'Wrong username or password.', 'auth/user-not-found': 'Wrong username or password.',
      'auth/too-many-requests': 'Too many attempts. Try again in a few minutes.', 'auth/weak-password': 'Password too short. Use at least 6 characters.',
      'auth/network-request-failed': 'No connection. Try again.', 'app/disabled': 'This account is disabled. Talk to a mentor.',
      'app/no-invite': 'Invite code not found. Check the spelling.', 'app/invite-used': 'This code was already used. Ask a mentor for a new one.', 'app/invite-expired': 'This code has expired. Ask a mentor for a new one.',
      'app/bad-username': 'Username: 3 to 20 characters, English letters, digits, dot, dash or underscore.', 'app/username-taken': 'That username is taken. Try another.',
      'app/mismatch': 'The passwords do not match.', 'auth/email-already-in-use': 'That username is taken. Try another.', other: 'Something went wrong. Try again.',
    },
    role: { student: 'Student', mentor: 'Mentor', admin: 'Admin' },
  },
};
export const errText = (lang: 'he' | 'en', e: any) => (A[lang].err as Record<string, string>)[e?.code] ?? A[lang].err.other;
