import Image from "next/image";
import Link from "next/link";
import { DetailHead, EnquiryBand } from "@/components/DetailParts";
import { Leaf } from "@/components/Icons";
import { ABOUT } from "@/lib/content";
import { heroImage } from "@/lib/hero-images";
import { pageMeta } from "@/lib/seo";
import { delay, quoteHref } from "@/lib/util";

export const metadata = pageMeta({
  title: "About Us",
  description:
    "Learn about Satriva, our passion for greenery, and how we transform ordinary spaces into premium green environments.",
  path: "/about",
  keywords: ["about satriva", "who we are", "luxury green design", "biophilic design"],
});

export default function AboutPage() {
  return (
    <main>
      <DetailHead
        image={heroImage(2)}
        crumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
        kicker={ABOUT.kicker}
        title={<span dangerouslySetInnerHTML={{ __html: ABOUT.title }} />}
        lede={ABOUT.lede}
      />
      <div className="wrap">
        <figure className="wide-img"><Image src={ABOUT.image} alt="Satriva, creating luxurious green spaces" fill priority sizes="(max-width: 1200px) 100vw, 78rem" /></figure>
      </div>

      <section className="detail-block">
        <div className="wrap detail-grid">
          <div className="rv">
            <p className="kicker">{ABOUT.storyKicker}</p>
            <h2 className="detail-h2">{ABOUT.storyTitle}</h2>
          </div>
          <div className="detail-prose" style={{ paddingBottom: 0 }}>
            {ABOUT.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap detail-grid">
          <div className="rv">
            <p className="kicker">{ABOUT.philosophyKicker}</p>
            <h2 className="detail-h2">{ABOUT.philosophyTitle}</h2>
            <p className="block-intro">{ABOUT.philosophyBody}</p>
          </div>
          <ul className="ticks">
            {ABOUT.philosophy.map((p, i) => (
              <li className="rv" style={delay(`${i * 0.06}s`)} key={p}><Leaf />{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{ABOUT.servicesKicker}</p>
            <h2 className="detail-h2">{ABOUT.servicesTitle}</h2>
            <p className="block-intro">{ABOUT.servicesBody}</p>
          </div>
          <div className="explore">
            {ABOUT.services.map((s, i) => (
              <Link className="explore-item rv" style={delay(`${i * 0.05}s`)} href={s.href} key={s.href}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{ABOUT.processKicker}</p>
            <h2 className="detail-h2">{ABOUT.processTitle}</h2>
          </div>
          <ol className="steps in">
            {ABOUT.process.map((s, i) => (
              <li className="step" key={s.title}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{ABOUT.whyKicker}</p>
            <h2 className="detail-h2">{ABOUT.whyTitle}</h2>
          </div>
          <div className="pillars grid-auto">
            {ABOUT.why.map((w, i) => (
              <div className="pillar rv" style={delay(`${(i % 3) * 0.07}s`)} key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{ABOUT.projectsKicker}</p>
            <h2 className="detail-h2">{ABOUT.projectsTitle}</h2>
          </div>
          <ul className="cards cards-2">
            {ABOUT.projects.map((p) => (
              <li key={p.title}>
                <Link className="card" href="/design-ideas">
                  <span className="card-img"><Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 90vw, 38rem" /></span>
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryBand
        title="Let's create something beautiful together"
        body="Book an expert consultation today to start transforming your space."
        href={quoteHref()}
        label="Book consultation"
      />
    </main>
  );
}
