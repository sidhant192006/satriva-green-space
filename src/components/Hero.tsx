import Link from "next/link";
import { HERO, heroFacts } from "@/lib/content";
import { heroImage } from "@/lib/hero-images";
import { delay, quoteHref, whatsappHref } from "@/lib/util";
import { Arrow } from "./Icons";
import HeroBackdrop from "./HeroBackdrop";

const backdrop = [
  { src: heroImage(3), alt: "Green walls around a lawn" },
  { src: heroImage(7), alt: "A lit green wall courtyard" },
  { src: heroImage(11), alt: "A zen courtyard with a green wall" },
  { src: heroImage(14), alt: "A terrace lounge with green walls" },
  { src: heroImage(9), alt: "Indoor-outdoor living with a green wall" },
  { src: heroImage(16), alt: "A balcony lounge with plants" },
];

export default function Hero() {
  return (
    <header className="phero phero-home" aria-labelledby="h1">
      <HeroBackdrop images={backdrop} />
      <div className="wrap phero-in phero-home-in">
        <div className="hero-copy">
          <p className="kicker phero-kicker fade" style={delay(".1s")}>{HERO.kicker}</p>

          <h1 className="display" id="h1">
            <span className="ln"><span style={delay(".15s")}>Vertical gardens,</span></span>
            <span className="ln"><span style={delay(".3s")}>moss walls &amp; <em>landscaping.</em></span></span>
          </h1>

          <p className="lede fade" style={delay(".7s")}>{HERO.lede}</p>

          <div className="cta-row fade" style={delay(".85s")}>
            <Link className="btn btn-solid" href={quoteHref()}>
              Get your free quote <Arrow />
            </Link>
            <Link className="btn btn-line" href="/services">See our services</Link>
            <a className="btn btn-line" href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>

          <ul className="facts fade" style={delay("1s")}>
            {heroFacts.map((fact) => (
              <li key={fact.title}>
                <strong>{fact.title}</strong>
                <span>{fact.body}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </header>
  );
}
