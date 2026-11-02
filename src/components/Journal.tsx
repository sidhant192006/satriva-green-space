import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/blog";
import { delay } from "@/lib/util";
import { Arrow } from "./Icons";

/** Latest posts from content/blog, shown on the home page. */
export default function Journal() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section" id="journal" aria-labelledby="jr" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <p className="kicker">From our blog</p>
            <h2 className="title" id="jr">Transform your space <em>with experts.</em></h2>
          </div>
          <p className="rv" style={delay(".1s")}>Guides, costs and design ideas for vertical gardens, moss walls and green interiors.</p>
        </div>

        <ul className="offers">
          {posts.map((post) => (
            <li className="rv" key={post.slug}>
              <Link className="offer" href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="price"><small>{post.category}</small>{formatDate(post.date)}</span>
                <Arrow className="arrow" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="note">
          <Link href="/blog" style={{ color: "var(--accent)" }}>All blog posts</Link>
        </p>
      </div>
    </section>
  );
}
