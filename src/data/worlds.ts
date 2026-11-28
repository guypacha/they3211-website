// Training-ground worlds, and which world a mission id belongs to (ids come from the playground app).
export const WORLDS = [
  { id: 'shop', he: 'סדנה ראשונה', en: 'First workshop' },
  { id: 'elec', he: 'חשמל וחיווט', en: 'Electrical' },
  { id: 'prog', he: 'תכנות', en: 'Programming' },
  { id: 'motor', he: 'מנועים ותמסורות', en: 'Motors and gears' },
  { id: 'mech', he: 'קונספטים מכניים', en: 'Mechanical concepts' },
  { id: 'fdm', he: 'הדפסת FDM', en: 'FDM printing' },
  { id: 'strat', he: 'אסטרטגיה', en: 'Strategy' },
] as const;
export function worldOf(id: string): string {
  if (/^st/.test(id)) return 'strat';
  if (/^(s\d|slic$)/.test(id)) return 'shop';
  if (/^mo/.test(id)) return 'motor';
  if (/^me/.test(id)) return 'mech';
  if (/^(f\d|flic$)/.test(id)) return 'fdm';
  if (/^(p\d|plic$)/.test(id)) return 'prog';
  return 'elec';
}
export const isLicense = (id: string) => /lic$/.test(id);
