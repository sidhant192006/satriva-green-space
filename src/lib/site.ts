/** Brand, contact and navigation. Satriva brand, contact and navigation. */
export const SITE = {
  name: "Satriva",
  shortName: "Satriva",
  tagline: "Natural & Artificial Vertical Garden Services",
  description:
    "From natural and artificial vertical gardens to moss walls and balcony landscaping, we create green spaces that last.",
  founded: "2022",
  rating: "4.8",
  reviewCount: "10+",
  projectCount: "350+",
  yearsExperience: "3+",
} as const;

/** Contact details shown on the page and used by the quote form. whatsapp: digits only, with country code. */
export const CONTACT = {
  phone: "+91 9305012036",
  phoneHref: "+919305012036",
  whatsapp: "919305012036",
  email: "sidhant192006@gmail.com",
  hours: "Mon–Sat: 9 AM – 7 PM IST",
  address: {
    office: "Uttar Pradesh, India",
    city: "Uttar Pradesh",
    state: "Uttar Pradesh",
    country: "India",
  },
  social: {
    instagram: "https://instagram.com/verticalgardenindia",
    facebook: "https://facebook.com/verticalgardenindia",
    youtube: "https://youtube.com/@verticalgardenindia",
    linkedin: "https://linkedin.com/company/verticalgardenindia",
  },
} as const;

/** Header and footer links. Each one is its own page under src/app. */
export const NAV = [
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Installation", href: "/installation-process" },
  { label: "Design ideas", href: "/design-ideas" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

/** Shown in the Services dropdown. Short list kept here so the header does not load the full service data. */
export const NAV_SERVICES = [
  { slug: "natural-vertical-garden", title: "Natural Vertical Garden", blurb: "Living walls with automated irrigation", image: "/images/satriva-hero/hero-1.webp" },
  { slug: "artificial-vertical-garden", title: "Artificial Vertical Garden", blurb: "Zero-maintenance, UV-protected green walls", image: "/images/satriva-hero/hero-5.webp" },
  { slug: "moss-wall", title: "Moss Wall", blurb: "Preserved moss art, no water or sunlight", image: "/images/satriva-hero/hero-10.webp" },
  { slug: "balcony-garden", title: "Balcony Garden", blurb: "Flooring, planters and lighting for balconies", image: "/images/satriva-hero/hero-14.webp" },
  { slug: "landscape-consultation", title: "Landscape Consultation", blurb: "2D and 3D plans for villas and terraces", image: "/images/satriva-hero/hero-4.webp" },
  { slug: "related-services", title: "Related Services", blurb: "Maintenance, AMC and garden upgrades", image: "/images/satriva-hero/hero-6.webp" },
] as const;
