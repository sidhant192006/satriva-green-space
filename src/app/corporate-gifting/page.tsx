import Image from "next/image";
import { DetailHead } from "@/components/DetailParts";
import { Checklist } from "@/components/DetailParts";
import { GIFTING } from "@/lib/content";
import { heroImage } from "@/lib/hero-images";
import { pageMeta } from "@/lib/seo";
import { whatsappHref } from "@/lib/util";

export const metadata = pageMeta({
  title: "Corporate Gifting with Plants",
  description: "Corporate green gifting with plants in India: indoor plants, outdoor plants and gift hampers with custom branding.",
  path: "/corporate-gifting",
  keywords: ["corporate gifting plants india", "green gifts", "employee appreciation gifts", "plant gift hamper"],
});

export default function GiftingPage() {
  const href = whatsappHref("Hello Satriva, I would like to enquire about corporate gifting.");
  return (
    <main>
      <DetailHead
        image={heroImage(16)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Corporate gifting" }]}
        kicker={GIFTING.kicker}
        title={<span dangerouslySetInnerHTML={{ __html: GIFTING.title }} />}
        lede={GIFTING.lede}
      />
      <div className="wrap">
        <figure className="wide-img"><Image src={GIFTING.image} alt="Corporate green gifting ideas with plants" fill sizes="(max-width: 1200px) 100vw, 78rem" /></figure>
        <div className="cta-row"><a className="btn btn-solid" href={href} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a></div>
      </div>
      <Checklist kicker="Gift type" title="What you can send" items={GIFTING.giftTypes} />
      <Checklist kicker="Occasion" title="Occasions we cover" items={GIFTING.occasions} />
      <Checklist kicker="Customisation" title="Make it yours" items={GIFTING.customizations} />
    </main>
  );
}
