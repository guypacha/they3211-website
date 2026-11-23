// Mentors and team structure. Replace the [..] placeholders with real names.
// Photos: put a file in public/photos/mentors/ and set photo: '/photos/mentors/name.jpg'.
type T = { he: string; en: string };
export type Mentor = { name: T; role: T; owns: T[]; bio: T; photo?: string };

export const mentors: Mentor[] = [
  { name: { he: '[שם המנטור]', en: '[Mentor name]' }, role: { he: 'מנטור ראשי', en: 'Lead mentor' },
    owns: [{ he: 'ניהול הקבוצה', en: 'Running the team' }, { he: 'קשר עם בית הספר והמועצה', en: 'School and council' }],
    bio: { he: '[משפט או שניים: רקע, ממתי בקבוצה.]', en: '[One or two sentences: background, since when on the team.]' } },
  { name: { he: '[שם המנטור]', en: '[Mentor name]' }, role: { he: 'מנטור מכניקה', en: 'Mechanical mentor' },
    owns: [{ he: 'תכנון ושרטוט', en: 'Design and CAD' }, { he: 'ייצור והדפסה', en: 'Manufacturing and printing' }],
    bio: { he: '[משפט או שניים.]', en: '[One or two sentences.]' } },
  { name: { he: '[שם המנטור]', en: '[Mentor name]' }, role: { he: 'מנטור חשמל', en: 'Electrical mentor' },
    owns: [{ he: 'חיווט ובקרים', en: 'Wiring and controllers' }, { he: 'סוללות', en: 'Batteries' }],
    bio: { he: '[משפט או שניים.]', en: '[One or two sentences.]' } },
  { name: { he: '[שם המנטור]', en: '[Mentor name]' }, role: { he: 'מנטור תכנות', en: 'Programming mentor' },
    owns: [{ he: 'קוד הרובוט', en: 'Robot code' }, { he: 'אוטונומי', en: 'Autonomous' }],
    bio: { he: '[משפט או שניים.]', en: '[One or two sentences.]' } },
  { name: { he: '[שם המנטור]', en: '[Mentor name]' }, role: { he: 'מנטור אסטרטגיה ומדיה', en: 'Strategy and media mentor' },
    owns: [{ he: 'סקאוטינג', en: 'Scouting' }, { he: 'ספונסרים וקהילה', en: 'Sponsors and community' }],
    bio: { he: '[משפט או שניים.]', en: '[One or two sentences.]' } },
];

export type Dept = { name: T; lead: T; mentor: T; does: T[] };
export const leadership = {
  head: { title: { he: 'מנטור ראשי', en: 'Lead mentor' }, who: { he: '[שם]', en: '[Name]' }, does: { he: 'אחראי על הקבוצה, התקציב והקשר עם בית הספר, המועצה והספונסרים.', en: 'Responsible for the team, the budget, and the link to the school, council and sponsors.' } },
  captains: { title: { he: 'קפטנים', en: 'Captains' }, who: { he: '[שני תלמידים]', en: '[Two students]' }, does: { he: 'מובילים את התלמידים ביום יום, קובעים יעדים לשבוע ומחברים בין המחלקות.', en: 'Lead the students day to day, set weekly goals and connect the departments.' } },
};
export const depts: Dept[] = [
  { name: { he: 'מכניקה', en: 'Mechanical' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: '[מנטור]', en: '[Mentor]' },
    does: [{ he: 'תכנון', en: 'Design' }, { he: 'ייצור', en: 'Manufacturing' }, { he: 'הרכבה', en: 'Assembly' }] },
  { name: { he: 'חשמל', en: 'Electrical' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: '[מנטור]', en: '[Mentor]' },
    does: [{ he: 'חיווט', en: 'Wiring' }, { he: 'בקרים', en: 'Controllers' }, { he: 'סוללות', en: 'Batteries' }] },
  { name: { he: 'תכנות', en: 'Programming' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: '[מנטור]', en: '[Mentor]' },
    does: [{ he: 'קוד הרובוט', en: 'Robot code' }, { he: 'אוטונומי', en: 'Autonomous' }, { he: 'ראייה', en: 'Vision' }] },
  { name: { he: 'אסטרטגיה', en: 'Strategy' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: '[מנטור]', en: '[Mentor]' },
    does: [{ he: 'ניתוח המשחק', en: 'Game analysis' }, { he: 'סקאוטינג', en: 'Scouting' }, { he: 'נהיגה', en: 'Drive team' }] },
  { name: { he: 'מדיה ועסקים', en: 'Media and business' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: '[מנטור]', en: '[Mentor]' },
    does: [{ he: 'תוכן ורשתות', en: 'Content and social' }, { he: 'ספונסרים', en: 'Sponsors' }, { he: 'קהילה', en: 'Community' }] },
];
