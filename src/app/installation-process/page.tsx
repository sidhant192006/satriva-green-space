import Link from "next/link";
import { DetailHead, EnquiryBand, LinkList } from "@/components/DetailParts";
import FaqSection from "@/components/FaqSection";
import { INSTALL } from "@/lib/content";
import { heroImage } from "@/lib/hero-images";
import { pageMeta } from "@/lib/seo";
import { delay, quoteHref } from "@/lib/util";

export const metadata = pageMeta({
  title: "Professional Installation Services",
  description:
    "From luxury balcony gardens to premium vertical greenery installations, we deliver flawless execution with expert craftsmanship and attention to detail.",
  path: "/installation-process",
  keywords: ["installation services", "vertical garden installation", "landscaping execution", "green wall setup"],
});

export default function InstallationPage() {
  return (
    <main>
      <DetailHead
        image={heroImage(12)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Installation process" }]}
        kicker={INSTALL.kicker}
        title={<span dangerouslySetInnerHTML={{ __html: INSTALL.title }} />}
        lede={INSTALL.lede}
      />
      <div className="wrap">
        <ul className="area-list" style={{ marginBottom: "2rem" }}>
          {INSTALL.badges.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <div className="cta-row">
          <Link className="btn btn-solid" href={quoteHref()}>Book site visit</Link>
        </div>
      </div>

      <LinkList
        kicker={INSTALL.servicesKicker}
        title={INSTALL.servicesTitle}
        cards={INSTALL.services.map((s) => ({ title: s.title, body: s.body, href: s.href, tag: "Learn more" }))}
      />

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{INSTALL.processKicker}</p>
            <h2 className="detail-h2">{INSTALL.processTitle}</h2>
            <p className="block-intro">{INSTALL.processLede}</p>
          </div>
          {INSTALL.processes.map((p) => (
            <div className="thumb-group" key={p.name}>
              <h3>{p.name}</h3>
              <ol className="steps in" style={{ ["--cols" as string]: Math.min(p.steps.length, 4) }}>
                {p.steps.map((s, i) => (
                  <li className="step" key={s.title}>
                    <span className="n">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{INSTALL.materialsKicker}</p>
            <h2 className="detail-h2">{INSTALL.materialsTitle}</h2>
            <p className="block-intro">{INSTALL.materialsLede}</p>
          </div>
          <div className="pillars grid-auto">
            {INSTALL.materials.map((m, i) => (
              <div className="pillar rv" style={delay(`${(i % 3) * 0.07}s`)} key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
          <p className="note">{INSTALL.warranty}</p>
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{INSTALL.whyKicker}</p>
            <h2 className="detail-h2">{INSTALL.whyTitle}</h2>
            <p className="block-intro">{INSTALL.whyLede}</p>
          </div>
          <div className="pillars grid-auto">
            {INSTALL.why.map((m, i) => (
              <div className="pillar rv" style={delay(`${(i % 3) * 0.07}s`)} key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-block">
        <div className="wrap">
          <div className="rv block-head">
            <p className="kicker">{INSTALL.projectsKicker}</p>
            <h2 className="detail-h2">Recent installations</h2>
            <p className="block-intro">{INSTALL.projectsLede}</p>
          </div>
          <ul className="area-list">
            {INSTALL.projectTitles.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="note"><Link href="/design-ideas" style={{ color: "var(--accent)" }}>See the project showcase</Link></p>
        </div>
      </section>

      <FaqSection faqs={INSTALL.faqs} title="Installation questions" />

      <EnquiryBand
        title="Let's transform your space professionally"
        body="Book a free consultation and get premium greenery installation solutions tailored for your space."
        href={quoteHref()}
        label="Get a free quote"
      />
    </main>
  );
}
