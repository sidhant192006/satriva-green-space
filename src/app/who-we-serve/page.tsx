import { pageMeta } from "@/lib/seo";
import Audience from "@/components/Audience";

export const metadata = pageMeta({
  title: "Gardens for Homes, Societies and Businesses",
  description:
    "Balcony and terrace gardens for homes, common-area greenery for societies, green walls for businesses, and execution for architects, builders and facility managers.",
  path: "/who-we-serve",
  keywords: ["society garden maintenance", "office green wall", "garden contractor for architects", "home terrace garden"],
});

export default function WhoWeServePage() {
  return (
    <main>
      <Audience as="h1" />
    </main>
  );
}
