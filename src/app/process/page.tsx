import { pageMeta } from "@/lib/seo";
import Process from "@/components/Process";

export const metadata = pageMeta({
  title: "How a Garden Project Works",
  description:
    "Five steps from the first site visit and proposal to installation, handover and ongoing care. See how SATRIVA plans and delivers balcony and terrace gardens.",
  path: "/process",
  keywords: ["how to make a balcony garden", "garden installation process", "terrace garden steps"],
});

export default function ProcessPage() {
  return (
    <main>
      <Process as="h1" />
    </main>
  );
}
