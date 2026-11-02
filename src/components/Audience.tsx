import Link from "next/link";
import { audiences } from "@/lib/content";
import { delay } from "@/lib/util";
import { Arrow } from "./Icons";

type Props = {
  /** Use "h1" when this section is the main content of its own page. */
  as?: "h1" | "h2";
};

export default function Audience({ as: Heading = "h2" }: Props) {
  const isPage = Heading === "h1";

  return (
    <section className={isPage ? "section is-page" : "section"} id="who" aria-labelledby="who-h">
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <p className="kicker">Who we serve</p>
          <Heading className="title" id="who-h">Who we <em>work with.</em></Heading>
        </div>
        <div className="who">
          {audiences.map((item, i) => (
            <div className="rv" style={delay(`${0.05 + i * 0.07}s`)} key={item.slug}>
              <span className="for">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link className="who-more" href={`/who-we-serve/${item.slug}`}>
                Read more <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
