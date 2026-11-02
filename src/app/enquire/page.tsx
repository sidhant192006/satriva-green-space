import { pageMeta } from "@/lib/seo";
import Enquiry from "@/components/Enquiry";

export const metadata = pageMeta({
  title: "Book a Garden Site Visit",
  description:
    "Tell us about your balcony, terrace or garden in Lucknow, Kanpur or Indore and prepare an enquiry for a site visit.",
  path: "/enquire",
  keywords: ["book garden site visit", "balcony garden enquiry", "gardener near me"],
});

export default function EnquirePage() {
  return (
    <main>
      <Enquiry />
    </main>
  );
}
