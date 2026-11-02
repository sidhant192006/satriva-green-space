import Link from "next/link";
import { quoteHref } from "@/lib/util";
import { Leaf } from "./Icons";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="site-head" id="top">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Satriva, home">
          <Leaf />
          Satriva
        </Link>

        <nav aria-label="Main">
          <NavLinks />
        </nav>

        <div className="head-actions">
          <Link className="btn btn-solid btn-sm" href={quoteHref()}>
            Free quote
          </Link>
          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
      <div className="progress" id="progress" />
    </header>
  );
}
