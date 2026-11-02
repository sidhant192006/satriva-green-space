// data/locations.ts
// -----------------------------------------------------------------------------
// Central data source for every Uttar Pradesh city / locality landing page.
// Each object here drives one route: /locations/[slug]
// Keep copy genuinely different per location (unique paragraph, unique FAQ,
// unique testimonial, unique landmark references) — thin/duplicated location
// pages are the #1 reason "near me" service pages get filtered out of search.
// -----------------------------------------------------------------------------

export type ServiceSlug =
  | "natural-vertical-garden"
  | "artificial-vertical-garden"
  | "moss-wall"
  | "balcony-garden"
  | "landscape-consultation";

export interface Faq {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string; // e.g. "Villa Owner, South Delhi"
  quote: string;
  rating: number; // out of 5
}

export interface LocationData {
  /** URL slug — used as the [slug] param, e.g. "vasant-kunj" */
  slug: string;
  /** Display name, e.g. "Vasant Kunj" */
  name: string;
  /** Broader region tab this location rolls up under (matches homepage tabs) */
  region: "Noida & Ghaziabad" | "Lucknow & Awadh" | "Braj & Western UP" | "Kanpur & Bundelkhand" | "Purvanchal";
  /** If this is a micro-locality inside a bigger service city, name the parent city for breadcrumbs/internal linking (own-slug lookup) */
  parentCitySlug?: string;
  /** Short line under the H1, plays the role of the italic green line on the homepage hero */
  tagline: string;
  /** 1-line, ~150-160 char meta description */
  metaDescription: string;
  /** ~50-60 char meta title */
  metaTitle: string;
  /** Extra keywords for JSON-LD / internal use, not stuffed into visible copy */
  keywords: string[];
  /** Unique 2-3 sentence intro paragraph — must not be reused across locations */
  intro: string;
  /** Unique "why this locality" paragraph referencing real local context (climate, housing stock, RWAs, etc.) */
  localContext: string;
  /** Landmarks / societies / commercial hubs actually near this locality, used for internal E-E-A-T signal and copy variety */
  landmarks: string[];
  /** Neighbouring localities also served, used for internal linking */
  nearbyAreas: { name: string; slug: string }[];
  stats?: {
    projectsCompleted: number;
    wallsBeautified: number;
    yearsActive: number;
    clientReturnRate: number; // percentage
  };
  popularServices: ServiceSlug[];
  /** One real-feeling project reference for this locality */
  featuredProject?: {
    title: string;
    category: "Residential" | "Commercial" | "Interior Design" | "Outdoor" | "Portfolio";
    description: string;
    image: string;
  };
  testimonial?: Testimonial;
  faqs: Faq[];
  /** lat/lng used for LocalBusiness JSON-LD + optional map embed */
  coordinates: { lat: number; lng: number };
  heroImage: string;
}

export const SERVICE_LABELS: Record<ServiceSlug, string> = {
  "natural-vertical-garden": "Natural Vertical Garden",
  "artificial-vertical-garden": "Artificial Vertical Garden",
  "moss-wall": "Moss Wall",
  "balcony-garden": "Balcony Garden",
  "landscape-consultation": "Landscape Consultation",
};

const sharedFaqs: Faq[] = [
  {
    question: "Do you offer a free site visit before quoting?",
    answer:
      "Yes. Our design team visits your space, checks sunlight, humidity and wall condition, and shares a fixed quote — no obligation to proceed.",
  },
  {
    question: "Will a vertical garden or moss wall damage my wall?",
    answer:
      "No. We install on a frame-and-liner system with a drip-irrigation layer, so the wall itself is never drilled beyond standard anchor points and stays fully waterproofed.",
  },
];

// -----------------------------------------------------------------------------
// commonFaqs — 6 service-level questions (cost, timeline, natural vs artificial,
// maintenance, moss-wall lifespan, warranty) personalised with the city name,
// plus one climate question for Uttar Pradesh conditions. Combined with `sharedFaqs` and any locality-specific
// FAQ already on an entry, this brings every location page to 6-8+ FAQs
// without duplicating the exact same generic copy verbatim across regions.
// -----------------------------------------------------------------------------
function commonFaqs(cityName: string): Faq[] {
  const climateFaq: Faq = {
    question: `Do plants survive Uttar Pradesh's summers and winters in ${cityName}?`,
    answer: `We select species for ${cityName} that tolerate both peak summer heat and winter cold snaps, and every natural install comes with a seasonal check-up recommendation so plants are adjusted or swapped before extreme weather sets in. For very hot, dusty or low-maintenance sites we often suggest artificial or preserved moss walls instead.`,
  };

  return [
    {
      question: `How much does a vertical garden cost in ${cityName}?`,
      answer: `Cost depends on wall size, whether you choose natural or artificial planting, plant density and irrigation needs. We share an exact, itemised quote after a free site visit in ${cityName} rather than a blind per-square-foot number.`,
    },
    {
      question: `How long does installation take in ${cityName}?`,
      answer: `Most balcony-sized installs in ${cityName} are completed in a single day. Larger walls, lobby installations or combined natural-plus-hardscape projects typically take 2–4 days depending on scope.`,
    },
    {
      question: "What's the difference between a natural and an artificial vertical garden?",
      answer:
        "A natural vertical garden uses live plants on an irrigated frame and needs periodic upkeep, but actively improves air quality. An artificial version uses UV-stable synthetic foliage that needs no watering, feeding or pruning. We help you choose based on sunlight, budget and how hands-on you want the upkeep to be.",
    },
    {
      question: `Do you offer ongoing maintenance after installation in ${cityName}?`,
      answer: `Yes — we offer optional monthly and quarterly maintenance visits for natural installs in ${cityName}, covering pruning, feeding, pest checks and irrigation servicing, plus periodic cleaning for artificial walls and moss frames.`,
    },
    {
      question: "How long do preserved moss walls last?",
      answer:
        "A properly installed preserved moss wall typically lasts 3–5 years indoors, away from direct sunlight and standing moisture, without any watering or trimming. Direct sun or high humidity can shorten this, which is why we always check site conditions first.",
    },
    {
      question: "Is there a warranty on the installation?",
      answer:
        "Yes. The structural frame, irrigation components (for natural walls) and artificial foliage all carry a standard warranty against manufacturing defects, with exact terms confirmed in your written quote.",
    },
    climateFaq,
  ];
}

