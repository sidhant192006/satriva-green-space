/** Wide hero photos used behind the heading on every page (cropped copies in /public/images/satriva-hero). */
export const HERO_COUNT = 21;

export const heroImage = (n: number): string => `/images/satriva-hero/hero-${((n - 1) % HERO_COUNT) + 1}.webp`;

/** Picks the same photo for the same key every time, so a page never changes its hero between visits. */
export function pickHero(key: string, pool?: number[]): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  const list = pool ?? Array.from({ length: HERO_COUNT }, (_, i) => i + 1);
  return heroImage(list[h % list.length]);
}

/** One fixed photo per service page. */
export const SERVICE_HERO: Record<string, string> = {
  "natural-vertical-garden": heroImage(1),
  "artificial-vertical-garden": heroImage(5),
  "moss-wall": heroImage(10),
  "balcony-garden": heroImage(14),
  "landscape-consultation": heroImage(4),
  "related-services": heroImage(6),
};
