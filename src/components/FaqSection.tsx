import type { Faq } from "@/lib/services";
import { faqSchema } from "@/lib/seo";
import JsonLd from "./JsonLd";

/**
 * Visible questions and answers, plus matching FAQ structured data.
 * The answers are real text in the page, so search engines can read them without opening anything.
 */
export default function FaqSection({
  faqs,
  title = "Frequently asked questions",
  kicker = "FAQ",
}: {
  faqs: Faq[];
  title?: string;
  kicker?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="detail-block">
      <div className="wrap detail-grid">
        <div className="rv">
          <p className="kicker">{kicker}</p>
          <h2 className="detail-h2">{title}</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
