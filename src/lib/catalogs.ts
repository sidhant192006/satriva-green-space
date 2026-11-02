// Single source of truth for catalog titles <-> PDF files.
// Add/remove/rename catalogs here only — the download dropdown and the
// post-submit auto-download logic both read from this list.

export interface CatalogItem {
  title: string;
  file: string; // path under /catalogs/, served from /public/catalogs/
}

export const CATALOG_ITEMS: CatalogItem[] = [
  { title: "Reindeer Moss Catalogue", file: "/catalogs/cat1.pdf" },
  { title: "Mixed Biophilic Designs", file: "/catalogs/cat2.pdf" },
  { title: "Moss Logo Branding Ideas", file: "/catalogs/cat3.pdf" },
  { title: "Frame & Border Finishes", file: "/catalogs/cat4.pdf" },
  { title: "Other", file: "/catalogs/cat5.pdf" },
];

// Convenience: just the titles, in order, for rendering the dropdown options.
export const CATALOG_OPTIONS = CATALOG_ITEMS.map((c) => c.title);

// Look up one or more catalog files by their title(s).
export function getCatalogFiles(titles: string[]): CatalogItem[] {
  return CATALOG_ITEMS.filter((c) => titles.includes(c.title));
}
