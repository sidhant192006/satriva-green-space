import { DetailHead } from "@/components/DetailParts";
import { heroImage } from "@/lib/hero-images";
import QuoteForm from "@/components/QuoteForm";
import FaqSection from "@/components/FaqSection";
import { CONTACT_FAQS, CONTACT_PAGE } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { CONTACT } from "@/lib/site";
import { whatsappHref } from "@/lib/util";

export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Get in touch with our team for premium vertical gardens, balcony transformations, moss walls, landscaping, and greenery solutions.",
  path: "/contact",
  keywords: ["contact satriva", "vertical garden quote", "site visit"],
});

export default function ContactPage() {
  return (
    <main>
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        kicker={CONTACT_PAGE.kicker}
        title={<span dangerouslySetInnerHTML={{ __html: CONTACT_PAGE.title }} />}
        lede={CONTACT_PAGE.lede}
        image={heroImage(14)}
      />
      <section className="section" aria-label="Contact details and form">
        <div className="wrap enquire">
          <div className="enquire-copy rv">
            <div className="contact">
              <div><span>Call</span><b><a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a></b></div>
              <div><span>WhatsApp</span><b><a href={whatsappHref()} target="_blank" rel="noopener noreferrer">+{CONTACT.whatsapp}</a></b></div>
              <div><span>Email</span><b><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></b></div>
              <div><span>Hours</span><b>{CONTACT.hours}</b></div>
              <div><span>Office</span><b>{CONTACT.address.office}</b></div>
            </div>
            <p>{CONTACT_PAGE.closing}</p>
          </div>
          <QuoteForm detailed={false} />
        </div>
      </section>
      <FaqSection faqs={CONTACT_FAQS} title="Before you get in touch" />
    </main>
  );
}
