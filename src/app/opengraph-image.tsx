import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

/** The card shown when a page is shared on WhatsApp, Facebook, LinkedIn and similar. */
export const alt = "Satriva. Natural and artificial vertical gardens, moss walls and balcony landscaping.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "logo-header.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b1812",
          color: "#e8eee2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 28, letterSpacing: 10, color: "#d9c28f" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={53} height={80} style={{ marginRight: 24 }} />
          SATRIVA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, lineHeight: 1.02, fontFamily: "serif" }}>
            Vertical gardens,
          </div>
          <div style={{ display: "flex", fontSize: 88, lineHeight: 1.02, fontFamily: "serif", fontStyle: "italic", color: "#d9c28f" }}>
            moss walls & landscaping.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a3b5a8" }}>
          Natural · Artificial · Moss walls · Balcony gardens · Uttar Pradesh
        </div>
      </div>
    ),
    size,
  );
}
