// Mentors and team structure. Replace the [..] placeholders with real names.
// Photos: put a file in public/photos/mentors/ and set photo: '/photos/mentors/name.jpg'.
type T = { he: string; en: string };
export type Mentor = { name: T; role: T; owns: T[]; bio?: T; photo?: string };

export const mentors: Mentor[] = [
  { name: { he: 'גיא פצ׳ה', en: 'Guy Pacha' }, role: { he: 'מנטור ראשי · הכשרות', en: 'Co-lead mentor · Training' },
    owns: [{ he: 'כל ההכשרות של הרובוט', en: 'All robot training' }, { he: 'הרכבה', en: 'Assembly' }, { he: 'CAD', en: 'CAD' }, { he: 'חשמל', en: 'Electrical' }, { he: 'תכנות', en: 'Programming' }] },
  { name: { he: 'לירון גורי', en: 'Liron Guri' }, role: { he: 'מנטור ראשי · כספים וספונסרים', en: 'Co-lead mentor · Finance and sponsors' },
    owns: [{ he: 'תקציב ורכש', en: 'Budget and purchasing' }, { he: 'הקשר עם הספונסרים הראשיים', en: 'Contact with our main sponsors' }] },
  { name: { he: 'יהודה שלו', en: 'Yehuda Shalev' }, role: { he: 'מנטור מכניקה', en: 'Mechanical mentor' },
    owns: [{ he: 'איך בונים', en: 'How to build' }, { he: 'תכנון לייצור ולהרכבה', en: 'DFM and DFA' }] },
  { name: { he: 'לאוניד קרפנקו', en: 'Leonid Karpenko' }, role: { he: 'מנטור ייצור', en: 'Manufacturing mentor' },
    owns: [{ he: 'מחרטה וכרסומת', en: 'Lathe and mill' }, { he: 'CNC', en: 'CNC' }, { he: 'חותך לייזר', en: 'Laser cutter' }] },
  { name: { he: 'ציפי', en: 'Tzipi' }, role: { he: 'מנטורית מדיה', en: 'Media mentor' },
    owns: [{ he: 'צילום', en: 'Photography' }, { he: 'רשתות חברתיות', en: 'Social media' }] },
  { name: { he: 'רחל קנול', en: 'Rachel Knol' }, role: { he: 'מנטורית קהילה', en: 'Community mentor' },
    owns: [{ he: 'התנדבות', en: 'Volunteering' }, { he: 'פרויקטים של הקבוצה', en: 'Team projects' }] },
];

export type Dept = { name: T; lead: T; mentor: T; does: T[] };
export const leadership = {
  head: { title: { he: 'מנטור ראשי · הכשרות', en: 'Co-lead mentor · Training' }, who: { he: 'גיא פצ׳ה', en: 'Guy Pacha' }, does: { he: 'אחראי על כל ההכשרות שקשורות לרובוט: הרכבה, <bdi>CAD</bdi>, חשמל ותכנות.', en: 'In charge of all robot-related training: assembly, CAD, electrical and programming.' } },
  finance: { title: { he: 'מנטור ראשי · כספים וספונסרים', en: 'Co-lead mentor · Finance and sponsors' }, who: { he: 'לירון גורי', en: 'Liron Guri' }, does: { he: 'אחראי על התקציב והרכש, ועל הקשר עם הספונסרים הראשיים.', en: 'In charge of the budget and purchasing, and of contact with our main sponsors.' } },
  captains: { title: { he: 'קפטנים', en: 'Captains' }, who: { he: '[שני תלמידים]', en: '[Two students]' }, does: { he: 'מובילים את התלמידים ביום יום, קובעים יעדים לשבוע ומחברים בין המחלקות.', en: 'Lead the students day to day, set weekly goals and connect the departments.' } },
};
export const depts: Dept[] = [
  { name: { he: 'מכניקה', en: 'Mechanical' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: 'גיא פצ׳ה, יהודה שלו, לאוניד קרפנקו', en: 'Guy Pacha, Yehuda Shalev, Leonid Karpenko' },
    does: [{ he: 'תכנון', en: 'Design' }, { he: 'ייצור', en: 'Manufacturing' }, { he: 'הרכבה', en: 'Assembly' }] },
  { name: { he: 'חשמל', en: 'Electrical' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: 'גיא פצ׳ה', en: 'Guy Pacha' },
    does: [{ he: 'חיווט', en: 'Wiring' }, { he: 'בקרים', en: 'Controllers' }, { he: 'סוללות', en: 'Batteries' }] },
  { name: { he: 'תכנות', en: 'Programming' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: 'גיא פצ׳ה', en: 'Guy Pacha' },
    does: [{ he: 'קוד הרובוט', en: 'Robot code' }, { he: 'אוטונומי', en: 'Autonomous' }, { he: 'ראייה', en: 'Vision' }] },
  { name: { he: 'אסטרטגיה', en: 'Strategy' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: '[מנטור]', en: '[Mentor]' },
    does: [{ he: 'ניתוח המשחק', en: 'Game analysis' }, { he: 'סקאוטינג', en: 'Scouting' }, { he: 'נהיגה', en: 'Drive team' }] },
  { name: { he: 'מדיה ועסקים', en: 'Media and business' }, lead: { he: '[ראש מחלקה]', en: '[Lead]' }, mentor: { he: 'ציפי, רחל קנול', en: 'Tzipi, Rachel Knol' },
    does: [{ he: 'תוכן ורשתות', en: 'Content and social' }, { he: 'ספונסרים', en: 'Sponsors' }, { he: 'קהילה', en: 'Community' }] },
];
