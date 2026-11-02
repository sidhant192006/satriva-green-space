import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Checklist, DetailHead, EnquiryBand, LinkList, Prose } from "@/components/DetailParts";
import { audiences, getAudience, getService, getTier, VISIT_OFFER } from "@/lib/content";
import { enquireHref } from "@/lib/util";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return audiences.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};
  return pageMeta({
    title: `Green Spaces for ${audience.title}`,
    description: `${audience.body} Services in Lucknow, Kanpur and Indore.`,
    path: `/who-we-serve/${slug}`,
  });
}

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return notFound();

  const services = audience.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const plan = getTier(audience.plan);

  return (
    <main>
      <DetailHead
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Who we serve", href: "/who-we-serve" },
          { label: audience.title },
        ]}
        kicker={audience.tag}
        title={audience.title}
        lede={audience.body}
      />

      <div className="wrap">
        <Prose>
          {audience.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Prose>
      </div>

      <Checklist kicker="Needs" title="What you may be looking for" items={audience.needs} />
      <Checklist kicker="Our work" title="How we help" items={audience.howWeHelp} />

      <LinkList
        kicker="Services"
        title="Services that fit"
        cards={services.map((s) => ({
          title: s.title,
          body: s.blurb,
          href: `/services/${s.slug}`,
          tag: "Indicative",
          meta: s.price,
        }))}
      />

      {plan && (
        <LinkList
          kicker="Care"
          title="A care plan to keep it going"
          cards={[
            {
              title: `GardenCare ${plan.name}`,
              body: plan.blurb,
              href: `/care-plans/${plan.slug}`,
              tag: plan.segment,
              meta: `${plan.fee} / month`,
            },
          ]}
        />
      )}

      <EnquiryBand
        title="Start with a site visit"
        body="The fee is credited against your project once you approve it."
        href={enquireHref(VISIT_OFFER)}
      />
    </main>
  );
}
