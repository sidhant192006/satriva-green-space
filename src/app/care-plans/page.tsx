import { pageMeta } from "@/lib/seo";
import CarePlans from "@/components/CarePlans";

export const metadata = pageMeta({
  title: "GardenCare Garden Maintenance Plans",
  description:
    "Annual garden maintenance plans for homes, societies and businesses in Lucknow, Kanpur and Indore, with fixed visit days, a written scope and photos after every visit.",
  path: "/care-plans",
  keywords: ["garden maintenance plans", "garden AMC", "plant care service", "commercial garden maintenance"],
});

export default function CarePlansPage() {
  return (
    <main>
      <CarePlans as="h1" />
    </main>
  );
}
