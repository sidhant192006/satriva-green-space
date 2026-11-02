import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Arrow } from "@/components/Icons";
import { mdxComponents } from "@/components/mdx";
import { formatDate, getPost, getSlugs } from "@/lib/blog";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";
import { DetailHead } from "@/components/DetailParts";
import { quoteHref } from "@/lib/util";
import Image from "next/image";
import remarkGfm from "remark-gfm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.date,
    image: post.coverImage,
    keywords: post.tags,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  return (
    <main>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]),
        ]}
      />
      <article>
        <DetailHead
          crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.category }]}
          kicker={post.category}
          title={post.title}
          lede={post.description}
          image={post.coverImage}
        />
        <div className="wrap post-meta">
          <p className="meta">
            {post.author} · {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
        </div>

        <div className="wrap" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div className="prose">
            <MDXRemote source={post.body} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>
        </div>
      </article>

      <div className="wrap" style={{ paddingBottom: "var(--sec)" }}>
        <div className="visit">
          <div>
            <h3>Want this done for your space?</h3>
            <p>Book a free site visit and get a transparent, itemised quote.</p>
          </div>
          <Link className="btn btn-solid" href={quoteHref()}>
            Get a free quote <Arrow />
          </Link>
        </div>
      </div>
    </main>
  );
}
