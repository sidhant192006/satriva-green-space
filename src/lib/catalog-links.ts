import { CATALOG_ITEMS, type CatalogItem } from "./catalogs";

/** Catalogue PDFs shown on each service page (only ones that apply to that service). */
export function catalogLinks(slug: string): CatalogItem[] {
  if (slug === "moss-wall" || slug === "artificial-vertical-garden") return CATALOG_ITEMS.filter((c) => c.file.endsWith("cat1.pdf") || c.file.endsWith("cat2.pdf"));
  return [];
}
