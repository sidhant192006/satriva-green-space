import { DetailHead } from "@/components/DetailParts";
import Services from "@/components/Services";
import { heroImage } from "@/lib/hero-images";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Vertical Garden, Moss Wall & Balcony Garden Services",
  description:
    "Natural and artificial vertical gardens, moss walls, balcony gardens, landscape consultation and maintenance across India. Free site visit and fixed quote.",
  path: "/services",
  keywords: ["vertical garden services", "moss wall", "balcony garden", "landscape consultation"],
});

export default function ServicesPage() {
  return (
    <main>
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        kicker="Our services"
        title={<>Six ways to <em>go green.</em></>}
        lede="From lush natural living walls to zero-maintenance moss art, we design and install green spaces tailored to your home or office."
        image={heroImage(7)}
      />
      <div style={{ paddingTop: "var(--sec)" }}>
        <Services />
      </div>
    </main>
  );
}
