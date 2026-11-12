import Image from "next/image";
import Link from "next/link";
import { FOOTER_CITIES } from "@/lib/locations";
import { services } from "@/lib/services";
import { CONTACT, NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <Image className="foot-logo" src="/logo.png" alt="Satriva Green Space logo" width={96} height={145} />
          <p className="foot-tag">{SITE.tagline}</p>
          <ul className="foot-nav">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/free-quote">Free quote</Link></li>
            <li><a href="#top">Back to top</a></li>
          </ul>
        </div>

        <div className="foot-cols">
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>{CONTACT.hours}</li>
              <li>{CONTACT.address.office}</li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link href="/corporate-gifting">Corporate Gifting</Link></li>
            </ul>
          </div>
          <div>
            <h3>Service locations</h3>
            <ul>
              {FOOTER_CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={c.slug === "delhi-ncr" ? "/locations" : `/locations/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
              <li><Link href="/service-areas">All service areas</Link></li>
            </ul>
          </div>
          <div>
            <h3>Follow</h3>
            <ul>
              <li><a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="ghost" aria-hidden="true">SATRIVA</div>
      </div>
      <div className="wrap">
        <p className="foot-base">
          © {new Date().getFullYear()} {SITE.name}. Rated {SITE.rating}/5. All prices are indicative and confirmed
          after a site visit. Free site visits across Uttar Pradesh.
        </p>
      </div>
    </footer>
  );
}
