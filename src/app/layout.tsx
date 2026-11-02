import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { organizationSchema, SITE_URL, websiteSchema } from "@/lib/seo";
import Effects from "@/components/Effects";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Sprite } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import "./globals.css";
import "./extras.css";

/**
 * Fonts are downloaded at build time and served from this site, so visitors make no request to Google.
 * That removes a render-blocking request, and next/font adds a matching fallback font so text does not
 * jump when the real font loads. Both help Core Web Vitals, which Google uses for ranking.
 */
const display = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--f-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--f-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--f-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE.name,
  title: { default: SITE.name, template: "%s | Satriva" },
  description: SITE.description,
  keywords: [
    "vertical garden India",
    "balcony garden",
    "artificial green wall",
    "moss wall",
    "landscape design",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  // Paste the token from Google Search Console into NEXT_PUBLIC_GSC_TOKEN to verify the site.
  verification: process.env.NEXT_PUBLIC_GSC_TOKEN ? { google: process.env.NEXT_PUBLIC_GSC_TOKEN } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Sprite />
        <Header />
        {children}
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
