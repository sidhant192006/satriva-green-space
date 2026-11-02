import Link from "next/link";
import { quoteHref } from "@/lib/util";
import { Arrow } from "./Icons";

/** Closing call to action at the bottom of the home page. */
export default function StartCta() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="visit rv">
          <div>
            <h3>Let&rsquo;s transform your space</h3>
            <p>Book a free site visit and get a transparent, itemised quote. No obligation.</p>
          </div>
          <Link className="btn btn-solid" href={quoteHref()}>
            Get a free quote <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
