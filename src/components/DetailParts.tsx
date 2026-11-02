import Link from "next/link";
import type { ReactNode } from "react";
import { pickHero } from "@/lib/hero-images";
import PageHero, { type Crumb } from "./PageHero";
import { delay } from "@/lib/util";
import { Arrow, Leaf } from "./Icons";

export type { Crumb };

/** Top of every detail page: a hero with photo, breadcrumb trail, kicker, h1 and an optional lead paragraph. */
export function DetailHead({
  crumbs,
  kicker,
  title,
  lede,
  aside,
  image,
  children,
}: {
  crumbs: Crumb[];
  kicker: string;
  title: ReactNode;
  lede?: string;
  aside?: ReactNode;
  /** Hero photo. When left out, one is picked from the kicker so each page keeps its own. */
  image?: string;
  children?: ReactNode;
}) {
  return (
    <PageHero crumbs={crumbs} kicker={kicker} title={title} lede={lede} aside={aside} image={image ?? pickHero(kicker)}>
      {children}
    </PageHero>
  );
}

/** Small price or fact card shown beside the heading. */
export function FactCard({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="fact-card">
      <small>{label}</small>
      <strong>{value}</strong>
      {note && <p>{note}</p>}
    </div>
  );
}

/** A titled block of paragraphs. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="detail-prose">{children}</div>;
}

/** A heading on the left and a ruled bullet list on the right. */
export function Checklist({ title, items, kicker }: { title: string; items: string[]; kicker?: string }) {
  return (
    <section className="detail-block">
      <div className="wrap detail-grid">
        <div className="rv">
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 className="detail-h2">{title}</h2>
        </div>
        <ul className="ticks">
          {items.map((item, i) => (
            <li className="rv" style={delay(`${i * 0.06}s`)} key={item}>
              <Leaf />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export type Card = { title: string; body?: string; href: string; tag?: string; meta?: string };

/** A ruled list of links to other pages. */
export function LinkList({ title, kicker, cards }: { title: string; kicker?: string; cards: Card[] }) {
  if (cards.length === 0) return null;
  return (
    <section className="detail-block">
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          {kicker && <p className="kicker">{kicker}</p>}
          <h2 className="detail-h2">{title}</h2>
        </div>
        <ul className="offers">
          {cards.map((card) => (
            <li className="rv" key={card.href}>
              <Link className="offer" href={card.href}>
                <h3>{card.title}</h3>
                <p>{card.body ?? ""}</p>
                <span className="price">
                  {card.tag && <small>{card.tag}</small>}
                  {card.meta}
                </span>
                <Arrow className="arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Closing call to action with a link to the enquiry form. */
export function EnquiryBand({
  title,
  body,
  href,
  label = "Book a visit",
}: {
  title: string;
  body: string;
  href: string;
  label?: string;
}) {
  return (
    <section className="detail-block detail-last">
      <div className="wrap">
        <div className="visit rv">
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
          <Link className="btn btn-solid" href={href}>
            {label} <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
