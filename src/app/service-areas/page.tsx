import Link from "next/link";
import { DetailHead, EnquiryBand } from "@/components/DetailParts";
import { SERVICE_AREAS_PAGE } from "@/lib/content";
import { locations } from "@/lib/locations";
import { heroImage } from "@/lib/hero-images";
import { pageMeta } from "@/lib/seo";
import { quoteHref } from "@/lib/util";

export const metadata = pageMeta({
  title: "Service Areas",
  description: SERVICE_AREAS_PAGE.lede,
  path: "/service-areas",
  keywords: ["service areas", "vertical garden delhi", "balcony garden gurgaon", "landscaping mumbai", "moss wall noida"],
});

const regions = ["Noida & Ghaziabad", "Lucknow & Awadh", "Braj & Western UP", "Kanpur & Bundelkhand", "Purvanchal"] as const;

export default function ServiceAreasPage() {
  return (
    <main>
      <DetailHead
        image={heroImage(3)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Service areas" }]}
        kicker={SERVICE_AREAS_PAGE.kicker}
        title={<span dangerouslySetInnerHTML={{ __html: SERVICE_AREAS_PAGE.title }} />}
        lede={SERVICE_AREAS_PAGE.lede}
      />
      {regions.map((r) => {
        const list = locations.filter((l) => l.region === r);
        if (!list.length) return null;
        return (
          <section className="detail-block" key={r}>
            <div className="wrap">
              <div className="rv" style={{ marginBottom: "1.5rem" }}>
                <p className="kicker">Service area</p>
                <h2 className="detail-h2">{r}</h2>
              </div>
              <ul className="area-list">
                {list.map((l) => <li key={l.slug}><Link href={`/locations/${l.slug}`}>{l.name}</Link></li>)}
              </ul>
            </div>
          </section>
        );
      })}
      <EnquiryBand title="Looking for greenery solutions in your city?" body={SERVICE_AREAS_PAGE.more} href={quoteHref()} label="Share your area" />
    </main>
  );
}
