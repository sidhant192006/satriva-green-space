import type { CSSProperties } from "react";
import { CONTACT } from "./site";

/** Sets the --d (delay) custom property used by the reveal and load animations. */
export function delay(value: string): CSSProperties {
  return { "--d": value } as CSSProperties;
}

type QuoteOptions = { city?: string; note?: string };

/**
 * Link to the free-quote page. The form reads these values from the address and fills itself in:
 * service preselects the service, city preselects the city, note pre-fills the message box.
 */
export function quoteHref(service?: string, options: QuoteOptions = {}): string {
  const params = new URLSearchParams();
  if (service) params.set("service", service);
  if (options.city) params.set("city", options.city);
  if (options.note) params.set("note", options.note);
  const query = params.toString();
  return query ? `/free-quote?${query}` : "/free-quote";
}

export function whatsappHref(message = "Hello Satriva, I would like to enquire about your services."): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
