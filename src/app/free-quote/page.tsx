import { DetailHead } from "@/components/DetailParts";
import { heroImage } from "@/lib/hero-images";
import QuoteForm from "@/components/QuoteForm";
import { QUOTE_PAGE } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { CONTACT } from "@/lib/site";
import { whatsappHref } from "@/lib/util";

export const metadata = pageMeta({
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote for natural & artificial vertical gardens, moss walls, balcony gardens and landscaping. Fixed pricing, 24-hour turnaround.",
  path: "/free-quote",
  keywords: ["free quote", "vertical garden quote", "balcony garden cost", "moss wall price"],
});

export default function FreeQuotePage() {
  return (
    <main>
      <DetailHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Free quote" }]}
        kicker={QUOTE_PAGE.kicker}
        title={<span dangerouslySetInnerHTML={{ __html: QUOTE_PAGE.title }} />}
        lede={QUOTE_PAGE.lede}
        image={heroImage(15)}
      />
      <section className="section" aria-label="Quote request">
        <div className="wrap enquire">
          <div className="enquire-copy rv">
            <ol className="next">
              {QUOTE_PAGE.steps.map((s) => (
                <li key={s.title}><span><strong>{s.title}.</strong> {s.body}</span></li>
              ))}
            </ol>
            <h2 className="detail-h2" style={{ marginTop: "2.5rem" }}>{QUOTE_PAGE.benefitsTitle}</h2>
            <ul className="mini">
              {QUOTE_PAGE.benefits.map((b) => (
                <li key={b.title}><strong>{b.title}.</strong> {b.body}</li>
              ))}
            </ul>
            <h2 className="detail-h2" style={{ marginTop: "2.5rem" }}>{QUOTE_PAGE.talkTitle}</h2>
            <p>{QUOTE_PAGE.talkBody}</p>
            <div className="contact">
              <div><span>Call</span><b><a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a></b></div>
              <div><span>WhatsApp</span><b><a href={whatsappHref()} target="_blank" rel="noopener noreferrer">+{CONTACT.whatsapp}</a></b></div>
              <div><span>Hours</span><b>{QUOTE_PAGE.talkHours}</b></div>
            </div>
          </div>
          <div>
            <p className="note" style={{ marginTop: 0, marginBottom: "1.5rem" }}>{QUOTE_PAGE.formNote}</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
