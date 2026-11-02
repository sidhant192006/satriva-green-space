import Link from "next/link";
import { careIncludes, tiers } from "@/lib/content";
import { delay, enquireHref } from "@/lib/util";
import { Arrow, Leaf } from "./Icons";

type Props = {
  /** Use "h1" when this section is the main content of its own page. */
  as?: "h1" | "h2";
};

export default function CarePlans({ as: Heading = "h2" }: Props) {
  const isPage = Heading === "h1";

  return (
    <section className={isPage ? "band is-page" : "band"} id="care" aria-labelledby="care-h">
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <p className="kicker">GardenCare AMC</p>
            <Heading className="title" id="care-h">Looked after, <em>on schedule.</em></Heading>
          </div>
          <p className="rv" style={delay(".1s")}>
            A new garden needs regular care to stay good. GardenCare is an annual maintenance contract with
            fixed visit days, a written scope and photographs after every visit.
          </p>
        </div>

        <div className="tiers rv">
          {tiers.map((tier) => (
            <article className="tier" key={tier.slug}>
              <span className="tag">{tier.segment}</span>
              <h3>{tier.name}</h3>
              <div className="fee">
                {tier.fee} <small>/ month</small>
              </div>
              <p>{tier.blurb}</p>
              <Link className="tier-more" href={`/care-plans/${tier.slug}`}>
                Plan details <Arrow />
              </Link>
            </article>
          ))}
        </div>

        <ul className="incl">
          {careIncludes.map((line, i) => (
            <li className="rv" style={delay(`${i * 0.08}s`)} key={line}>
              <Leaf />
              {line}
            </li>
          ))}
        </ul>

        <div className="band-cta">
          <Link className="btn btn-brand" href={enquireHref("GardenCare AMC")}>
            Ask about care plans <Arrow />
          </Link>
          <p>Indicative monthly ranges. Final pricing is confirmed after a site visit.</p>
        </div>
      </div>
    </section>
  );
}
