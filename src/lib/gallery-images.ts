// lib/data/gallery-images.ts
// -----------------------------------------------------------------------------
// Pool of real installation photos from /public/images/services, used to build
// a "featured project" collage on each location page. Comparison-slider
// graphics (artificial-moss-comparison, natural-moss-comparison), decorative
// leaf icons, and the neon logo asset are intentionally excluded — they don't
// read as project photography.
//
// Selection is seeded off the location slug (not Math.random()) so:
//   - the same location always shows the same collage (stable across builds,
//     no SSG/client hydration mismatch)
//   - different locations get a different-looking mix
// -----------------------------------------------------------------------------

export const SERVICE_GALLERY_IMAGES = [
  "/images/services/artificial-garden-hero-landscape-design-india.webp",
  "/images/services/artificial-vertical-garden-corporate-office-gurgaon.webp",
  "/images/services/artificial-vertical-garden-corporate-office-india.webp",
  "/images/services/artificial-vertical-garden-installation-steps.webp",
  "/images/services/balcony-garden-hero-landscape-design-india.webp",
  "/images/services/balcony-garden-landscape-design-india.webp",
  "/images/services/comprehensive-landscaping-service-india-landscape-design-india.webp",
  "/images/services/landscape-consultation.webp",
  "/images/services/living-green-wall-india-landscape-design-india.webp",
  "/images/services/luxury-balcony-garden-makeover-india-landscape-design-india.webp",
  "/images/services/luxury-preserved-moss-wall-interior-landscape-design-india.webp",
  "/images/services/modern-balcony-garden-design-india-landscape-design-india.webp",
  "/images/services/moss-wall-luxury-landscape-design-india.webp",
  "/images/services/moss-wall-landscape-design-india.webp",
  "/images/services/natural-vertical-garden-installation.webp",
  "/images/services/natural-vertical-garden-living-wall.webp",
  "/images/services/other-landscape-service.webp",
  "/images/services/premium-artificial-green-wall-india-landscape-design-india.webp",
  "/images/services/preserved-moss-wall-design-india-landscape-design-india.webp",
  "/images/services/professional-landscape-consultation-india.webp",
  "/images/services/real-plant-wall-design-landscape-design-india.webp",
  "/images/services/vertical-garden-installation-process.webp",
  "/images/services/vertical-garden.webp",
] as const;

/** Simple deterministic string hash (djb2-ish), good enough for a seed. */
function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0; // force 32-bit int
  }
  return Math.abs(hash) || 1;
}

/** Deterministic Fisher-Yates shuffle driven by a numeric seed (LCG). */
function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const result = [...items];
  let state = seed;
  for (let i = result.length - 1; i > 0; i--) {
    state = (state * 9301 + 49297) % 233280;
    const j = Math.floor((state / 233280) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Returns `count` image paths, deterministically "randomised" per slug.
 * Same slug -> same collage every time; different slugs -> different mixes.
 */
export function getCollageImages(slug: string, count = 5): string[] {
  const seed = hashSeed(slug);
  const shuffled = seededShuffle(SERVICE_GALLERY_IMAGES, seed);
  // Wrap around if count ever exceeds pool size (it won't currently, but safe).
  const picked: string[] = [];
  for (let i = 0; i < count; i++) {
    picked.push(shuffled[i % shuffled.length]);
  }
  return picked;
}
