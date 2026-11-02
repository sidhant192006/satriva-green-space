import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import { AboutShort, HowItWorks, LocationsStrip, Portfolio, Products, Testimonials, WhyChoose } from "@/components/HomeSections";
import Journal from "@/components/Journal";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import StartCta from "@/components/StartCta";
import { HOME_FAQS } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Satriva | Natural & Artificial Vertical Garden Services",
  absoluteTitle: true,
  description:
    "Satriva offers natural & artificial vertical garden solutions for homes, offices & balconies across India. Design, install & maintain.",
  path: "/",
  keywords: ["vertical garden India", "balcony garden", "artificial green wall", "landscape design"],
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <AboutShort />
      <Services />
      <Products />
      <HowItWorks />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <LocationsStrip />
      <FaqSection faqs={HOME_FAQS} title="Frequently asked questions" kicker="Common questions" />
      <Journal />
      <StartCta />
    </main>
  );
}
