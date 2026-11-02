import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbSchema } from "@/lib/seo";
import JsonLd from "./JsonLd";

export type Crumb = { label: string; href?: string };

/**
 * Hero at the top of every inner page: full-width photo, dark veil, breadcrumb, kicker,
 * heading and an optional lead paragraph, buttons or side card.
 */
export default function PageHero({
  crumbs,
  kicker,
  title,
  lede,
  image,
  aside,
  children,
}: {
  crumbs?: Crumb[];
  kicker: string;
  title: ReactNode;
  lede?: string;
  image: string;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="phero">
      <Image className="phero-bg" src={image} alt="" fill priority sizes="100vw" />
      <div className="wrap phero-in">
        {crumbs && crumbs.length > 0 && (
          <>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <nav aria-label="Breadcrumb">
              <ol className="crumbs">
                {crumbs.map((c) => (
                  <li key={c.label}>
                    {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}
        <p className="kicker phero-kicker">{kicker}</p>
        <div className="phero-top">
          <div>
            <h1 className="post-title">{title}</h1>
            {lede && <p className="page-lede">{lede}</p>}
            {children && <div className="phero-actions">{children}</div>}
          </div>
          {aside}
        </div>
      </div>
    </header>
  );
}
