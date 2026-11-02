import Image from "next/image";
import Link from "next/link";
import {
  ABOUT_SHORT,
  HOW_IT_WORKS,
  PORTFOLIO,
  PRODUCTS,
  STATS,
  WHY_CHOOSE_US,
} from "@/lib/content";
import { locations } from "@/lib/locations";
import { ALL_TESTIMONIALS } from "@/lib/testimonials";
import { delay } from "@/lib/util";
import { Arrow } from "./Icons";

export function AboutShort() {
  return (
    <section className="section" aria-labelledby="about-s">
      <div className="wrap">
        <p className="kicker rv">{ABOUT_SHORT.kicker}</p>
        <h2 className="big rv" id="about-s">
          {ABOUT_SHORT.body[0]} <em>{ABOUT_SHORT.note}.</em>
        </h2>
        <div className="pillars">
          <div className="pillar rv">
            <h3>Our approach</h3>
            <p>{ABOUT_SHORT.body[1]}</p>
          </div>
          <div className="pillar rv" style={delay(".1s")}>
            <h3>What you get</h3>
            <ul className="mini">
              {ABOUT_SHORT.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="pillar rv" style={delay(".2s")}>
            <h3>Learn more</h3>
            <p>See how we work, the philosophy behind every wall and the projects we are proud of.</p>
            <Link className="who-more" href="/about">About us <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section" aria-labelledby="why" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <p className="kicker">Why choose us</p>
          <h2 className="title" id="why">Quick, clean and <em>dependable.</em></h2>
        </div>
        <div className="who">
          {WHY_CHOOSE_US.map((w, i) => (
            <div className="rv" style={delay(`${i * 0.08}s`)} key={w.title}>
              <span className="for">0{i + 1}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
        <ul className="stats">
          {STATS.map((s) => (
            <li className="rv" key={s.label}>
              <strong>{s.value}{s.suffix}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="band" aria-labelledby="how">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <p className="kicker">How it works</p>
            <h2 className="title" id="how">Quick and <em>easy.</em></h2>
          </div>
          <p className="rv">Three simple steps from your first message to a fresh, green space.</p>
        </div>
        <div className="tiers">
          {HOW_IT_WORKS.map((s) => (
            <div className="tier" key={s.step}>
              <span className="tag">Step {s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="band-cta">
          <Link className="btn btn-brand" href="/installation-process">See the installation process <Arrow /></Link>
          <p>Free site visit, itemised quote and a trained in-house installation team.</p>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section className="section" aria-labelledby="prod">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <p className="kicker">Our products and garden essentials</p>
            <h2 className="title" id="prod">Premium plants &amp; <em>landscape decor.</em></h2>
          </div>
          <p className="rv">Plants, planters, preserved moss and gifting, sourced for Indian homes and offices.</p>
        </div>
        <ul className="cards">
          {PRODUCTS.map((p, i) => (
            <li className="rv" style={delay(`${i * 0.05}s`)} key={p.title}>
              <Link className="card" href={p.href}>
                <span className="card-img"><Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 22rem" /></span>
                <h3>{p.title}</h3>
                <span className="more">{p.cta} <Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section className="section" aria-labelledby="proj" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <p className="kicker">Our projects</p>
            <h2 className="title" id="proj">Spaces we&rsquo;ve <em>transformed.</em></h2>
          </div>
          <p className="rv">A glimpse into our bespoke botanical installations and balcony makeovers across India.</p>
        </div>
        <ul className="cards">
          {PORTFOLIO.map((p, i) => (
            <li className="rv" style={delay(`${i * 0.05}s`)} key={p.title}>
              <Link className="card" href="/design-ideas">
                <span className="card-img"><Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 22rem" /></span>
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials({ limit = 6 }: { limit?: number }) {
  const items = ALL_TESTIMONIALS.slice(0, limit);
  return (
    <section className="section" aria-labelledby="tst" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <p className="kicker">Testimonials</p>
          <h2 className="title" id="tst">What our clients <em>say.</em></h2>
        </div>
        <div className="quotes">
          {items.map((t, i) => (
            <figure className="quote rv" style={delay(`${(i % 3) * 0.08}s`)} key={`${t.name}-${i}`}>
              <p className="stars" aria-label={`${t.rating} out of 5`}>{"★".repeat(Math.round(t.rating))}</p>
              <blockquote>{t.text}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationsStrip() {
  const cities = locations.filter((l) => !l.parentCitySlug).slice(0, 14);
  return (
    <section className="section" aria-labelledby="loc" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "1.5rem" }}>
          <p className="kicker">Our service areas</p>
          <h2 className="title" id="loc">Find us <em>near you.</em></h2>
        </div>
        <ul className="area-list rv">
          {cities.map((l) => (
            <li key={l.slug}><Link href={`/locations/${l.slug}`}>{l.name}</Link></li>
          ))}
        </ul>
        <p className="note"><Link href="/service-areas" style={{ color: "var(--accent)" }}>All service areas</Link></p>
      </div>
    </section>
  );
}
