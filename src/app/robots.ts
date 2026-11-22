import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

<<<<<<< HEAD
=======
export const dynamic = "force-static";

>>>>>>> 9797acb (Update website)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
