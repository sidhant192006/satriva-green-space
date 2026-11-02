import Link from "next/link";
import { DetailHead } from "@/components/DetailParts";
import { heroImage } from "@/lib/hero-images";

export default function NotFound() {
  return (
    <main>
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "404" }]}
        kicker="404"
        title={<>This page has <em>wandered off.</em></>}
        lede="The page you are looking for does not exist. Try our services or get a free quote."
        image={heroImage(20)}
      >
        <div className="cta-row">
          <Link className="btn btn-solid" href="/">Home</Link>
          <Link className="btn btn-line" href="/services">Services</Link>
        </div>
      </DetailHead>
    </main>
  );
}