export const locations: LocationData[] = [
  {
    slug: "noida-extension",
    name: "Noida Extension",
    region: "Noida & Ghaziabad",
    parentCitySlug: "greater-noida",
    tagline: "Affordable green makeovers for Noida Extension's new-build towers",
    metaTitle: "Vertical Garden & Balcony Garden in Noida Extension | Satriva",
    metaDescription:
      "Vertical gardens, moss walls and balcony landscaping for Noida Extension (Greater Noida West) apartments. Zero-maintenance options available, free quote.",
    keywords: ["vertical garden noida extension", "balcony garden greater noida west"],
    intro:
      "Noida Extension's newer possession towers mean our clients here are usually decorating a balcony for the first time, so we spend as much time on plant education as installation — what survives Uttar Pradesh winters versus what needs to be swapped seasonally.",
    localContext:
      "Because many towers here are still building out their green cover, a vertical garden or moss wall reads as a real point of difference on resale and rental listings, and several of our clients have specifically asked for install photos to use in their listing.",
    landmarks: ["Gaur City Mall", "Noida Extension Sector 1", "Grand Omaxe", "Pari Chowk"],
    nearbyAreas: [
      { name: "Greater Noida", slug: "greater-noida" },
      { name: "Indirapuram", slug: "indirapuram" },
    ],
    stats: { projectsCompleted: 19, wallsBeautified: 24, yearsActive: 2, clientReturnRate: 85 },
    popularServices: ["balcony-garden", "artificial-vertical-garden"],
    featuredProject: {
      title: "Gaur City Balcony Refresh",
      category: "Residential",
      description:
        "A compact artificial vertical garden with integrated planter boxes for a first-time balcony makeover in a Noida Extension tower.",
      image: "/images/projects/noida-extension-balcony.webp",
    },
    testimonial: {
      name: "Kunal Saxena",
      role: "Homeowner, Noida Extension",
      quote:
        "First time doing anything with our balcony and they walked us through what would actually survive winter here instead of just upselling.",
      rating: 5,
    },
    faqs: [
      ...sharedFaqs,
      {
        question: "Will a vertical garden help our flat's resale or rental listing photos?",
        answer:
          "Several Noida Extension clients have installed specifically for this reason — a green balcony wall photographs well and reads as a point of difference in a corridor of similar-looking new towers.",
      },
      ...commonFaqs("Noida Extension"),
    ],
    coordinates: { lat: 28.5921, lng: 77.4432 },
    heroImage: "/images/hero/noida-extension.webp",
  },
  {
    slug: "indirapuram",
    name: "Indirapuram",
    region: "Noida & Ghaziabad",
    parentCitySlug: "ghaziabad",
    tagline: "Green walls for Indirapuram's family-first apartment blocks",
    metaTitle: "Vertical Garden Installation in Indirapuram, Ghaziabad | Satriva",
    metaDescription:
      "Natural & artificial vertical gardens, moss walls and balcony gardens for Indirapuram, Vaishali and Vasundhara. Free site visit from Satriva.",
    keywords: [
      "vertical garden indirapuram",
      "balcony garden ghaziabad",
      "green wall vaishali vasundhara",
    ],
    intro:
      "Indirapuram's mix of established societies and family homes means our briefs here often come with a specific ask: a low-pollen, child- and pet-safe plant list, since balconies double as play space for many of our clients.",
    localContext:
      "We keep a shortlist of non-toxic, low-shed species specifically for Indirapuram and neighbouring Vaishali requests, and pair it with drip irrigation on a timer so the garden survives when families travel during school holidays.",
    landmarks: ["Shipra Mall", "Indirapuram Habitat Centre", "Vaishali Metro", "Nirulas Chowk"],
    nearbyAreas: [
      { name: "Ghaziabad", slug: "ghaziabad" },
      { name: "Noida Extension", slug: "noida-extension" },
    ],
    stats: { projectsCompleted: 24, wallsBeautified: 33, yearsActive: 3, clientReturnRate: 90 },
    popularServices: ["balcony-garden", "natural-vertical-garden", "moss-wall"],
    featuredProject: {
      title: "Family Balcony Garden, Shipra Suncity",
      category: "Residential",
      description:
        "A pet- and child-safe natural vertical garden with an automated drip line, built for a family that travels frequently during school breaks.",
      image: "/images/projects/indirapuram-balcony.webp",
    },
    testimonial: {
      name: "Meenal Rastogi",
      role: "Homeowner, Indirapuram",
      quote:
        "We have a toddler and a dog, so plant safety mattered more to us than looks. They actually asked about that upfront before recommending anything.",
      rating: 5,
    },
    faqs: [
      ...sharedFaqs,
      {
        question: "Can you recommend plants that are safe for children and pets?",
        answer:
          "Yes — we keep a shortlist of non-toxic, low-shed species specifically for family homes in Indirapuram, and always flag this preference during the site visit so it shapes the plant selection from the start.",
      },
      ...commonFaqs("Indirapuram"),
    ],
    coordinates: { lat: 28.6461, lng: 77.3733 },
    heroImage: "/images/hero/indirapuram.webp",
  },
  {
    slug: "noida",
    name: "Noida",
    region: "Noida & Ghaziabad",
    tagline: "Vertical gardens for Noida's sectors, from 15 to 150",
    metaTitle: "Vertical Garden & Moss Wall Installation in Noida | Satriva",
    metaDescription:
      "Natural & artificial vertical gardens, moss walls and balcony gardens across Noida — sectors 15 to 150. Free site visit and design consultation.",
    keywords: ["vertical garden noida", "moss wall noida", "balcony garden noida sectors"],
    intro:
      "Noida's sector-numbered layout spans everything from older Sector 15–29 independent homes to newer high-rises past Sector 100, and we've installed in both — the brief changes noticeably by sector age and building type.",
    localContext:
      "Older, lower-rise sectors tend to have more terrace space and go for larger natural installations, while newer high-rise clusters near the Noida Expressway request compact balcony or artificial wall formats suited to smaller footprints.",
    landmarks: [
      "Noida Sector 18 Market",
      "Noida Expressway",
      "Botanical Garden Metro",
      "Amity University",
    ],
    nearbyAreas: [
      { name: "Noida Extension", slug: "noida-extension" },
      { name: "Indirapuram", slug: "indirapuram" },
    ],
    stats: { projectsCompleted: 45, wallsBeautified: 61, yearsActive: 3, clientReturnRate: 88 },
    popularServices: ["natural-vertical-garden", "artificial-vertical-garden", "balcony-garden"],
    featuredProject: {
      title: "Sector 18 Rooftop Green Space",
      category: "Outdoor",
      description:
        "A rooftop natural vertical garden and planter layout for an independent house near Sector 18.",
      image: "/images/projects/noida-rooftop.webp",
    },
    testimonial: {
      name: "Devansh Tyagi",
      role: "Homeowner, Sector 22, Noida",
      quote:
        "Clean installation, and they came back for a free check-up a month later without us even asking. That follow-up made the difference.",
      rating: 5,
    },
    faqs: [...sharedFaqs, ...commonFaqs("Noida")],
    coordinates: { lat: 28.5355, lng: 77.391 },
    heroImage: "/images/hero/noida.webp",
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    region: "Noida & Ghaziabad",
    tagline: "Green walls across Ghaziabad's residential belt",
    metaTitle: "Vertical Garden & Balcony Garden Installation in Ghaziabad | Satriva",
    metaDescription:
      "Satriva installs natural & artificial vertical gardens, moss walls and balcony gardens across Ghaziabad including Indirapuram, Vaishali and Raj Nagar.",
    keywords: [
      "vertical garden ghaziabad",
      "balcony garden ghaziabad",
      "green wall raj nagar extension",
    ],
    intro:
      "Ghaziabad covers some of our most varied installs by budget and format — from single-balcony jobs in Raj Nagar Extension apartments to full clubhouse walls in Indirapuram's larger societies.",
    localContext:
      "Because Ghaziabad spans both established and newly-developing pockets, we quote two very different price bands depending on locality, and always confirm exact society/tower access norms during the free site visit before finalising a design.",
    landmarks: ["Raj Nagar Extension", "Indirapuram", "Vaishali", "Kaushambi"],
    nearbyAreas: [
      { name: "Indirapuram", slug: "indirapuram" },
      { name: "Noida Extension", slug: "noida-extension" },
    ],
    stats: { projectsCompleted: 21, wallsBeautified: 27, yearsActive: 2, clientReturnRate: 86 },
    popularServices: ["balcony-garden", "artificial-vertical-garden"],
    featuredProject: {
      title: "Raj Nagar Extension Balcony Garden",
      category: "Residential",
      description:
        "A budget-conscious artificial balcony garden with modular panels, installed in under a day for a Raj Nagar Extension apartment.",
      image: "/images/projects/ghaziabad-balcony.webp",
    },
    testimonial: {
      name: "Anjali Sharma",
      role: "Homeowner, Raj Nagar Extension",
      quote:
        "Quick, tidy, and exactly what was quoted at the site visit — no surprise add-ons on the final bill.",
      rating: 4,
    },
    faqs: [
      ...sharedFaqs,
      {
        question: "Do prices differ across Ghaziabad's localities?",
        answer:
          "Yes, slightly — access norms and typical wall sizes vary between established colonies and newer towers, so we confirm exact society/tower details on the free site visit before finalising your quote.",
      },
      ...commonFaqs("Ghaziabad"),
    ],
    coordinates: { lat: 28.6692, lng: 77.4538 },
    heroImage: "/images/hero/ghaziabad.webp",
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    region: "Noida & Ghaziabad",
    tagline: "Large-format green walls for Greater Noida's wide plots",
    metaTitle: "Vertical Garden Installation in Greater Noida | Satriva",
    metaDescription:
      "Natural & artificial vertical gardens, moss walls and balcony gardens for Greater Noida homes, villas and offices. Free site visit from Satriva.",
    keywords: [
      "vertical garden greater noida",
      "villa green wall greater noida",
      "balcony garden greater noida",
    ],
    intro:
      "Greater Noida's villa plots and wider society layouts mean our average install size here is larger than almost anywhere else we serve — boundary walls and multi-storey stairwell walls come up more often than single balconies.",
    localContext:
      "With more open land per plot, several Greater Noida clients have asked us to combine a vertical garden with ground-level landscaping in the same visit, which we scope as a combined natural-plus-hardscape project.",
    landmarks: [
      "Pari Chowk",
      "Gautam Buddha University",
      "Knowledge Park",
      "Yamuna Expressway entry",
    ],
    nearbyAreas: [
      { name: "Noida Extension", slug: "noida-extension" },
      { name: "Noida", slug: "noida" },
    ],
    stats: { projectsCompleted: 16, wallsBeautified: 21, yearsActive: 2, clientReturnRate: 83 },
    popularServices: ["natural-vertical-garden", "artificial-vertical-garden"],
    featuredProject: {
      title: "Pari Chowk Villa Stairwell Wall",
      category: "Residential",
      description:
        "A three-storey internal stairwell vertical garden for a villa near Pari Chowk, lit with skylight-supplemented grow lighting.",
      image: "/images/projects/greater-noida-villa.webp",
    },
    testimonial: {
      name: "Saurabh Mittal",
      role: "Villa Owner, Greater Noida",
      quote:
        "The stairwell used to be the darkest, most ignored part of the house. It's now the first thing guests comment on.",
      rating: 5,
    },
    faqs: [
      ...sharedFaqs,
      {
        question:
          "Can you combine a vertical garden with ground-level landscaping on a villa plot?",
        answer:
          "Yes — several Greater Noida clients scope this as a single combined project, and we're happy to quote a vertical garden alongside planters, borders or hardscape work in the same site visit.",
      },
      ...commonFaqs("Greater Noida"),
    ],
    coordinates: { lat: 28.4744, lng: 77.504 },
    heroImage: "/images/hero/greater-noida.webp",
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    region: "Lucknow & Awadh",
    tagline: "Vertical gardens, moss walls and balcony gardens in Lucknow",
    metaTitle: "Vertical Garden in Lucknow | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Lucknow. Free site visit and fixed quote.",
    keywords: ["vertical garden lucknow", "green wall lucknow", "balcony garden lucknow"],
    intro: "Lucknow's mix of Gomti Nagar apartments, old Nawabi-era bungalows and fast-growing office parks gives green walls plenty of places to work, from a compact balcony to a full courtyard facade.",
    localContext: "Summers here are hot and dry, winters are cool and foggy, and the monsoon brings humidity, so we match each wall to its light and exposure. Free site visits, a fixed quote and a clear plan come before any work starts.",
    landmarks: ["Gomti Nagar", "Hazratganj", "Aliganj", "Sushant Golf City", "Indira Nagar"],
    nearbyAreas: [
      { name: "Gomti Nagar", slug: "gomti-nagar" },
      { name: "Indira Nagar", slug: "indira-nagar" },
      { name: "Hazratganj", slug: "hazratganj" },
      { name: "Aliganj", slug: "aliganj" },
    ],
    popularServices: ["natural-vertical-garden", "artificial-vertical-garden", "balcony-garden"],
    faqs: [
      ...sharedFaqs,
      {
        question: "Do you offer site visits across Lucknow?",
        answer: "Yes. We offer a free site visit across Lucknow, including Gomti Nagar, Indira Nagar, Aliganj and Hazratganj. We check sunlight, water access and wall condition, then share a fixed quote.",
      },
      ...commonFaqs("Lucknow"),
    ],
    coordinates: { lat: 26.8467, lng: 80.9462 },
    heroImage: "/images/satriva-hero/hero-9.webp",
  },
  {
    slug: "gomti-nagar",
    name: "Gomti Nagar",
    region: "Lucknow & Awadh",
    parentCitySlug: "lucknow",
    tagline: "Green walls for Gomti Nagar homes, offices and cafes",
    metaTitle: "Vertical Garden in Gomti Nagar | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Gomti Nagar. Free site visit and fixed quote.",
    keywords: ["vertical garden gomti nagar", "green wall gomti nagar", "balcony garden gomti nagar"],
    intro: "Gomti Nagar is Lucknow's busiest residential and commercial belt, with apartment towers, independent houses, clinics, cafes and offices that all benefit from a green feature wall.",
    localContext: "Balconies and terraces here often face strong afternoon sun, so we choose plants or artificial foliage to suit the direction of your wall. Commercial fronts and lobbies often work well with preserved moss or UV-protected artificial panels.",
    landmarks: ["Patrakarpuram", "Vibhuti Khand", "Vipul Khand", "Gomti Nagar Extension", "Phoenix Palassio area"],
    nearbyAreas: [
      { name: "Lucknow", slug: "lucknow" },
      { name: "Indira Nagar", slug: "indira-nagar" },
      { name: "Aliganj", slug: "aliganj" },
    ],
    popularServices: ["balcony-garden", "artificial-vertical-garden", "moss-wall"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Gomti Nagar"),
    ],
    coordinates: { lat: 26.854, lng: 81.003 },
    heroImage: "/images/satriva-hero/hero-14.webp",
  },
  {
    slug: "indira-nagar",
    name: "Indira Nagar",
    region: "Lucknow & Awadh",
    parentCitySlug: "lucknow",
    tagline: "Balcony gardens and green walls in Indira Nagar, Lucknow",
    metaTitle: "Vertical Garden in Indira Nagar | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Indira Nagar. Free site visit and fixed quote.",
    keywords: ["vertical garden indira nagar", "green wall indira nagar", "balcony garden indira nagar"],
    intro: "Indira Nagar's established housing blocks and apartments suit balcony gardens, railing planters and compact vertical gardens that make small outdoor spaces feel green and private.",
    localContext: "Many homes here have narrow balconies, so we focus on lightweight, space-saving systems with easy drainage. We plan irrigation, lighting and plant choices around how much sun your balcony actually gets.",
    landmarks: ["Sector 14 market", "Munshi Pulia", "Faizabad Road", "Kalyanpur"],
    nearbyAreas: [
      { name: "Lucknow", slug: "lucknow" },
      { name: "Gomti Nagar", slug: "gomti-nagar" },
      { name: "Aliganj", slug: "aliganj" },
    ],
    popularServices: ["balcony-garden", "natural-vertical-garden", "artificial-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Indira Nagar"),
    ],
    coordinates: { lat: 26.883, lng: 80.999 },
    heroImage: "/images/satriva-hero/hero-16.webp",
  },
  {
    slug: "kanpur",
    name: "Kanpur",
    region: "Kanpur & Bundelkhand",
    tagline: "Vertical gardens and moss walls for Kanpur homes and businesses",
    metaTitle: "Vertical Garden in Kanpur | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Kanpur. Free site visit and fixed quote.",
    keywords: ["vertical garden kanpur", "green wall kanpur", "balcony garden kanpur"],
    intro: "Kanpur's Civil Lines bungalows, Swaroop Nagar apartments and busy commercial streets all have bare walls that a vertical garden or moss wall can turn into a feature.",
    localContext: "Kanpur sees very hot summers, dust and winter fog, so we often recommend easy-care artificial or preserved moss walls for exposed sites, and natural walls where there is shade and a water point.",
    landmarks: ["Civil Lines", "Swaroop Nagar", "Kakadeo", "Kidwai Nagar", "Arya Nagar"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-kanpur" },
      { name: "Swaroop Nagar", slug: "swaroop-nagar" },
      { name: "Kakadeo", slug: "kakadeo" },
    ],
    popularServices: ["artificial-vertical-garden", "moss-wall", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Kanpur"),
    ],
    coordinates: { lat: 26.4499, lng: 80.3319 },
    heroImage: "/images/satriva-hero/hero-7.webp",
  },
  {
    slug: "agra",
    name: "Agra",
    region: "Braj & Western UP",
    tagline: "Green walls for Agra hotels, restaurants and homes",
    metaTitle: "Vertical Garden in Agra | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Agra. Free site visit and fixed quote.",
    keywords: ["vertical garden agra", "green wall agra", "balcony garden agra"],
    intro: "Agra's hotels, restaurants and cafes near Fatehabad Road and Sanjay Place compete on atmosphere, and a green wall or moss wall is an easy way to make a lobby, courtyard or dining area memorable.",
    localContext: "Heat and dust are the main challenges, so UV-protected artificial walls and preserved moss are popular for commercial spaces, while homes in Kamla Nagar and Dayalbagh often choose natural walls with drip irrigation.",
    landmarks: ["Fatehabad Road", "Sanjay Place", "Kamla Nagar", "Sikandra", "Dayalbagh"],
    nearbyAreas: [
      { name: "Fatehabad Road", slug: "fatehabad-road" },
      { name: "Sanjay Place", slug: "sanjay-place" },
      { name: "Kamla Nagar", slug: "kamla-nagar" },
    ],
    popularServices: ["artificial-vertical-garden", "moss-wall", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Agra"),
    ],
    coordinates: { lat: 27.1767, lng: 78.0081 },
    heroImage: "/images/satriva-hero/hero-11.webp",
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    region: "Purvanchal",
    tagline: "Vertical gardens and courtyard greenery in Varanasi",
    metaTitle: "Vertical Garden in Varanasi | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Varanasi. Free site visit and fixed quote.",
    keywords: ["vertical garden varanasi", "green wall varanasi", "balcony garden varanasi"],
    intro: "Varanasi's guest houses, heritage-style homes and cafes near Lanka, Sigra and the Cantonment often have courtyards and walls that suit living greenery or preserved moss art.",
    localContext: "Humid monsoons and hot summers affect plant choice, so we pick species that cope with both, and use artificial or moss options for dark or very exposed walls. We keep designs light so they suit older buildings.",
    landmarks: ["Sigra", "Lanka", "Bhelupur", "Cantonment", "Mahmoorganj"],
    nearbyAreas: [
      { name: "Sigra", slug: "sigra" },
      { name: "Lanka", slug: "lanka" },
      { name: "Bhelupur", slug: "bhelupur" },
    ],
    popularServices: ["natural-vertical-garden", "artificial-vertical-garden", "moss-wall"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Varanasi"),
    ],
    coordinates: { lat: 25.3176, lng: 82.9739 },
    heroImage: "/images/satriva-hero/hero-19.webp",
  },
  {
    slug: "prayagraj",
    name: "Prayagraj",
    region: "Purvanchal",
    tagline: "Green walls and balcony gardens in Prayagraj",
    metaTitle: "Vertical Garden in Prayagraj | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Prayagraj. Free site visit and fixed quote.",
    keywords: ["vertical garden prayagraj", "green wall prayagraj", "balcony garden prayagraj"],
    intro: "Prayagraj's wide Civil Lines streets, Allahpur homes and growing apartment projects leave plenty of balconies, boundary walls and entrances that look better with greenery.",
    localContext: "Summers are hot and winters can be cold and foggy, so we plan plants and irrigation for both extremes, and offer artificial or moss options where you want almost no upkeep.",
    landmarks: ["Civil Lines", "Allahpur", "George Town", "Teliarganj", "Naini"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-prayagraj" },
      { name: "Allahpur", slug: "allahpur" },
      { name: "George Town", slug: "george-town" },
    ],
    popularServices: ["balcony-garden", "natural-vertical-garden", "artificial-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Prayagraj"),
    ],
    coordinates: { lat: 25.4358, lng: 81.8463 },
    heroImage: "/images/satriva-hero/hero-3.webp",
  },
  {
    slug: "meerut",
    name: "Meerut",
    region: "Braj & Western UP",
    tagline: "Vertical gardens and landscaping for Meerut homes and offices",
    metaTitle: "Vertical Garden in Meerut | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Meerut. Free site visit and fixed quote.",
    keywords: ["vertical garden meerut", "green wall meerut", "balcony garden meerut"],
    intro: "Meerut's Shastri Nagar and Pallavpuram colonies, Garh Road showrooms and newer townships have balconies, lawns and entrance walls that suit green installations.",
    localContext: "Being close to the NCR, Meerut shares its hot summers and cold, foggy winters, so we select hardy plants and offer artificial and preserved moss walls for easy care.",
    landmarks: ["Shastri Nagar", "Pallavpuram", "Garh Road", "Modipuram", "Abu Lane"],
    nearbyAreas: [
      { name: "Shastri Nagar", slug: "shastri-nagar" },
      { name: "Pallavpuram", slug: "pallavpuram" },
      { name: "Garh Road", slug: "garh-road" },
    ],
    popularServices: ["artificial-vertical-garden", "balcony-garden", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Meerut"),
    ],
    coordinates: { lat: 28.9845, lng: 77.7064 },
    heroImage: "/images/satriva-hero/hero-4.webp",
  },
  {
    slug: "gorakhpur",
    name: "Gorakhpur",
    region: "Purvanchal",
    tagline: "Balcony gardens and green walls in Gorakhpur",
    metaTitle: "Vertical Garden in Gorakhpur | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Gorakhpur. Free site visit and fixed quote.",
    keywords: ["vertical garden gorakhpur", "green wall gorakhpur", "balcony garden gorakhpur"],
    intro: "Gorakhpur's growing apartment blocks, clinics and showrooms around Medical College Road, Golghar and Civil Lines are good fits for balcony gardens and feature green walls.",
    localContext: "High humidity in the monsoon and hot summers mean plant choice and drainage matter, so we plan waterproofing and irrigation carefully and suggest artificial walls where you want less care.",
    landmarks: ["Civil Lines", "Medical College Road", "Golghar", "Rapti Nagar", "Taramandal"],
    nearbyAreas: [
      { name: "Golghar", slug: "golghar" },
      { name: "Civil Lines", slug: "civil-lines-gorakhpur" },
      { name: "Rapti Nagar", slug: "rapti-nagar" },
    ],
    popularServices: ["balcony-garden", "natural-vertical-garden", "artificial-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Gorakhpur"),
    ],
    coordinates: { lat: 26.7606, lng: 83.3732 },
    heroImage: "/images/satriva-hero/hero-8.webp",
  },
  {
    slug: "bareilly",
    name: "Bareilly",
    region: "Braj & Western UP",
    tagline: "Vertical gardens and moss walls in Bareilly",
    metaTitle: "Vertical Garden in Bareilly | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Bareilly. Free site visit and fixed quote.",
    keywords: ["vertical garden bareilly", "green wall bareilly", "balcony garden bareilly"],
    intro: "Bareilly's Civil Lines, Rampur Garden and Pilibhit Bypass areas have homes, clinics and showrooms where a vertical garden or moss wall can add a fresh look.",
    localContext: "We design for Bareilly's hot summers and foggy winters, picking plants that cope with both and offering easy-care artificial or moss options.",
    landmarks: ["Civil Lines", "Rampur Garden", "Pilibhit Bypass", "Izzatnagar", "Subhash Nagar"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-bareilly" },
      { name: "Rampur Garden", slug: "rampur-garden" },
      { name: "Izzatnagar", slug: "izzatnagar" },
    ],
    popularServices: ["artificial-vertical-garden", "moss-wall", "balcony-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Bareilly"),
    ],
    coordinates: { lat: 28.367, lng: 79.4304 },
    heroImage: "/images/satriva-hero/hero-13.webp",
  },
  {
    slug: "aligarh",
    name: "Aligarh",
    region: "Braj & Western UP",
    tagline: "Green walls and balcony gardens in Aligarh",
    metaTitle: "Vertical Garden in Aligarh | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Aligarh. Free site visit and fixed quote.",
    keywords: ["vertical garden aligarh", "green wall aligarh", "balcony garden aligarh"],
    intro: "Aligarh's Civil Lines, Ramghat Road and Medical Road areas include villas, apartments, clinics and institutions that can all use a green feature wall or planted balcony.",
    localContext: "Hot, dry summers shape our choices here: drip irrigation for natural walls, and UV-protected artificial or preserved moss for places with little care time.",
    landmarks: ["Civil Lines", "Ramghat Road", "Medical Road", "Sasni Gate", "Marris Road"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-aligarh" },
      { name: "Ramghat Road", slug: "ramghat-road" },
      { name: "Medical Road", slug: "medical-road" },
    ],
    popularServices: ["artificial-vertical-garden", "balcony-garden", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Aligarh"),
    ],
    coordinates: { lat: 27.8974, lng: 78.088 },
    heroImage: "/images/satriva-hero/hero-15.webp",
  },
  {
    slug: "moradabad",
    name: "Moradabad",
    region: "Braj & Western UP",
    tagline: "Vertical gardens for Moradabad homes and showrooms",
    metaTitle: "Vertical Garden in Moradabad | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Moradabad. Free site visit and fixed quote.",
    keywords: ["vertical garden moradabad", "green wall moradabad", "balcony garden moradabad"],
    intro: "Moradabad's Civil Lines homes, Ramganga Vihar apartments and export showrooms along Delhi Road are good places for a green wall that makes a strong first impression.",
    localContext: "We plan for hot summers and winter fog, using weather-resistant artificial foliage and preserved moss for busy commercial spaces and natural walls for homes with a water point.",
    landmarks: ["Civil Lines", "Ramganga Vihar", "Kanth Road", "Delhi Road", "Lajpat Nagar"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-moradabad" },
      { name: "Ramganga Vihar", slug: "ramganga-vihar" },
      { name: "Kanth Road", slug: "kanth-road" },
    ],
    popularServices: ["artificial-vertical-garden", "moss-wall", "balcony-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Moradabad"),
    ],
    coordinates: { lat: 28.8386, lng: 78.7733 },
    heroImage: "/images/satriva-hero/hero-17.webp",
  },
  {
    slug: "saharanpur",
    name: "Saharanpur",
    region: "Braj & Western UP",
    tagline: "Green walls and landscaping in Saharanpur",
    metaTitle: "Vertical Garden in Saharanpur | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Saharanpur. Free site visit and fixed quote.",
    keywords: ["vertical garden saharanpur", "green wall saharanpur", "balcony garden saharanpur"],
    intro: "Saharanpur's Civil Lines, Court Road and Delhi Road areas have homes and shops with plenty of bare walls and balconies that suit planted installations.",
    localContext: "Cool winters and hot summers call for hardy species and good drainage, and we offer artificial and preserved moss walls where you would rather skip regular watering.",
    landmarks: ["Civil Lines", "Court Road", "Delhi Road", "Ambala Road", "Behat Road"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-saharanpur" },
      { name: "Court Road", slug: "court-road" },
      { name: "Delhi Road", slug: "delhi-road-saharanpur" },
    ],
    popularServices: ["balcony-garden", "artificial-vertical-garden", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Saharanpur"),
    ],
    coordinates: { lat: 29.968, lng: 77.551 },
    heroImage: "/images/satriva-hero/hero-21.webp",
  },
  {
    slug: "jhansi",
    name: "Jhansi",
    region: "Kanpur & Bundelkhand",
    tagline: "Heat-ready vertical gardens and moss walls in Jhansi",
    metaTitle: "Vertical Garden in Jhansi | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Jhansi. Free site visit and fixed quote.",
    keywords: ["vertical garden jhansi", "green wall jhansi", "balcony garden jhansi"],
    intro: "Jhansi's Civil Lines, Sipri Bazar and Gwalior Road areas have homes, clinics and shops where a green wall can add colour in a very sunny, dry city.",
    localContext: "Bundelkhand summers are among the hottest in Uttar Pradesh, so we lean towards UV-protected artificial walls and preserved moss for exposed sites, and drip-irrigated natural walls in shaded or indoor spots.",
    landmarks: ["Civil Lines", "Sipri Bazar", "Elite Chauraha", "Gwalior Road", "Jhansi Fort area"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-jhansi" },
      { name: "Sipri Bazar", slug: "sipri-bazar" },
      { name: "Gwalior Road", slug: "gwalior-road" },
    ],
    popularServices: ["artificial-vertical-garden", "moss-wall", "balcony-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Jhansi"),
    ],
    coordinates: { lat: 25.4484, lng: 78.5685 },
    heroImage: "/images/satriva-hero/hero-5.webp",
  },
  {
    slug: "mathura",
    name: "Mathura",
    region: "Braj & Western UP",
    tagline: "Vertical gardens for Mathura and Vrindavan homes and guest houses",
    metaTitle: "Vertical Garden in Mathura | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Mathura. Free site visit and fixed quote.",
    keywords: ["vertical garden mathura", "green wall mathura", "balcony garden mathura"],
    intro: "Mathura and nearby Vrindavan have many guest houses, ashram-style courtyards and new apartments where green walls and moss art bring calm and colour.",
    localContext: "Heat and dust are the main factors, so we suggest UV-protected artificial walls and preserved moss for exposed or busy sites, and natural walls where there is shade and water.",
    landmarks: ["Krishna Nagar", "Vrindavan", "Civil Lines", "Govardhan Road", "Chhatikara Road"],
    nearbyAreas: [
      { name: "Vrindavan", slug: "vrindavan" },
      { name: "Krishna Nagar", slug: "krishna-nagar" },
      { name: "Govardhan Road", slug: "govardhan-road" },
    ],
    popularServices: ["artificial-vertical-garden", "moss-wall", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Mathura"),
    ],
    coordinates: { lat: 27.4924, lng: 77.6737 },
    heroImage: "/images/satriva-hero/hero-12.webp",
  },
  {
    slug: "ayodhya",
    name: "Ayodhya",
    region: "Lucknow & Awadh",
    tagline: "Green walls for Ayodhya hotels, guest houses and homes",
    metaTitle: "Vertical Garden in Ayodhya | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Ayodhya. Free site visit and fixed quote.",
    keywords: ["vertical garden ayodhya", "green wall ayodhya", "balcony garden ayodhya"],
    intro: "With new hotels, guest houses and homes coming up around Ram Path and Naya Ghat, Ayodhya has more spaces than ever that can use a green wall, courtyard garden or moss wall.",
    localContext: "We design around Ayodhya's hot summers and humid monsoon, using low-upkeep artificial and preserved moss walls for busy hospitality spaces and drip-irrigated natural walls for homes.",
    landmarks: ["Ram Path", "Naya Ghat", "Civil Lines", "Devkali Bypass"],
    nearbyAreas: [
      { name: "Ram Path", slug: "ram-path" },
      { name: "Naya Ghat", slug: "naya-ghat" },
      { name: "Devkali Bypass", slug: "devkali-bypass" },
    ],
    popularServices: ["artificial-vertical-garden", "moss-wall", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Ayodhya"),
    ],
    coordinates: { lat: 26.7922, lng: 82.1998 },
    heroImage: "/images/satriva-hero/hero-20.webp",
  },
  {
    slug: "firozabad",
    name: "Firozabad",
    region: "Braj & Western UP",
    tagline: "Vertical gardens and balcony gardens in Firozabad",
    metaTitle: "Vertical Garden in Firozabad | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Firozabad. Free site visit and fixed quote.",
    keywords: ["vertical garden firozabad", "green wall firozabad", "balcony garden firozabad"],
    intro: "Firozabad's Civil Lines homes, Tundla Road showrooms and new apartments can all use green walls and balcony gardens to soften concrete and brighten entrances.",
    localContext: "Hot summers and dust call for easy-care solutions, so artificial walls and preserved moss are popular here, with natural walls for shaded and irrigated spots.",
    landmarks: ["Civil Lines", "Tundla Road", "Station Road", "Shikohabad"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-firozabad" },
      { name: "Tundla Road", slug: "tundla-road" },
      { name: "Shikohabad", slug: "shikohabad" },
    ],
    popularServices: ["artificial-vertical-garden", "balcony-garden", "moss-wall"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Firozabad"),
    ],
    coordinates: { lat: 27.1591, lng: 78.3957 },
    heroImage: "/images/satriva-hero/hero-1.webp",
  },
  {
    slug: "muzaffarnagar",
    name: "Muzaffarnagar",
    region: "Braj & Western UP",
    tagline: "Green walls and landscaping in Muzaffarnagar",
    metaTitle: "Vertical Garden in Muzaffarnagar | Satriva",
    metaDescription: "Satriva designs and installs natural & artificial vertical gardens, moss walls and balcony gardens in Muzaffarnagar. Free site visit and fixed quote.",
    keywords: ["vertical garden muzaffarnagar", "green wall muzaffarnagar", "balcony garden muzaffarnagar"],
    intro: "Muzaffarnagar's Civil Lines, Khalapar and Delhi Road areas have homes, farmhouses and showrooms with space for green walls, lawns and balcony gardens.",
    localContext: "We plan for hot summers and cold winters, with hardy plants and good drainage for natural walls and artificial or preserved moss options where you want less care.",
    landmarks: ["Civil Lines", "Khalapar", "Delhi Road", "Bhopa Road", "Court Road"],
    nearbyAreas: [
      { name: "Civil Lines", slug: "civil-lines-muzaffarnagar" },
      { name: "Khalapar", slug: "khalapar" },
      { name: "Bhopa Road", slug: "bhopa-road" },
    ],
    popularServices: ["balcony-garden", "artificial-vertical-garden", "natural-vertical-garden"],
    faqs: [
      ...sharedFaqs,
      ...commonFaqs("Muzaffarnagar"),
    ],
    coordinates: { lat: 29.4727, lng: 77.7085 },
    heroImage: "/images/satriva-hero/hero-6.webp",
  },
];


export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

export function getLocationsByRegion(region: LocationData["region"]): LocationData[] {
  return locations.filter((l) => l.region === region);
}

// -----------------------------------------------------------------------------
// Footer "Service Locations" list, derived from the same data so adding or
// renaming a city above updates the footer automatically.
// -----------------------------------------------------------------------------
export interface FooterCity {
  name: string;
  slug: string;
}

const FOOTER_CITY_SLUGS = [
  "lucknow",
  "kanpur",
  "noida",
  "ghaziabad",
  "agra",
  "varanasi",
  "prayagraj",
] as const;

export const FOOTER_CITIES: FooterCity[] = FOOTER_CITY_SLUGS.map((slug) => {
  const match = getLocationBySlug(slug);
  return { name: match?.name ?? slug, slug };
});
