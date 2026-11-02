import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Blocks from "@/components/Blocks";
import { DetailHead, EnquiryBand, FactCard, LinkList, Prose } from "@/components/DetailParts";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { SERVICE_HERO } from "@/lib/hero-images";
import { catalogLinks } from "@/lib/catalog-links";
import { getService, services } from "@/lib/services";
import { pageMeta, serviceSchema } from "@/lib/seo";
import { quoteHref, whatsappHref } from "@/lib/util";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({
    title: s.seoTitle,
    description: s.seoDescription,
    path: `/services/${slug}`,
    keywords: s.keywords,
    image: s.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return notFound();

  const related = service.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));
  const catalogs = catalogLinks(slug);

  return (
    <main>
      <JsonLd data={serviceSchema({ name: service.title, description: service.seoDescription, path: `/services/${slug}` })} />
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
        kicker={service.heroKicker}
        title={<span dangerouslySetInnerHTML={{ __html: service.heroTitle }} />}
        lede={service.heroLede}
        aside={<FactCard label="Starting from" value={service.priceFrom} note={service.priceNote} />}
        image={SERVICE_HERO[slug]}
      >
        <ul className="area-list phero-badges">
          {service.heroBadges.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="cta-row">
          <Link className="btn btn-solid" href={quoteHref(service.quoteLabel)}>Get your free quote</Link>
          <a className="btn btn-line" href={whatsappHref(`Hello Satriva, I am interested in ${service.title}.`)} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        </div>
      </DetailHead>

      <div className="wrap">
        <Prose>
          {service.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Prose>
      </div>

      <Blocks blocks={service.blocks} />

      {catalogs.length > 0 && (
        <section className="detail-block">
          <div className="wrap">
            <div className="rv block-head">
              <p className="kicker">Catalogues</p>
              <h2 className="detail-h2">Download a catalogue</h2>
            </div>
            <ul className="area-list">
              {catalogs.map((c) => (
                <li key={c.file}><a href={c.file} download>{c.title}</a></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FaqSection faqs={service.faqs} title={`Questions about ${service.title.toLowerCase()}`} />

      <LinkList
        kicker="Related"
        title="You may also want"
        cards={related.map((r) => ({ title: r.title, body: r.blurb, href: `/services/${r.slug}`, tag: "Starting from", meta: r.priceFrom }))}
      />

      <EnquiryBand
        title={`Interested in ${service.title.toLowerCase()}?`}
        body="Book a free site visit. Our designer assesses your space, suggests plants and gives pricing on the spot."
        href={quoteHref(service.quoteLabel)}
        label="Get a free quote"
      />
    </main>
  );
}
