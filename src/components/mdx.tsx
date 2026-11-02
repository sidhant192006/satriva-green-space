import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Use in any .mdx post as <Callout title="Good to know">Text here.</Callout> */
function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="callout">
      {title && <strong>{title}</strong>}
      {children}
    </aside>
  );
}

function Anchor({ href = "", children, ...rest }: ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return <Link href={href}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

/** Components available inside every MDX post. */
export const mdxComponents = {
  a: Anchor,
  Callout,
};
