/** Shared by the blog loader and the SEO helpers. Kept free of Node imports so any module can use it. */
export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, for example 2026-10-30. */
  date: string;
  category: string;
  readingMinutes: number;
  author: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
};
