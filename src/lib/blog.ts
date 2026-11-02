import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPostMeta } from "./blog-types";

/** Blog posts are MDX files in content/blog. The file name becomes the URL slug. */
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = BlogPostMeta;

export type Post = PostMeta & { body: string };

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string | Date;
  category?: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
};

function toIsoDate(value: string | Date): string {
  // YAML parses unquoted dates as Date objects, so accept both.
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
}

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function readPost(file: string): Post | null {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;

  if (!fm.title || !fm.description || !fm.date) {
    throw new Error(`Blog post "${file}" needs a title, description and date in its frontmatter.`);
  }
  if (fm.draft) return null;

  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: toIsoDate(fm.date),
    category: fm.category ?? "Notes",
    author: fm.author ?? "Satriva Design Team",
    coverImage: fm.coverImage ?? "/images/og/default.webp",
    tags: fm.tags ?? [],
    featured: Boolean(fm.featured),
    readingMinutes: readingMinutes(content),
    body: content,
  };
}

function listFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): PostMeta[] {
  return listFiles()
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .map(({ body: _body, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.mdx`;
  if (!listFiles().includes(file)) return null;
  return readPost(file);
}

export function getSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
