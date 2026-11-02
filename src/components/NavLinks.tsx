"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, NAV_SERVICES } from "@/lib/site";

/**
 * Desktop header links. The link for the current page is marked with aria-current.
 * "Services" opens a panel with every service when the pointer rests on it or the link has keyboard focus.
 */
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="nav">
      {NAV.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        const hasMenu = item.href === "/services";
        return (
          <li key={item.href} className={hasMenu ? "has-menu" : undefined}>
            <Link href={item.href} aria-current={active ? "page" : undefined} aria-haspopup={hasMenu ? "true" : undefined}>
              {item.label}
              {hasMenu && <span className="caret" aria-hidden="true" />}
            </Link>

            {hasMenu && (
              <div className="mega" role="region" aria-label="Services">
                <ul className="mega-grid">
                  {NAV_SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} aria-current={pathname === `/services/${s.slug}` ? "page" : undefined}>
                        <span className="mega-img">
                          <Image src={s.image} alt="" fill sizes="96px" />
                        </span>
                        <span className="mega-text">
                          <strong>{s.title}</strong>
                          <small>{s.blurb}</small>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link className="mega-all" href="/services">All services &rarr;</Link>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
