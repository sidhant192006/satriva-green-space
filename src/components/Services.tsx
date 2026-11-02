import Link from "next/link";
import { services } from "@/lib/services";
import { delay, quoteHref } from "@/lib/util";
import { Arrow } from "./Icons";

type Props = { as?: "h1" | "h2" };

export default function Services({ as: Heading = "h2" }: Props) {
  const isPage = Heading === "h1";

  return (
    <section
      className={isPage ? "section is-page" : "section"}
      id="services"
      aria-labelledby="svc"
      style={isPage ? undefined : { paddingTop: 0 }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div className="rv">
            <p className="kicker">Our services</p>
            <Heading className="title" id="svc">Six ways to <em>go green.</em></Heading>
          </div>
          <p className="rv" style={delay(".1s")}>
            From lush natural living walls to zero-maintenance moss art, we design and install green spaces tailored
            to your home or office: indoors, outdoors, big or small.
          </p>
        </div>

        <ul className="offers">
          {services.map((s) => (
            <li className="rv" key={s.slug}>
              <Link className="offer" href={`/services/${s.slug}`}>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="price"><small>Starting from</small>{s.priceFrom}</span>
                <Arrow className="arrow" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="visit rv">
          <div>
            <h3>Free site visit</h3>
            <p>Our designer assesses your space, suggests plant options and gives pricing on the spot.</p>
          </div>
          <Link className="btn btn-line" href={quoteHref()}>
            Book a visit <Arrow />
          </Link>
        </div>
        <p className="note">Indicative starting prices. Your quote follows a site visit and reflects scope, materials and location.</p>
      </div>
    </section>
  );
}
