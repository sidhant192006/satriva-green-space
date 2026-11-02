import Link from "next/link";
import { delay } from "@/lib/util";
import { Arrow } from "./Icons";

type Item = { tag: string; title: string; body: string; href: string };

const items: Item[] = [
  {
    tag: "Process",
    title: "How it works",
    body: "Five steps from the first site visit to steady care.",
    href: "/process",
  },
  {
    tag: "Plans",
    title: "GardenCare plans",
    body: "Scheduled maintenance with fixed visit days and photo reports.",
    href: "/care-plans",
  },
  {
    tag: "Clients",
    title: "Who we serve",
    body: "Homes, societies, local businesses and trade partners.",
    href: "/who-we-serve",
  },
  {
    tag: "Locations",
    title: "Lucknow, Kanpur and Indore",
    body: "Seasonal care notes and services for each city we work in.",
    href: "/locations",
  },
];

/** Home page links to the pages that have their own route. */
export default function Explore() {
  return (
    <section className="section" aria-labelledby="exp" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <p className="kicker">Explore</p>
          <h2 className="title" id="exp">Find out <em>more.</em></h2>
        </div>
        <div className="explore">
          {items.map((item, i) => (
            <Link className="explore-item rv" style={delay(`${0.05 + i * 0.07}s`)} href={item.href} key={item.href}>
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="more">Read more <Arrow /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
