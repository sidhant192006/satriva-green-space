import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { Checklist, DetailHead, EnquiryBand, LinkList, Prose } from "@/components/DetailParts";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { pickHero } from "@/lib/hero-images";
import { getCollageImages } from "@/lib/gallery-images";
import { SERVICE_LABELS, getLocationBySlug, locations } from "@/lib/locations";
import { pageMeta, serviceSchema } from "@/lib/seo";
import { getService } from "@/lib/services";
import { delay, quoteHref } from "@/lib/util";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  return pageMeta({ title: loc.metaTitle, description: loc.metaDescription, path: `/locations/${slug}`, keywords: loc.keywords, absoluteTitle: true });
}

const exists = (p: string) => fs.existsSync(path.join(process.cwd(), "public", p));

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return notFound();

  const parent = loc.parentCitySlug ? getLocationBySlug(loc.parentCitySlug) : undefined;
  const collage = getCollageImages(slug, 5).filter(exists);
  const nearby = loc.nearbyAreas;
  const otherCities = locations.filter((l) => !l.parentCitySlug && l.slug !== slug);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    ...(parent ? [{ label: parent.name, href: `/locations/${parent.slug}` }] : []),
    { label: loc.name },
  ];

  return (
    <main>
      <JsonLd data={serviceSchema({ name: `Vertical garden and balcony landscaping in ${loc.name}`, description: loc.metaDescription, path: `/locations/${slug}`, areaName: loc.name })} />
      <DetailHead
        crumbs={crumbs}
        kicker={`${loc.name} · ${loc.region}`}
        title={<>Vertical gardens in <em>{loc.name}.</em></>}
        lede={loc.tagline}
        image={pickHero(slug, [3, 4, 6, 8, 9, 15, 17, 19])}
      />

      <div className="wrap">
        <Prose>
          <p>{loc.intro}</p>
          <p>{loc.localContext}</p>
        </Prose>
        {loc.stats && (
          <ul className="stats stats-inline">
            <li><strong>{loc.stats.projectsCompleted}</strong><span>projects completed</span></li>
            <li><strong>{loc.stats.wallsBeautified}</strong><span>walls beautified</span></li>
            <li><strong>{loc.stats.yearsActive}</strong><span>years active</span></li>
            <li><strong>{loc.stats.clientReturnRate}%</strong><span>client return rate</span></li>
          </ul>
        )}
      </div>

      <Checklist kicker="Local landmarks" title={`Where we work in ${loc.name}`} items={loc.landmarks} />

      <LinkList
        kicker="Popular here"
        title={`Popular services in ${loc.name}`}
        cards={loc.popularServices
          .map((s) => getService(s))
          .filter((s): s is NonNullable<typeof s> => Boolean(s))
          .map((s) => ({ title: SERVICE_LABELS[s.slug as keyof typeof SERVICE_LABELS] ?? s.title, body: s.blurb, href: `/services/${s.slug}`, tag: "Starting from", meta: s.priceFrom }))}
      />

      {loc.featuredProject && (
      <section className="detail-block">
        <div className="wrap detail-grid">
          <div className="rv">
            <p className="kicker">Featured project · {loc.featuredProject.category}</p>
            <h2 className="detail-h2">{loc.featuredProject.title}</h2>
            <p className="block-intro">{loc.featuredProject.description}</p>
          </div>
          {exists(loc.featuredProject.image) ? (
            <figure className="wide-img" style={{ aspectRatio: "4/3", margin: 0 }}>
              <Image src={loc.featuredProject.image} alt={loc.featuredProject.title} fill sizes="(max-width: 860px) 90vw, 40rem" />
            </figure>
          ) : collage[0] ? (
            <figure className="wide-img" style={{ aspectRatio: "4/3", margin: 0 }}>
              <Image src={collage[0]} alt={`Vertical garden project in ${loc.name}`} fill sizes="(max-width: 860px) 90vw, 40rem" />
            </figure>
          ) : null}
        </div>
      </section>
      )}

      {collage.length > 1 && (
        <section className="detail-block">
          <div className="wrap">
            <div className="rv block-head">
              <p className="kicker">Our work</p>
              <h2 className="detail-h2">Recent installations</h2>
            </div>
            <ul className="gallery">
              {collage.map((src, i) => (
                <li key={src}><Image src={src} alt={`Vertical garden installation ${i + 1} near ${loc.name}`} fill sizes="(max-width: 640px) 50vw, 20rem" /></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {loc.testimonial && (
      <section className="detail-block">
        <div className="wrap">
          <div className="quotes">
            <figure className="quote rv">
              <p className="stars" aria-label={`${loc.testimonial.rating} out of 5`}>{"★".repeat(loc.testimonial.rating)}</p>
              <blockquote>{loc.testimonial.quote}</blockquote>
              <figcaption><strong>{loc.testimonial.name}</strong><span>{loc.testimonial.role}</span></figcaption>
            </figure>
          </div>
        </div>
      </section>
      )}

      <FaqSection
        faqs={loc.faqs.map((f) => ({ q: f.question, a: f.answer }))}
        title={`Vertical gardens in ${loc.name}: your questions`}
      />

      {nearby.length > 0 && (
        <section className="detail-block">
          <div className="wrap">
            <div className="rv" style={{ marginBottom: "1.5rem" }}>
              <p className="kicker">Nearby</p>
              <h2 className="detail-h2">Neighbourhoods we also serve</h2>
            </div>
            <ul className="area-list">
              {nearby.map((a) => {
                const known = getLocationBySlug(a.slug);
                return <li key={a.slug}>{known ? <Link href={`/locations/${a.slug}`}>{a.name}</Link> : a.name}</li>;
              })}
            </ul>
          </div>
        </section>
      )}

      <section className="detail-block">
        <div className="wrap">
          <p className="note" style={{ marginTop: 0 }}>
            Also serving:{" "}
            {otherCities.map((c, i) => (
              <span key={c.slug}>
                <Link href={`/locations/${c.slug}`} style={{ color: "var(--accent)" }}>{c.name}</Link>
                {i < otherCities.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      <EnquiryBand
        title={`Book a free site visit in ${loc.name}`}
        body="Our designer assesses your space, suggests plants and gives pricing on the spot. No obligation."
        href={quoteHref(undefined, { city: loc.name })}
        label="Get a free quote"
      />
    </main>
  );
}
