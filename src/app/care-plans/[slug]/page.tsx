import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Checklist, DetailHead, EnquiryBand, FactCard, LinkList, Prose } from "@/components/DetailParts";
import { careIncludes, getTier, tiers } from "@/lib/content";
import { enquireHref } from "@/lib/util";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tiers.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tier = getTier(slug);
  if (!tier) return {};
  return pageMeta({
    title: `GardenCare ${tier.name}: Garden Maintenance Plan`,
    description: `${tier.blurb} Indicative ${tier.fee} a month. Fixed visit days and photo reports in Lucknow, Kanpur and Indore.`,
    path: `/care-plans/${slug}`,
    keywords: ["garden maintenance plan", "garden AMC", `${tier.segment.toLowerCase()} garden maintenance`],
  });
}

export default async function TierPage({ params }: Props) {
  const { slug } = await params;
  const tier = getTier(slug);
  if (!tier) return notFound();

  const others = tiers.filter((t) => t.slug !== slug);

  return (
    <main>
      <DetailHead
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Care plans", href: "/care-plans" },
          { label: tier.name },
        ]}
        kicker={`GardenCare · ${tier.segment}`}
        title={<>GardenCare <em>{tier.name}</em></>}
        lede={tier.blurb}
        aside={
          <FactCard
            label="Indicative price"
            value={`${tier.fee} / month`}
            note="Final pricing is confirmed after a site visit."
          />
        }
      />

      <div className="wrap">
        <Prose>
          {tier.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Prose>
      </div>

      <Checklist kicker="This plan" title="What it covers" items={tier.adds} />
      <Checklist kicker="Fit" title="Best for" items={tier.bestFor} />
      <Checklist kicker="Every plan" title="Included with all plans" items={careIncludes} />

      <LinkList
        kicker="Compare"
        title="Other plans"
        cards={others.map((t) => ({
          title: t.name,
          body: t.blurb,
          href: `/care-plans/${t.slug}`,
          tag: t.segment,
          meta: `${t.fee} / month`,
        }))}
      />

      <EnquiryBand
        title={`Ask about ${tier.name}`}
        body="Tell us about your space and we will confirm pricing after a site visit."
        href={enquireHref("GardenCare AMC")}
        label="Ask about this plan"
      />
    </main>
  );
}
