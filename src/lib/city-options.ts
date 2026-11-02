import { locations } from "./locations";

/** Cities offered in the quote form. */
export const cityOptions: string[] = [
  ...locations.filter((l) => !l.parentCitySlug).map((l) => l.name),
  "Another city",
];
