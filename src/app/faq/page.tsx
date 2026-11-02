import FaqSection from "@/components/FaqSection";
import { DetailHead, EnquiryBand } from "@/components/DetailParts";
import { FAQ_GROUPS } from "@/lib/content";
import { heroImage } from "@/lib/hero-images";
import { pageMeta } from "@/lib/seo";
import { quoteHref } from "@/lib/util";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about vertical gardens, balcony gardens, moss walls, landscaping, installation, maintenance, and greenery solutions.",
  path: "/faq",
  keywords: ["vertical garden faq", "balcony garden questions", "landscape consultation", "moss wall faq", "vertical garden cost"],
});

export default function FaqPage() {
  return (
    <main>
      <DetailHead
        image={heroImage(5)}
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        kicker="Help and support"
        title={<>Frequently asked <em>questions.</em></>}
        lede="Everything you need to know about vertical gardens, balcony gardens, moss walls, landscaping, installation, maintenance, and greenery solutions."
      />
      {FAQ_GROUPS.map((g) => (
        <FaqSection key={g.id} faqs={g.faqs} title={g.title} kicker="FAQ" />
      ))}
      <EnquiryBand
        title="Still have questions?"
        body="Our team is here to help you choose the perfect greenery solution for your space."
        href={quoteHref()}
        label="Book free consultation"
      />
    </main>
  );
}
