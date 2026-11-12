import type { Metadata } from "next";
import type { BlogPostMeta } from "./blog-types";
import { CONTACT, SITE } from "./site";
import { locations } from "./locations";
import type { Faq } from "./services";

/**
 * The public address of the site. Set NEXT_PUBLIC_SITE_URL before deploying
 * (for example https://satriva.in). It is used for canonical links, the sitemap and structured data.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://satriva.in").replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const CITY_NAMES: string[] = locations.map((l) => l.name);

type PageMetaInput = {
  title: string;
  description: string;
  /** Path starting with a slash, for example /services/moss-wall. */
  path: string;
  keywords?: string[];
  /** Use the title exactly as given, without the " | Satriva" suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  image?: string;
};

/** One place that builds title, description, canonical, social cards and keywords for a page. */
export function pageMeta(input: PageMetaInput): Metadata {
  const { title, description, path, keywords, absoluteTitle, type = "website", publishedTime, image } = input;
  const ogImage = image ?? "/images/og/default.webp";
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_IN",
      type,
      images: [{ url: ogImage }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD)                                           */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
    slogan: SITE.tagline,
    image: absoluteUrl("/images/og/default.webp"),
    logo: absoluteUrl("/logo.png"),
    telephone: CONTACT.phoneHref,
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: "India",
    sameAs: Object.values(CONTACT.social),
    knowsAbout: ["Vertical gardens", "Artificial green walls", "Moss walls", "Balcony gardens", "Landscape design"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(input: { name: string; description: string; path: string; areaName?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": ORG_ID },
    areaServed: input.areaName ? { "@type": "City", name: input.areaName } : "India",
  };
}

export function articleSchema(post: BlogPostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-IN",
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": ORG_ID },
    image: absoluteUrl(post.coverImage),
  };
}
