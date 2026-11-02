import Link from "next/link";
import { DetailHead } from "@/components/DetailParts";
import { heroImage } from "@/lib/hero-images";
import { Arrow } from "@/components/Icons";
import { locations } from "@/lib/locations";
import { pageMeta } from "@/lib/seo";
import { delay } from "@/lib/util";

export const metadata = pageMeta({
  title: "Vertical Garden & Balcony Landscaping Locations",
  description:
    "Satriva designs and installs vertical gardens, moss walls and balcony gardens across Uttar Pradesh, including Lucknow, Kanpur, Noida, Agra, Varanasi and Prayagraj.",
  path: "/locations",
  keywords: ["vertical garden delhi", "balcony garden gurgaon", "landscaping mumbai", "moss wall noida"],
});

export default function LocationsPage() {
  return (
    <main>
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
        kicker="Locations"
        title={<>Where we <em>work.</em></>}
        lede="We design and install green walls and gardens across Uttar Pradesh. Pick your city or neighbourhood to see local notes and answers."
        image={heroImage(9)}
      />

      <div className="wrap" style={{ padding: "var(--sec) 0" }}>
        <div className="places">
          {locations.map((loc, i) => (
            <Link className="place rv" style={delay(`${(i % 3) * 0.08}s`)} href={`/locations/${loc.slug}`} key={loc.slug}>
              <span className="tag">{loc.region}</span>
              <h2>{loc.name}</h2>
              <p>{loc.tagline}</p>
              <span className="more">Vertical gardens in {loc.name} <Arrow /></span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
