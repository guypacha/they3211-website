// Prefix internal links with the deploy base ("/" or "/website/").
export const u = (p: string) => (import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '')).replace(/\/+$/, '') || '/';
export type Lang = 'he' | 'en';
// Top menu: three choices only (Hick's law). "Team" opens its own pages.
export const NAV: { href: string; he: string; en: string; sub?: { href: string; he: string; en: string }[] }[] = [
  { href: '/team', he: 'הקבוצה', en: 'Team', sub: [
    { href: '/team', he: 'עלינו', en: 'About us' },
    { href: '/robots', he: 'הרובוטים והעונות', en: 'Robots and seasons' },
    { href: '/team/mentors', he: 'המנטורים', en: 'Mentors' },
    { href: '/team/structure', he: 'מבנה הקבוצה', en: 'Team structure' },
  ] },
  { href: '/train', he: 'מגרש האימונים', en: 'Training' },
  { href: '/support', he: 'תמכו בנו', en: 'Support us' },
];
export const CONTACT = {
  email: 'yer.3211@gmail.com',
  address: { he: 'מחסן 52, אזור התעשייה, ירוחם', en: 'Warehouse 52, Industrial Zone, Yeruham' },
};
// Footer icons. Add the team's Instagram / Facebook / YouTube addresses here and their icons appear.
export const SOCIAL: { id: 'instagram' | 'facebook' | 'youtube' | 'github' | 'tba'; label: string; url: string }[] = [
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/y_team_3211/' },
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/frc.3211' },
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@yeruham3211' },
  { id: 'github', label: 'GitHub', url: 'https://github.com/yteam3211' },
  { id: 'tba', label: 'The Blue Alliance', url: 'https://www.thebluealliance.com/team/3211' },
];

// AttendX inside the site (planned). Change if it ends up on its own address.
export const APP = { student: '/app/student-login', mentor: '/app/login' };
