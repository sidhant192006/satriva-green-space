import Image from "next/image";
import Link from "next/link";
import { DetailHead } from "@/components/DetailParts";
import { heroImage } from "@/lib/hero-images";
import { Arrow } from "@/components/Icons";
import { formatDate, getAllPosts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Vertical Garden Blog",
  description: "Guides, costs and design ideas for vertical gardens, moss walls, artificial green walls and balcony landscaping in India.",
  path: "/blog",
  keywords: ["vertical garden blog", "moss wall cost india", "artificial green wall ideas", "biophilic office design"],
});

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main>
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        kicker="From our blog"
        title={<>Transform your space <em>with experts.</em></>}
        lede="Guides, costs and design ideas for vertical gardens, moss walls and green interiors."
        image={heroImage(11)}
      />

      <div className="wrap" style={{ padding: "var(--sec) 0" }}>
        <ul className="cards">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className="card" href={`/blog/${post.slug}`}>
                <span className="card-img"><Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 22rem" /></span>
                <span className="tag">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="more">{formatDate(post.date)} · {post.readingMinutes} min read <Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
