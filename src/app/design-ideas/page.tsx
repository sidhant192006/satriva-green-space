import Image from "next/image";
import { DetailHead, EnquiryBand } from "@/components/DetailParts";
import { DESIGN_IDEAS_PAGE } from "@/lib/content";
import { showcaseProjects } from "@/lib/design-ideas";
import { heroImage } from "@/lib/hero-images";
import { pageMeta } from "@/lib/seo";
import { quoteHref } from "@/lib/util";
import fs from "node:fs";
import path from "node:path";

export const metadata = pageMeta({
  title: "Design Ideas & Project Showcase",
  description:
    "Luxury greenery concepts, balcony transformations, moss walls, and architectural outdoor inspirations.",
  path: "/design-ideas",
  keywords: ["design ideas", "project showcase", "vertical garden projects", "balcony transformation", "landscape design"],
});

const exists = (p: string) => fs.existsSync(path.join(process.cwd(), "public", p));

export default function DesignIdeasPage() {
  const projects = showcaseProjects.filter((p) => exists(p.image));
  return (
    <main>
      <DetailHead
        image={heroImage(13)}
        crumbs={[{ label: "Home", href: "/" }, { label: "Design ideas" }]}
        kicker={DESIGN_IDEAS_PAGE.kicker}
        title={<span dangerouslySetInnerHTML={{ __html: DESIGN_IDEAS_PAGE.title }} />}
        lede={DESIGN_IDEAS_PAGE.lede}
      />
      <div className="wrap" style={{ paddingBottom: "var(--sec)" }}>
        <div className="projects">
          {projects.map((p) => (
            <article className="project rv" key={p.id}>
              <span className="project-img"><Image src={p.image} alt={p.title} fill sizes="(max-width: 860px) 90vw, 36rem" /></span>
              <div>
                <span className="tag">{p.category}</span>
                <h2>{p.title}</h2>
                <p className="meta">{p.area} · {p.duration}</p>
                <p>{p.story}</p>
                <ul className="area-list">
                  {p.materials.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <EnquiryBand title={DESIGN_IDEAS_PAGE.closingTitle} body={DESIGN_IDEAS_PAGE.closing} href={quoteHref()} label="Get similar installation" />
    </main>
  );
}
