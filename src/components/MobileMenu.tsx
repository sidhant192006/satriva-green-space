"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { NAV, NAV_SERVICES } from "@/lib/site";

/** Small-screen navigation. A native <details> element, closed again after a link is chosen. */
export default function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  return (
    <details className="menu" ref={ref}>
      <summary>Menu</summary>
      <ul onClick={(e) => { if ((e.target as HTMLElement).closest("a")) ref.current?.removeAttribute("open"); }}>
        {NAV.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
              {item.href === "/services" && (
                <ul className="menu-sub">
                  {NAV_SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} aria-current={pathname === `/services/${s.slug}` ? "page" : undefined}>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </details>
  );
}
