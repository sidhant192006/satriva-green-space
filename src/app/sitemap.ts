import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { locations } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
    lastModified: Date = now,
  ) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority });

  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.8)),
    entry("/about", 0.6),
    entry("/installation-process", 0.7),
    entry("/design-ideas", 0.6),
    entry("/locations", 0.9),
    entry("/service-areas", 0.6),
    ...locations.map((l) => entry(`/locations/${l.slug}`, 0.8)),
    entry("/faq", 0.6),
    entry("/contact", 0.7),
    entry("/free-quote", 0.7),
    entry("/corporate-gifting", 0.4),
    entry("/blog", 0.7, "weekly"),
    ...getAllPosts().map((p) => entry(`/blog/${p.slug}`, 0.6, "monthly", new Date(p.date))),
  ];
}
