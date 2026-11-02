# Satriva website

Next.js (App Router) + TypeScript, with the SATRIVA theme (dark forest ground, Bodoni headings, champagne accent).
All content is from the Satriva website. Blog posts are MDX files in `content/blog`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` (for example https://satriva.in) before deploying.

## Where the content lives

| File | Content |
| --- | --- |
| `src/lib/site.ts` | Brand, phone, WhatsApp, email, address, social links, navigation |
| `src/lib/services.ts` | The 6 services with pricing, plants, process, galleries and FAQs |
| `src/lib/content.ts` | Home, about, installation, FAQ, contact, quote and gifting copy |
| `src/lib/locations.ts` | All 25 city and locality pages |
| `src/lib/testimonials.ts`, `design-ideas.ts` | Reviews and project showcase |
| `content/blog/*.mdx` | Blog posts |

The theme is in `src/app/globals.css` and `src/app/extras.css`.
The quote and contact forms prepare a message that the visitor sends by WhatsApp or email (no server needed).
"# satriva-green-space" 
