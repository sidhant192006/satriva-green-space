import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Checklist, DetailHead, EnquiryBand, Prose } from "@/components/DetailParts";
import { Arrow } from "@/components/Icons";
import { getStep, steps, VISIT_OFFER } from "@/lib/content";
import { enquireHref } from "@/lib/util";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return steps.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const step = getStep(slug);
  if (!step) return {};
  return pageMeta({
    title: `${step.title}: Step in a Garden Project`,
    description: `${step.body} Part of how SATRIVA plans and delivers balcony and terrace gardens in Lucknow, Kanpur and Indore.`,
    path: `/process/${slug}`,
  });
}

export default async function StepPage({ params }: Props) {
  const { slug } = await params;
  const step = getStep(slug);
  if (!step) return notFound();

  const index = steps.findIndex((s) => s.slug === slug);
  const prev = steps[index - 1];
  const next = steps[index + 1];

  return (
    <main>
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "How it works", href: "/process" }, { label: step.title }]}
        kicker={`Step ${index + 1} of ${steps.length}`}
        title={step.title}
        lede={step.body}
      />

      <div className="wrap">
        <Prose>
          {step.detail.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Prose>
      </div>

      <Checklist kicker="Your part" title="What you provide" items={step.youProvide} />
      <Checklist kicker="Our part" title="What you receive" items={step.youReceive} />

      <div className="wrap">
        <nav className="pager" aria-label="Steps">
          {prev ? (
            <Link href={`/process/${prev.slug}`} className="pager-link">
              <small>Previous step</small>
              <span>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/process/${next.slug}`} className="pager-link pager-next">
              <small>Next step</small>
              <span>
                {next.title} <Arrow />
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      <EnquiryBand
        title="Start with a site visit"
        body="The fee is credited against your project once you approve it."
        href={enquireHref(VISIT_OFFER)}
      />
    </main>
  );
}
