// Season results, from FIRST event pages (frc-events.firstinspires.org/<year>/team/3211).
// Missing details (2010-2014, 2018, 2020, 2026) to be filled in.
type T = { he: string; en: string };
export type Ev = { name: T; rank?: string; result?: T; captain?: boolean };
export type Season = { year: number; game: string; champs?: boolean; top?: boolean; note: T; events: Ev[]; awards: string[] };

const E = {
  isr: { he: 'התחרות האזורית בישראל', en: 'Israel Regional' },
  wca: { he: 'תחרות אזורית, מערב קנדה', en: 'Western Canada Regional' },
  d: (n: number) => ({ he: `תחרות מחוזית ${n}`, en: `ISR District #${n}` }),
  dcmp: { he: 'אליפות ישראל', en: 'Israel District Championship' },
  cmp: (div: string, city: string) => ({ he: `אליפות העולם, ${city}`, en: `FIRST Championship, ${div} (${city === 'יוסטון' ? 'Houston' : city === 'דטרויט' ? 'Detroit' : 'St. Louis'})` }),
  off: { he: 'תחרות הפגרה', en: 'Israeli Off-Season' },
};
const R = {
  win: { he: 'זוכים', en: 'Winners' },
  fin: { he: 'גמר', en: 'Finalists' },
  sf: { he: 'חצי גמר', en: 'Semifinals' },
  qf: { he: 'רבע גמר', en: 'Quarterfinals' },
  pl: { he: 'פלייאוף', en: 'Playoffs' },
};

export const seasons: Season[] = [
  { year: 2025, game: 'REEFSCAPE', note: { he: 'פרס הקיימות פעמיים, בשתי תחרויות מחוזיות.', en: 'The Sustainability Award twice, at two district events.' },
    events: [{ name: E.d(2), captain: true }, { name: E.d(3), result: R.pl }, { name: E.dcmp }], awards: ['Team Sustainability Award', 'Team Sustainability Award'] },
  { year: 2024, game: 'CRESCENDO', note: { he: 'קפטן ברית בשתי התחרויות המחוזיות.', en: 'Alliance captain at both district events.' },
    events: [{ name: E.d(1), rank: '11/31', captain: true }, { name: E.d(4), rank: '8/32', captain: true, result: R.pl }, { name: E.dcmp, rank: '35/45' }], awards: ['District Engineering Inspiration Award'] },
  { year: 2023, game: 'CHARGED UP', top: true, note: { he: 'שלושה פרסים בעונה אחת, ביניהם פרס ההשפעה.', en: 'Three awards in one season, including the Impact Award.' },
    events: [{ name: E.d(1), rank: '9/25', result: R.pl }, { name: E.d(3), rank: '12/30', result: R.pl }, { name: E.dcmp, rank: '18/45', result: R.pl }], awards: ['District FIRST Impact Award', 'Gracious Professionalism Award', "Dean's List Finalist"] },
  { year: 2022, game: 'RAPID REACT', note: { he: 'רבע גמר בכל שלוש התחרויות, ופרס על עיצוב תעשייתי.', en: 'Quarterfinals at all three events, and an award for industrial design.' },
    events: [{ name: E.d(1), rank: '15/28', result: R.qf }, { name: E.d(4), rank: '8/29', result: R.qf }, { name: E.dcmp, rank: '13/40', result: R.qf }], awards: ['Industrial Design Award'] },
  { year: 2021, game: 'INFINITE RECHARGE', note: { he: 'עונת הקורונה, מהבית. חצי גמר באתגר החדשנות.', en: 'The pandemic season, from home. Semifinalists in the Innovation Challenge.' },
    events: [], awards: ['FIRST Innovation Challenge Semi-Finalist'] },
  { year: 2019, game: 'DESTINATION: DEEP SPACE', champs: true, top: true, note: { he: 'פרס יו״ר באליפות ישראל, וכרטיס לאליפות העולם בדטרויט.', en: "The Chairman's Award at the Israel Championship, and a ticket to the world championship in Detroit." },
    events: [{ name: E.d(1) }, { name: E.d(3), captain: true, result: R.qf }, { name: E.dcmp, captain: true, result: R.sf }, { name: E.cmp('Curie', 'דטרויט') }], awards: ["Regional Chairman's Award", "District Chairman's Award", 'Autonomous Award'] },
  { year: 2017, game: 'STEAMWORKS', champs: true, top: true, note: { he: 'זכייה בתחרות מחוזית, וחצי גמר באליפות העולם ביוסטון.', en: 'Won a district event, and reached the semifinals at the world championship in Houston.' },
    events: [{ name: E.d(2), result: R.win }, { name: E.d(3), result: R.sf }, { name: E.dcmp, captain: true, result: R.sf }, { name: E.cmp('Galileo', 'יוסטון'), result: R.sf }], awards: [] },
  { year: 2016, game: 'FIRST STRONGHOLD', champs: true, top: true, note: { he: 'פרס יו״ר בקנדה, ומשם לגמר הבית באליפות העולם.', en: "The Chairman's Award in Canada, then the division final at the world championship." },
    events: [{ name: E.isr }, { name: E.wca, result: R.sf }, { name: E.cmp('Archimedes', 'סנט לואיס'), result: R.fin }], awards: ["Regional Chairman's Award", 'Engineering Inspiration Award', 'Championship Subdivision Finalist', 'Gracious Professionalism Award', 'Volunteer of the Year'] },
  { year: 2015, game: 'RECYCLE RUSH', note: { he: 'הגענו לגמר בתחרות האזורית בישראל.', en: 'Finalists at the Israel Regional.' },
    events: [{ name: E.isr, result: R.fin }], awards: ['Regional Finalists', 'Gracious Professionalism Award'] },
  { year: 2010, game: 'BREAKAWAY', note: { he: 'העונה הראשונה שלנו בתחרות, שנה אחרי שהקבוצה נוסדה.', en: 'Our first competition season, a year after the team was founded.' },
    events: [], awards: [] },
];

export const totals = {
  awards: seasons.reduce((n, s) => n + s.awards.filter(a => !/Finalist|Semi-Finalist/.test(a) || /Dean/.test(a)).length, 0),
  champs: seasons.filter(s => s.champs).length,
  events: seasons.reduce((n, s) => n + s.events.length, 0),
};
