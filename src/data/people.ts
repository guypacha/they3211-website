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

// Structure page tree: mentors on top, then the two captains, then the team leads.
// links: which mentor draws a line to which box. Only the two lead mentors connect to the captains.
// The media and community team has no lead yet, so it is not shown.
export type Node = { id: string; title: T; who?: T; note?: T };
export const tree: { mentors: (Node & { to: string[] })[]; captains: (Node & { to: string[] })[]; teams: Node[] } = {
  mentors: [
    { id: 'yehuda', title: { he: 'מנטור מכניקה', en: 'Mechanical mentor' }, who: { he: 'יהודה שלו', en: 'Yehuda Shalev' }, to: ['t-asm', 't-cad'] },
    { id: 'leonid', title: { he: 'מנטור ייצור', en: 'Manufacturing mentor' }, who: { he: 'לאוניד קרפנקו', en: 'Leonid Karpenko' }, to: ['t-asm'] },
    { id: 'guy', title: { he: 'מנטור ראשי · הכשרות', en: 'Co-lead mentor · Training' }, who: { he: 'גיא פצ׳ה', en: 'Guy Pacha' }, to: ['c-mech', 'c-ctrl'] },
    { id: 'liron', title: { he: 'מנטור ראשי · כספים וספונסרים', en: 'Co-lead mentor · Finance and sponsors' }, who: { he: 'לירון גורי', en: 'Liron Guri' }, to: ['c-mech', 'c-ctrl'] },
    { id: 'tzipi', title: { he: 'מנטורית מדיה', en: 'Media mentor' }, who: { he: 'ציפי', en: 'Tzipi' }, to: [] },
    { id: 'rachel', title: { he: 'מנטורית קהילה', en: 'Community mentor' }, who: { he: 'רחל קנול', en: 'Rachel Knol' }, to: [] },
  ],
  captains: [
    { id: 'c-mech', title: { he: 'קפטן מכניקה', en: 'Mechanics captain' }, to: ['t-asm', 't-cad'] },
    { id: 'c-ctrl', title: { he: 'קפטן בקרה', en: 'Control captain' }, to: ['t-elec', 't-prog'] },
  ],
  teams: [
    { id: 't-asm', title: { he: 'הרכבה וייצור', en: 'Assembly and manufacturing' }, note: { he: 'ראש צוות', en: 'Team lead' } },
    { id: 't-cad', title: { he: 'CAD', en: 'CAD' }, note: { he: 'ראש צוות', en: 'Team lead' } },
    { id: 't-elec', title: { he: 'חשמל', en: 'Electrical' }, note: { he: 'ראש צוות', en: 'Team lead' } },
    { id: 't-prog', title: { he: 'תכנות', en: 'Programming' }, note: { he: 'ראש הצוות: קפטן הבקרה', en: 'Led by the control captain' } },
  ],
};
