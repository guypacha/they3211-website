// Prefix internal links with the deploy base ("/" or "/website/").
export const u = (p: string) => (import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '')).replace(/\/+$/, '') || '/';
export const NAV = [
  { href: '/team', label: 'הקבוצה' },
  { href: '/robots', label: 'רובוטים' },
  { href: '/train', label: 'מגרש האימונים' },
  { href: '/attendx', label: 'AttendX' },
];
export const CONTACT = { email: 'yer.3211@gmail.com', address: 'מחסן 52, אזור התעשייה, ירוחם', social: 'The Y Team' };
