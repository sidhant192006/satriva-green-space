/** All service pages and their content, taken from the Satriva website. */
import {
  artificialGallery,
  artificialProducts,
  balconyGallery,
  balconyLighting,
  balconyPlants,
  landscapeHero,
  mossArtificial,
  mossNatural,
  naturalGallery,
  naturalPlants,
  relatedGallery,
  relatedProjects,
} from "./service-media";

export type Faq = { q: string; a: string };
export type Item = { title: string; body: string };
export type Img = { src: string; alt: string; caption?: string };
export type Tier = { name: string; price: string; unit: string; desc: string; features: string[]; badge?: string };

export type Block =
  | { type: "items"; kicker: string; title: string; intro?: string; items: Item[] }
  | { type: "list"; kicker: string; title: string; intro?: string; items: string[] }
  | { type: "steps"; kicker: string; title: string; intro?: string; items: Item[]; note?: string }
  | { type: "tiers"; kicker: string; title: string; intro?: string; items: Tier[]; note?: string }
  | { type: "compare"; kicker: string; title: string; intro?: string; heads: [string, string, string]; rows: [string, string, string][]; note?: string }
  | { type: "pills"; kicker: string; title: string; intro?: string; items: string[] }
  | { type: "gallery"; kicker: string; title: string; intro?: string; images: Img[] }
  | { type: "beforeafter"; kicker: string; title: string; intro?: string; pairs: { title: string; before: string; after: string }[] }
  | { type: "products"; kicker: string; title: string; intro?: string; groups: { name: string; items: { name: string; image: string }[] }[] }
  | { type: "plants"; kicker: string; title: string; intro?: string; groups: { name: string; items: { name: string; image: string }[] }[] };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Short line used in lists. */
  blurb: string;
  /** Starting price shown in lists. */
  priceFrom: string;
  priceNote: string;
  features: string[];
  image: string;
  popular: boolean;
  /** Page title and meta description. */
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  heroKicker: string;
  heroTitle: string;
  heroLede: string;
  overview: string[];
  heroBadges: string[];
  blocks: Block[];
  faqs: Faq[];
  related: string[];
  quoteLabel: string;
};

const img = (src: string, alt: string, caption?: string): Img => ({ src, alt, caption });

const nameCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

const group = <T,>(list: T[], key: (x: T) => string, label: Record<string, string>, map: (x: T) => { name: string; image: string }) => {
  const out: { name: string; items: { name: string; image: string }[] }[] = [];
  for (const k of Object.keys(label)) {
    const items = list.filter((x) => key(x) === k).map(map);
    if (items.length) out.push({ name: label[k], items });
  }
  return out;
};

export const services: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "natural-vertical-garden",
    title: "Natural Vertical Garden",
    shortTitle: "Natural",
    blurb:
      "Custom-designed living walls that transform bare spaces into lush green sanctuaries. From concept to completion.",
    priceFrom: "₹150 per sq ft",
    priceNote: "Package range ₹499–₹1,999 per sq ft depending on plants, irrigation and structure.",
    features: ["Free site visit", "Custom design", "Drip irrigation", "1-year warranty"],
    image: "/images/services/natural-vertical-garden-living-wall.webp",
    popular: true,
    seoTitle: "Premium Natural Vertical Gardens in India | Green Walls",
    seoDescription:
      "Transform your space with premium natural vertical gardens & living green walls in India. Automated drip irrigation & zero-seepage guarantee.",
    keywords: [
      "natural vertical garden in India",
      "living green walls",
      "automated drip irrigation",
      "real plant wall",
      "vertical landscaping",
      "bio wall installation",
      "green wall India",
      "vertical garden cost India",
    ],
    heroKicker: "Natural vertical garden",
    heroTitle: "Premium natural vertical gardens in <em>India.</em>",
    heroLede:
      "Transform your empty walls into stunning living green walls with automated drip irrigation and a zero wall-damage guarantee.",
    overview: [
      "Our vertical garden installations are tailored to your space, climate, and aesthetic. We handle everything from initial design, structural assessment, irrigation setup, to plant selection and aftercare.",
      "A real plant wall offers proven health, aesthetic, and environmental benefits for your home or office. A smart system keeps it healthy and thriving year-round: low maintenance, maximum impact.",
    ],
    heroBadges: ["Zero seepage", "500+ projects", "Across Uttar Pradesh"],
    quoteLabel: "Natural Vertical Garden",
    blocks: [
      {
        type: "items",
        kicker: "Why a natural wall",
        title: "Why a natural vertical garden?",
        intro: "A real plant wall offers proven health, aesthetic, and environmental benefits.",
        items: [
          { title: "Cleaner air", body: "Absorbs toxins and pumps fresh oxygen into your homes and offices." },
          { title: "Cooler rooms", body: "Reduces room temperature by 2-3 degrees during summer." },
          { title: "Quieter spaces", body: "Thick plant foliage acts as a natural sound barrier creating peace." },
          { title: "Living art", body: "Transform boring walls into stunning living art pieces that inspire." },
        ],
      },
      {
        type: "items",
        kicker: "The system",
        title: "Low maintenance. Maximum impact.",
        intro: "A smart system for healthy, thriving vertical gardens year-round.",
        items: [
          { title: "Automated drip irrigation", body: "No manual watering required. The system automatically waters the plants on a timed schedule." },
          { title: "Rot-proof felt pockets", body: "We use premium, breathable, rot-proof felt pockets that hold roots securely while allowing optimal aeration." },
          { title: "Lightweight growing media", body: "Lightweight coco-peat and organic nutrients blend to ensure healthy root growth without messing up your floors." },
          { title: "Hidden drainage", body: "Excess water is cleanly drained away through hidden channels: zero leakage, zero wall dampness." },
        ],
      },
      {
        type: "plants",
        kicker: "Plant selection",
        title: "Choose your plants",
        intro: "We offer a wide variety of plants suited for different environments.",
        groups: group(
          naturalPlants,
          (p) => p.category,
          { indoor: "Indoor", outdoor: "Outdoor", "air-purifying": "Air purifying" },
          (p) => ({ name: nameCase(p.name), image: p.img }),
        ),
      },
      {
        type: "tiers",
        kicker: "Pricing",
        title: "Natural vertical garden packages",
        intro: "Every natural vertical garden is unique. These are indicative ranges per sq ft.",
        items: [
          {
            name: "Luxury Green Walls",
            price: "₹1,499 – ₹1,999",
            unit: "per sq ft",
            desc: "Bespoke designs with exotic plants and auto irrigation.",
            badge: "Premium",
            features: ["Custom Design", "Indoor + Outdoor", "Premium Plants", "High Maintenance Support", "Auto Irrigation", "Long Term Impact"],
          },
          {
            name: "Balanced Green Walls",
            price: "₹999 – ₹1,499",
            unit: "per sq ft",
            desc: "Curated designs with quality plants and drip irrigation.",
            badge: "Standard",
            features: ["Curated Designs", "Indoor / Semi-Outdoor", "Quality Plants", "Regular Maintenance", "Drip Irrigation", "Great Value"],
          },
          {
            name: "Essential Green Walls",
            price: "₹499 – ₹799",
            unit: "per sq ft",
            desc: "Budget friendly layouts for outdoor walls.",
            badge: "Basic",
            features: ["Standard Layouts", "Only Outdoor", "Easy Care Plants", "Basic Maintenance", "Manual Watering", "Budget Friendly"],
          },
        ],
        note: "Final price depends on wall size, plant selection, irrigation and site conditions.",
      },
      {
        type: "items",
        kicker: "Pricing factors",
        title: "Factors affecting cost",
        intro: "Every natural vertical garden is unique. Here is what influences the pricing:",
        items: [
          { title: "Square footage of the wall", body: "Larger wall areas require more materials, plants and installation time." },
          { title: "Type of plants selected", body: "Premium and exotic plants may impact the overall cost of the garden." },
          { title: "Irrigation system complexity", body: "Advanced automated irrigation systems may affect the cost." },
          { title: "Location", body: "Distance and site location can influence transportation and service costs." },
          { title: "Installation height and accessibility", body: "Higher walls or difficult access may require extra equipment and labor." },
          { title: "AMC package inclusion", body: "Annual maintenance coverage and service frequency are included in the pricing." },
        ],
      },
      {
        type: "steps",
        kicker: "Our working process",
        title: "Our installation process",
        intro: "Professional step-by-step installation ensuring quality, durability, and zero damage to your walls.",
        items: [
          { title: "Site inspection", body: "Our experts visit your location to assess wall condition, sunlight, and space requirements." },
          { title: "Preparation", body: "Precise wall measurement, waterproofing layer installation, and area marking." },
          { title: "Structure and wall mounting", body: "Custom metal/PVC frame fabrication with drainage channels and irrigation pipes." },
          { title: "Plant installation", body: "Carefully selected plants placed in modules with drip irrigation connection." },
          { title: "Final handover", body: "System testing, irrigation check, maintenance guide, and project completion." },
        ],
        note: "Average installation time: 7-10 days. Professional installation with minimal disruption to your daily routine.",
      },
      {
        type: "list",
        kicker: "Where we install",
        title: "Bring nature to every space",
        intro: "Our vertical gardens are designed to enhance any environment, indoor or outdoor.",
        items: [
          "Balconies & Terraces",
          "Office Receptions",
          "Cafés & Restaurants",
          "Building Facades",
          "Villas & Bungalows",
          "Hotel Lobbies",
          "Spa & Wellness Spaces",
          "Retail Showrooms",
          "Rooftop Lounge Areas",
          "Indoor Courtyards",
        ],
      },
      {
        type: "beforeafter",
        kicker: "Transformation",
        title: "Before & after",
        intro: "See how we transform dull, lifeless walls into vibrant breathing ecosystems.",
        pairs: [
          { title: "Balcony", before: "/images/services/professional-landscape-consultation-india.webp", after: "/images/services/luxury-balcony-garden-makeover-india-landscape-design-india.webp" },
          { title: "Office", before: "/images/services/natural-vertical-garden-living-wall.webp", after: "/images/vertical-garden-company-india-about.webp" },
          { title: "Exterior wall", before: "/images/services/professional-landscape-consultation-india.webp", after: "/images/services/premium-artificial-green-wall-india-landscape-design-india.webp" },
          { title: "Cafe", before: "/images/services/preserved-moss-wall-design-india-landscape-design-india.webp", after: "/images/services/luxury-preserved-moss-wall-interior-landscape-design-india.webp" },
        ],
      },
      {
        type: "gallery",
        kicker: "Inspiration",
        title: "Design gallery",
        intro: "Beautiful patterns and plant arrangements to inspire your next green wall.",
        images: [...naturalGallery.premium, ...naturalGallery.standard].map((s, i) =>
          img(s, `Natural vertical garden design inspiration ${i + 1}`),
        ),
      },
      {
        type: "items",
        kicker: "Why choose us",
        title: "Why Satriva?",
        intro: "Trusted expertise, premium quality, and exceptional service for every project.",
        items: [
          { title: "500+ installations", body: "Trusted by hundreds of happy clients across India." },
          { title: "Across Uttar Pradesh", body: "Local experts who understand Uttar Pradesh climate and conditions." },
          { title: "Waterproof guarantee", body: "100% zero seepage assurance with advanced technology." },
          { title: "Premium nursery plants", body: "Only the healthiest, handpicked plants for a lush and lasting wall." },
          { title: "In-house installation team", body: "Trained professionals, not contractors, ensuring quality and accountability." },
          { title: "Fast execution", body: "Most projects completed in just 2-3 days." },
          { title: "30 days plant replacement guarantee", body: "We replace any underperforming plants within 30 days of installation." },
          { title: "AMC package inclusion", body: "Annual maintenance coverage and service frequency are included in the pricing." },
        ],
      },
      {
        type: "items",
        kicker: "Our promise",
        title: "Plant health replacement guarantee",
        intro: "Any unhealthy plant within the initial support period will be replaced by our team at no cost.",
        items: [
          { title: "Free replacement", body: "Any unhealthy plants." },
          { title: "Guaranteed support", body: "Expert consultation." },
          { title: "Warranty coverage", body: "System and irrigation." },
        ],
      },
    ],
    faqs: [
      { q: "How much does a natural vertical garden cost in India?", a: "The cost depends on the square footage, plant selection, and irrigation system. Typically ranges from ₹650–₹1800/sqft. Contact us for a free measurement and quote." },
      { q: "Will it cause dampness (seelan) on my walls?", a: "No. We use completely waterproof PVC panels behind the plant pots to ensure your walls stay 100% dry and safe. Zero seepage guarantee." },
      { q: "How do I maintain it?", a: "The watering is automated with our timer-based drip irrigation system. We also offer Monthly Annual Maintenance Contracts (AMC) where our gardeners visit to trim, fertilize, and replace plants." },
      { q: "How long does installation take?", a: "Most projects are completed in 2-3 days depending on the size. We work efficiently without disrupting your daily routine." },
      { q: "Can I install a vertical garden indoors without sunlight?", a: "Yes! For indoor spaces, we use shade-tolerant plants. We can also optionally install specialized full-spectrum LED grow lights to ensure the plants remain healthy and vibrant year-round without natural sunlight." },
      { q: "Do I need a water connection near the wall?", a: "While having a water source nearby is ideal for connecting our automated drip irrigation system, we can also provide a concealed integrated water tank and pump solution for walls without direct plumbing access." },
      { q: "Are vertical gardens safe for balconies and high floors?", a: "Absolutely. Our framing systems are built with heavy-duty MS/Aluminum and securely anchored to the structural wall. The design is engineered to withstand high wind pressures, making it completely safe for high-rise balconies and exterior building facades." },
      { q: "Do you provide plant replacement if they die?", a: "Yes. We offer a standard 30-day free plant replacement guarantee. Additionally, our Annual Maintenance Contracts (AMC) include free replacements for any plants that fail to thrive despite proper care." },
      { q: "Do you provide installation services outside Uttar Pradesh?", a: "Yes. While we focus on Uttar Pradesh, we can take on larger natural vertical garden and landscaping projects elsewhere. Contact us with your location and project details." },
    ],
    related: ["artificial-vertical-garden", "balcony-garden", "moss-wall"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "artificial-vertical-garden",
    title: "Artificial Vertical Garden",
    shortTitle: "Artificial",
    blurb: "Low-maintenance, highly realistic artificial green walls perfect for indoors and outdoors.",
    priceFrom: "₹200 per sq ft",
    priceNote: "Package range ₹180–₹850 per sq ft depending on foliage quality and UV protection.",
    features: ["Zero maintenance", "UV Protected", "Highly realistic", "Quick installation"],
    image: "/images/services/artificial-vertical-garden-corporate-office-india.webp",
    popular: true,
    seoTitle: "Premium Artificial Vertical Garden in India | Zero Maintenance Green Walls | Satriva",
    seoDescription:
      "Get zero maintenance artificial vertical gardens in Uttar Pradesh. UV-protected, fire-retardant, realistic faux green walls starting ₹180/sq.ft. Expert installation. Book a free site visit today!",
    keywords: [
      "artificial satriva",
      "faux green wall",
      "zero maintenance vertical garden",
      "artificial plant wall cost",
      "vertical garden experts",
      "artificial green wall delhi",
      "UV protected artificial garden",
      "fire retardant green wall",
      "artificial vertical garden price",
      "green wall installation india",
    ],
    heroKicker: "Artificial vertical garden",
    heroTitle: "Premium artificial vertical garden <em>services.</em>",
    heroLede:
      "100% zero maintenance, UV-protected, and fire-retardant green walls that look perfectly natural all year.",
    overview: [
      "We provide premium quality artificial green walls that look incredibly realistic and require zero maintenance. Perfect for spaces lacking natural light.",
      "Love the greenery, hate the maintenance? Real plants require time, soil, and constant care. Our high-grade artificial vertical gardens give you beauty without the burden.",
    ],
    heroBadges: ["UV protected", "Zero maintenance"],
    quoteLabel: "Artificial Vertical Garden",
    blocks: [
      {
        type: "items",
        kicker: "Features",
        title: "Save water. Save time.",
        items: [
          { title: "No watering needed", body: "Save water. Save time." },
          { title: "Zero wall dampness", body: "No dirt. No moisture." },
          { title: "UV protected foliage", body: "Fade-resistant and durable." },
          { title: "Easy maintenance", body: "Just dust it. That's it." },
          { title: "3-5 year colour warranty", body: "Quality you can trust." },
        ],
      },
      {
        type: "items",
        kicker: "Why choose Satriva artificial green walls",
        title: "Luxury look. Zero hassle.",
        intro: "Engineered for beauty. Built for Indian conditions.",
        items: [
          { title: "Hyper-realistic", body: "Multi-layered, 3D botanical designs that look and feel 100% real." },
          { title: "Weather proof", body: "UV-treated polymers that won't fade in the harsh Indian summer or heavy rains." },
          { title: "Zero mess and cost", body: "No irrigation systems, no soil spills, and zero monthly maintenance bills." },
          { title: "Fire retardant and safe", body: "Made from non-toxic, pet-friendly, and fire-safe materials perfect for indoors." },
          { title: "3 years warranty", body: "Backed by a 3-year warranty on color fade and design integrity." },
        ],
      },
      {
        type: "compare",
        kicker: "The smarter way",
        title: "Beauty without the burden",
        intro: "Real plants require time, soil, and constant care. Our high-grade artificial vertical garden gives you the look without the work.",
        heads: ["", "Real plant wall", "Artificial plant wall"],
        rows: [
          ["Watering", "Needs daily watering", "No watering required"],
          ["Pests", "Attracts bugs and pests", "No bugs or pests"],
          ["Trimming", "Requires pruning and trimming", "No pruning or trimming"],
          ["Running cost", "High maintenance cost", "Zero recurring cost"],
          ["Appearance", "Plants may wither or die", "Stays lush and green always"],
        ],
      },
      {
        type: "compare",
        kicker: "Make the right choice",
        title: "Artificial or natural: what fits your space?",
        intro: "Compare and choose the perfect green wall solution for your needs.",
        heads: ["", "Natural", "Artificial"],
        rows: [
          ["Daily watering", "Required (automated)", "Not required"],
          ["Visual appeal", "Fresh, living", "Hyper-realistic (99% match)"],
          ["Wall dampness risk", "Needs heavy waterproofing", "Zero risk (always dry)"],
          ["Recurring cost", "Nutrients, trimming", "One-time investment"],
          ["Best for", "Plant lovers, fresh air", "Cafes, offices, busy homes"],
          ["Maintenance effort", "Regular care and pruning needed", "Just occasional cleaning"],
          ["Warranty", "15-30 days plant replacement warranty", "3-5 year colour warranty"],
        ],
      },
      {
        type: "tiers",
        kicker: "Clear pricing",
        title: "Artificial garden cost",
        intro: "Transparent pricing based on quality, UV protection, and foliage density. No hidden charges.",
        items: [
          {
            name: "Basic",
            price: "₹180 – ₹250",
            unit: "per sq ft",
            desc: "Standard plastic foliage suitable for indoor shaded areas.",
            features: ["Standard PVC Panels", "Basic Grass & Foliage", "Indoor Use Only", "Instant Installation", "1 Year Color Warranty"],
          },
          {
            name: "Premium",
            price: "₹350 – ₹550",
            unit: "per sq ft",
            desc: "High-density, UV-protected panels for outdoor balconies and facades.",
            badge: "Most popular",
            features: ["UV-Coated Protection", "High Density Foliage", "Indoor & Outdoor Safe", "Fade Resistant", "3 Year Color Warranty"],
          },
          {
            name: "Luxury 3D",
            price: "₹650 – ₹850",
            unit: "per sq ft",
            desc: "Ultra-realistic, custom-designed premium foliage with fire-retardant options.",
            badge: "Best quality",
            features: ["Ultra-Realistic 3D Plants", "Fire-Retardant Options", "Custom Floral Add-ons", "Heavy Duty MS Framing", "5 Year Warranty"],
          },
        ],
        note: "Final price may vary based on exact wall dimensions, framing requirements, and location.",
      },
      {
        type: "products",
        kicker: "Catalogue",
        title: "Artificial mats and products",
        intro: "Premium mats, normal mats, creepers and planter pots. Ask us for the catalogue on WhatsApp.",
        groups: group(
          artificialProducts,
          (p) => p.category,
          { "premium-mats": "Premium mats", "normal-mats": "Normal mats", creepers: "Creepers & vines", pots: "Artificial planter pots" },
          (p) => ({ name: p.name, image: p.image }),
        ),
      },
      {
        type: "steps",
        kicker: "Easy, quick, clean installation",
        title: "Artificial vertical garden installation",
        intro: "Just stunning green walls.",
        items: [
          { title: "Site inspection", body: "We inspect your wall, measure the area and understand requirements." },
          { title: "Wall cleaning and surface prep", body: "Wall is cleaned, dust removed and marked for perfect alignment." },
          { title: "Wall fixing and locking", body: "Mats are securely fixed with screws/anchors and interlocked for stability." },
          { title: "Finishing and styling", body: "Leaves are fluffed and adjusted for a natural, dense and premium look." },
          { title: "Final handover", body: "Final quality check, cleanup and maintenance guidance provided." },
        ],
      },
      {
        type: "beforeafter",
        kicker: "Instant transformation",
        title: "Before vs after",
        intro: "See how artificial green walls instantly turn bare surfaces into lush, luxurious spaces.",
        pairs: [
          { title: "Balcony makeover", before: "/images/services/professional-landscape-consultation-india.webp", after: "/images/vertical-garden-company-india-about.webp" },
          { title: "Office reception", before: "/images/services/professional-landscape-consultation-india.webp", after: "/images/lush-green-garden-landscape-india.webp" },
          { title: "Exterior facade", before: "/images/products/planters-vertical-garden-india.webp", after: "/images/portfolio/live-natural-vertical-garden-project.webp" },
          { title: "Restaurant wall", before: "/images/portfolio/corporate-office-green-wall-india-vertical-garden-india.webp", after: "/images/services/premium-artificial-green-wall-india-landscape-design-india.webp" },
        ],
      },
      {
        type: "gallery",
        kicker: "Inspiration",
        title: "Design collection",
        intro: "From grass walls and tropical foliage to mixed floral designs. Perfect for any setting.",
        images: artificialGallery.map((s, i) => img(s, `Artificial vertical garden design ${i + 1}`)),
      },
    ],
    faqs: [
      { q: "What is the lifespan of an artificial vertical garden?", a: "Our premium UV-protected artificial green walls last for 3 to 5 years outdoors without significant fading, and up to 10 years when installed indoors." },
      { q: "How do I clean my artificial green wall?", a: "Cleaning is incredibly simple. For indoors, a feather duster or vacuum with a brush attachment works perfectly. For outdoors, you can occasionally hose it down with water to remove dust." },
      { q: "Is it safe for outdoor use in extreme heat?", a: "Yes! Our premium and luxury panels are coated with UV inhibitors during manufacturing. This ensures they don't fade, crack, or become brittle even in direct Indian summer sunlight." },
      { q: "Can it be installed on any wall?", a: "Absolutely. Artificial vertical gardens are extremely lightweight. They can be installed on concrete, brick, drywall, wood, or even metal fencing. We use an MS grid frame for secure mounting." },
      { q: "Are these fire retardant?", a: "We offer specialized Fire-Retardant (FR) rated foliage options specifically designed for commercial interiors, malls, and restaurants where fire safety compliance is mandatory." },
      { q: "Does it look fake or plasticky?", a: "Not at all. We use ultra-realistic 3D foliage designs with varied color gradients (mixing light and dark greens with faux brown stems) to perfectly mimic natural plant textures." },
      { q: "How much time does installation take?", a: "A standard residential balcony or feature wall (up to 100 sq.ft) is usually completed in just 1-2 days. Larger commercial projects may take 3-5 days depending on the design complexity." },
      { q: "Is it safe for pets and children?", a: "Yes, our artificial foliage is made from high-quality, non-toxic, eco-friendly materials. It is completely safe for homes with pets and children, emitting no harmful chemicals or allergens." },
      { q: "Do you offer a warranty on the installation?", a: "Yes, we provide a standard 1-year installation warranty covering the structural MS grid framing and panel securing. We also provide a color-fade warranty on our premium UV-rated outdoor products." },
    ],
    related: ["natural-vertical-garden", "moss-wall", "balcony-garden"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "moss-wall",
    title: "Moss Wall",
    shortTitle: "Moss Wall",
    blurb: "Zero-maintenance preserved moss art panels. No water, no soil, no sunlight required.",
    priceFrom: "₹300 per sq ft",
    priceNote: "Natural preserved moss ₹1,299–2,499 and premium artificial moss ₹3,499–4,999, as listed on our comparison.",
    features: ["Zero water needed", "No sunlight", "100% preserved", "5+ year lifespan"],
    image: "/images/services/preserved-moss-wall-design-india-landscape-design-india.webp",
    popular: true,
    seoTitle: "Premium Moss Wall Design & Installation India | Satriva",
    seoDescription:
      "Zero-maintenance custom preserved moss walls in India. We specialize in luxury biophilic design for corporate & residential spaces. Book a free site visit!",
    keywords: ["moss wall", "preserved moss wall", "moss logo wall", "luxury green decor", "biophilic design india"],
    heroKicker: "Luxury interiors",
    heroTitle: "Premium moss wall design and <em>installation.</em>",
    heroLede:
      "Transform your interiors with luxurious maintenance-free moss wall art and biophilic design for offices, homes and hospitality.",
    overview: [
      "Preserved moss walls are the ultimate low-maintenance green statement. Perfect for offices, reception areas, and modern interiors, they never need watering or sunlight.",
      "We specialise in two premium moss wall categories, natural preserved moss and premium artificial moss, so we can match the right wall to your space.",
    ],
    heroBadges: ["500+ installations", "Zero maintenance", "Acoustic benefits", "Custom branding"],
    quoteLabel: "Moss Wall",
    blocks: [
      {
        type: "items",
        kicker: "Material technology",
        title: "The science of preserved moss",
        intro:
          "Our moss isn't artificial plastic. It is 100% real, natural moss that undergoes a plant glycerin preservation process, locking it in a state of permanent freshness.",
        items: [
          { title: "100% natural", body: "Harvested from Scandinavian forests. Zero irrigation required ever." },
          { title: "Eco-friendly preservation", body: "100% biodegradable and non-toxic preservation liquids." },
          { title: "Dust and insect resistant", body: "Anti-static properties repel dust. Contains no organic matter for insects." },
          { title: "Long-lasting colours", body: "Food-grade dyes ensure the vibrant green colours last for 5-10+ years." },
          { title: "Humidity regulating", body: "Naturally absorbs and releases moisture, improving ambient air feel." },
        ],
      },
      {
        type: "items",
        kicker: "Knowledge and science",
        title: "The science and art behind our moss walls",
        intro: "You love the green, but hate the maintenance? Here is how we make it possible.",
        items: [
          { title: "100% real, yet frozen in time", body: "Our natural moss is ethically harvested from deep forests. We replace its natural sap with a bio-friendly plant glycerin mix, and it stays vibrant for 7-10 years without a drop of water." },
          { title: "Engineered artificial moss", body: "For outdoor facades and sunny balconies, our artificial moss uses high-density, hyper-realistic polymer technology engineered to withstand the harshest Indian summers and heavy monsoons without fading. Waterproof." },
          { title: "More than just looks", body: "The deep, 3D textures act as a natural acoustic buffer, absorbing up to 40% of noise. Biophilic design is also scientifically proven to reduce stress by up to 15%." },
        ],
      },
      {
        type: "items",
        kicker: "Prestige moss textures",
        title: "The natural preserved moss collection",
        intro:
          "We source and engineer premium, 100% maintenance-free moss varieties to create luxury biophilic walls that architects and designers choose.",
        items: [
          { title: "Premium reindeer moss", body: "The ultimate luxury. Soft, spongy, 100% authentic. Available in classic forest greens or custom-dyed chromatic palettes. Soft, sponge-like texture that provides the highest level of acoustic absorption." },
          { title: "Classic forest moss", body: "Velvety and dense, with a sleek, architectural finish. Offers a velvety flat texture. Perfect as a base layer for lush biophilic walls." },
          { title: "Pillow / bun moss", body: "A 3D hilly landscape of pillow-soft cushions. 3D domed structures that create incredible depth and a luxurious hilly landscape effect." },
          { title: "Mixed biophilic foliage", body: "Opulent jungle finish with multidimensional foliage. A curated blend of preserved forest moss integrated with wild ferns, eucalyptus, and custom foliage." },
        ],
      },
      {
        type: "items",
        kicker: "Engineering for architects",
        title: "Engineered for durability, designed for creativity",
        items: [
          { title: "100% wall-safe installation (zero damage)", body: "We never glue moss directly to your walls. The artwork is built on premium backing boards in our studio and mounted securely using minimal hidden screws. Your original wall paint stays untouched." },
          { title: "Zero upkeep required", body: "No plumbing, no watering, and no sunlight needed. It draws ambient moisture from the air to stay soft and vibrant for 7-10 years." },
          { title: "Natural acoustic buffer", body: "The deep 3D textures of preserved moss act as a natural sound barrier, absorbing up to 40% of high-frequency noise and reducing echo in open spaces." },
          { title: "100% pest-free and hypoallergenic", body: "The plant glycerin preservation process makes the moss completely sterile. It attracts zero bugs, repels dust naturally, and is completely safe for asthma patients." },
          { title: "Biophilic wellness and stress relief", body: "Bringing real nature indoors is scientifically proven to reduce ambient stress levels by up to 15%, elevating mood and cognitive focus in both homes and offices." },
          { title: "Easily relocatable (asset for life)", body: "Built on modular panels, you can easily unmount the entire moss wall like a painting and reinstall it in a new office or home if you relocate." },
          { title: "Themed cafes and luxury retail", body: "Want a pastel pink backdrop for an Instagrammable cafe, or a bold dark grey acoustic wall for a premium boutique? Our coloured moss creates the exact custom vibe your brand needs." },
          { title: "Custom geometric art and murals", body: "Nature meets imagination. Our artists blend multiple coloured moss variants to create stunning abstract patterns, map designs, and geometric wall art." },
          { title: "Creative zones and wellness centers", body: "Bright, cheerful, and 100% non-toxic. Perfect for kids' play areas, creative agency lounges, or modern co-working spaces to trigger cognitive creative thinking." },
        ],
      },
      {
        type: "items",
        kicker: "Outdoor and commercial",
        title: "Deep dive: the premium artificial moss collection",
        intro: "Hyper-realistic, ultra-durable, and engineered for the elements. Built for outdoor spaces, building facades, and large-scale commercial installations.",
        items: [
          { title: "Seamless flat moss", body: "The clean canvas: smooth and minimalist. Engineered to replicate the calm, uniform look of natural forest moss. Provides a flawless, joint-free green carpet effect across massive walls. Best for corporate exterior boundary walls, large event backdrops, and modern retail store facades." },
          { title: "3D textured moss", body: "The rugged look: deep and dynamic. Features varying heights and multi-tone green layers to mimic the wild, bulbous texture of bun moss. Best for cafe interiors, outdoor balconies, and high-traffic restaurant walls where people might touch the panels." },
          { title: "The tropical mix", body: "Moss with floral and fern accents: vibrant and botanical. A dense artificial moss base integrated with hyper-realistic faux ferns, monstera leaves, and subtle floral pops. Best for Instagrammable cafe corners, salon backdrops, and lively hospitality zones." },
          { title: "Heavy-duty UV exterior panels", body: "The facade shield. Specially treated, high-density polymer moss panels built strictly for harsh outdoor conditions. Designed to resist colour fading, heat, and heavy rain. Best for high-rise building facades, rooftop terrace gardens, and open-air commercial spaces." },
          { title: "100% UV and weather proof", body: "Treated with advanced UV inhibitors. Our artificial moss panels can withstand the harsh Indian summer sun without turning blue or losing their vibrant green colour." },
          { title: "Waterproof and washable", body: "Completely immune to water. Perfect for open balconies and exteriors. You can easily clean the entire wall by simply hosing it down with water." },
          { title: "Highly cost-effective", body: "The smartest choice for massive commercial walls. Get the premium, lush biophilic aesthetic at a fraction of the cost of natural preserved moss." },
          { title: "Fire-retardant options", body: "Safety first. We offer fire-rated artificial moss panels that comply with commercial building safety standards, making them perfect for malls and corporate towers." },
          { title: "100% pet and child safe", body: "Made from high-grade, non-toxic, and odorless polymers. No sharp edges, no chemicals, and completely safe for residential balconies with kids and pets." },
          { title: "Seamless interlocking system", body: "Our panels are designed with precision snap-locks, meaning even on a 100 sq.ft. wall, you will not see a single joint or patch. It looks like one continuous living canvas." },
          { title: "Building facades and exteriors", body: "Transform boring concrete pillars and building exteriors into striking green landmarks that instantly catch the eye from the street." },
          { title: "High-traffic durability", body: "Unlike real plants, our artificial moss won't get damaged if people brush against it or touch it. Perfect for busy clubs, narrow corridors, and public lounges." },
          { title: "Fast, mess-free installation", body: "Mounted on rust-proof metal grids directly over your existing wall. The installation is rapid, completely dry, and leaves zero mess at your site." },
        ],
      },
      {
        type: "compare",
        kicker: "Product comparison",
        title: "Choose your masterpiece: natural vs. artificial",
        intro:
          "We specialize in two premium moss wall categories to perfectly match your space and needs. From the soft, authentic luxury of preserved moss to the weatherproof durability of artificial greenery, both offer stunning, zero-maintenance results.",
        heads: ["", "Natural preserved moss (100% organic)", "Premium artificial moss (weatherproof polymer)"],
        rows: [
          ["Vibe", "The ultimate luxury", "The ultra-durable workhorse"],
          ["Feel", "Soft, spongy, 100% authentic", "Hyper-realistic, sturdy"],
          ["Placement", "Strictly indoors (no direct sun; AC is fine)", "Indoors and outdoors (UV resistant)"],
          ["Best for", "Boardrooms, luxury receptions, premium bathrooms", "Cafes, exterior facades, high-traffic areas"],
          ["Price", "₹1299-2499", "₹3499-4999"],
        ],
        note: "Still not sure which is best for your space? Talk to a design expert.",
      },
      {
        type: "items",
        kicker: "Brand integration",
        title: "Bring your brand to life",
        intro:
          "Don't just stick your logo on a blank wall. Make it a masterpiece. We seamlessly integrate neon lights, acrylic logos and metal lettering directly into natural and artificial moss walls. Send us your logo, and we'll show you a free 3D brand mockup.",
        items: [
          { title: "3D acrylic and neon", body: "Precision-cut wrapping." },
          { title: "Boardroom backdrop", body: "Corporate first impressions." },
          { title: "Instagram magnet", body: "Photogenic selfie spot." },
          { title: "Fully custom", body: "Natural and artificial." },
        ],
      },
      {
        type: "items",
        kicker: "Wellness focus",
        title: "Acoustic and wellness benefits",
        intro: "Beyond aesthetics, moss walls are functional architectural elements that profoundly improve a space.",
        items: [
          { title: "Superior sound absorption", body: "Moss acts as a natural sound dampener, significantly reducing echo and background noise in open-plan offices and busy restaurants." },
          { title: "Stress reduction", body: "Biophilic design is scientifically proven to lower heart rates, reduce stress, and improve overall mental wellbeing." },
          { title: "Enhanced focus", body: "A calm, nature-inspired environment increases productivity and cognitive function by up to 15%." },
          { title: "Air quality perception", body: "While preserved moss does not filter air like live plants, its presence psychologically enhances the perception of fresh, clean air." },
        ],
      },
      {
        type: "list",
        kicker: "Perfect spaces",
        title: "Ideal applications and industries",
        intro: "Where does moss wall decor look best? Absolutely anywhere indoors that needs a touch of nature.",
        items: ["Office Receptions", "Conference Rooms", "Luxury Homes", "Hotel Lobbies", "Salons & Spas", "Retail Stores"],
      },
      {
        type: "steps",
        kicker: "How it works",
        title: "Installation process",
        intro: "Our seamless, mess-free installation ensures your luxury moss wall is up and ready quickly.",
        items: [
          { title: "Consultation", body: "We assess your space, lighting, and acoustic needs." },
          { title: "Design selection", body: "Choose moss types, textures, and custom logo integrations." },
          { title: "Measurement", body: "Precise area mapping for perfect panel alignment." },
          { title: "Frame prep", body: "Custom MDF/Plywood framing cut to exact dimensions." },
          { title: "Installation", body: "Hand-glued preserved moss application on site or pre-fabricated." },
          { title: "Finishing", body: "Seamless blending, edge trimming, and final QC." },
        ],
      },
      {
        type: "beforeafter",
        kicker: "Instant transformation",
        title: "Plain wall to biophilic art",
        intro: "Witness the dramatic transformation moss walls bring to corporate and residential spaces.",
        pairs: [
          { title: "Corporate boardroom wall", before: "/images/services/professional-landscape-consultation-india.webp", after: "/images/services/moss-wall-luxury-landscape-design-india.webp" },
          { title: "Luxury reception moss art", before: "/images/services/professional-landscape-consultation-india.webp", after: "/images/portfolio/premium-moss-art-wall-design.webp" },
        ],
      },
      {
        type: "gallery",
        kicker: "Inspiration: natural preserved moss",
        title: "Design gallery",
        intro: "Explore our curated gallery of premium biophilic designs, crafted to elevate modern spaces.",
        images: [
          ...mossNatural.map((m) => img(m.src, m.title, `${m.title} · ${m.tag}`)),
          ...mossArtificial.map((m) => img(m.src, m.title, `${m.title} · ${m.tag}`)),
        ],
      },
    ],
    faqs: [
      { q: "Is the moss wall made of real plants?", a: "Yes, our moss walls are made from 100% real, natural moss. However, they undergo an eco-friendly preservation process using natural glycerin, which replaces the sap and keeps the moss soft, vibrant, and alive-looking for years." },
      { q: "Does a moss wall need water or sunlight?", a: "No! This is the biggest advantage. Preserved moss requires zero watering, zero sunlight, and zero pruning. In fact, watering or placing it in direct sunlight can damage the preserved moss." },
      { q: "How long does a moss wall last?", a: "When installed indoors in appropriate conditions, our premium preserved moss walls can easily last between 5 to 10+ years without losing their color or texture." },
      { q: "Does it attract insects or bugs?", a: "No. Since the moss is preserved and no longer living, there is no organic matter, soil, or moisture to attract insects or bugs. It is completely safe for indoor environments." },
      { q: "Can moss walls be customized with logos?", a: "Absolutely! We specialize in custom corporate branding. We can integrate neon lights, acrylic logos, and metal lettering directly into the moss wall for a stunning reception display." },
      { q: "Is it suitable for bathrooms or outdoors?", a: "Moss walls are strictly for indoor use. They should not be placed outdoors where they are exposed to direct rain or harsh sunlight. However, they can be placed in well-ventilated bathrooms." },
    ],
    related: ["artificial-vertical-garden", "natural-vertical-garden", "landscape-consultation"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "balcony-garden",
    title: "Balcony Garden",
    shortTitle: "Balcony Garden",
    blurb: "Transform your balcony into a beautiful green retreat with custom planters and vertical racks.",
    priceFrom: "₹250 per sq ft",
    priceNote: "Costs vary with size and the elements chosen: flooring, vertical gardens, planters and lighting.",
    features: ["Lightweight system", "Railing planters", "Space-efficient", "Apartment-friendly"],
    image: "/images/services/modern-balcony-garden-design-india-landscape-design-india.webp",
    popular: false,
    seoTitle: "Premium Balcony Garden Design Services in India",
    seoDescription:
      "Transform your balcony into a luxurious green retreat. Custom designs, artificial grass, wooden decking, vertical gardens, and lighting solutions.",
    keywords: [
      "balcony garden design",
      "luxury balcony makeover",
      "apartment balcony garden",
      "wooden decking",
      "balcony plants india",
    ],
    heroKicker: "Balcony landscape",
    heroTitle: "Balcony garden design and <em>installation.</em>",
    heroLede:
      "Transform your balcony into a luxurious green retreat with custom designs, artificial grass, wooden decking, vertical gardens, and lighting solutions.",
    overview: [
      "We design lightweight, railing-mounted planters, vertical racks, and space-efficient garden systems specifically for urban apartment balconies.",
      "Regardless of size or shape, we custom design solutions to maximize space and aesthetics, from small apartment balconies to large wrap-around terraces.",
    ],
    heroBadges: ["Premium quality", "Balcony landscape"],
    quoteLabel: "Balcony Garden",
    blocks: [
      {
        type: "plants",
        kicker: "Plant selection",
        title: "Best plants for balconies",
        intro: "We carefully select plants based on your balcony's sunlight exposure to ensure they thrive.",
        groups: group(
          balconyPlants,
          (p) => p.type,
          { sun: "Outdoor / direct sun", shade: "Shade loving" },
          (p) => ({ name: p.air ? `${p.name} · air purifying` : p.name, image: p.img }),
        ),
      },
      {
        type: "pills",
        kicker: "Evening aesthetics",
        title: "Ambient balcony lighting solutions",
        intro: "Balcony aesthetics heavily depend on lighting. We integrate outdoor-safe, warm lighting that turns your balcony into an evening retreat.",
        items: ["Warm LED Strips", "Hanging Lanterns", "Solar Stake Lights", "Wall Washers", "Fairy Lights", "Spotlights"],
      },
      {
        type: "gallery",
        kicker: "Lighting in practice",
        title: "Balcony lighting ideas",
        images: balconyLighting.map((m) => img(m.src, m.alt)),
      },
      {
        type: "steps",
        kicker: "How it works",
        title: "Installation process",
        intro: "Our seamless, mess-free installation ensures your balcony is transformed within a single working window.",
        items: [
          { title: "Site visit", body: "We inspect dimensions, sunlight, and drainage." },
          { title: "Measurement", body: "Precise area mapping for flooring and walls." },
          { title: "Design plan", body: "Selecting layout, planters, and furniture." },
          { title: "Material prep", body: "Cutting grass/decking to exact sizes off-site." },
          { title: "Installation", body: "Fixing panels, flooring, and lighting." },
          { title: "Final styling", body: "Placing plants, pebbles, and finishing touches." },
        ],
      },
      {
        type: "beforeafter",
        kicker: "Instant transformation",
        title: "Transform empty balconies into luxury green escapes",
        intro: "Watch how we turn boring, unused balconies into warm, inviting, and Pinterest-worthy retreats.",
        pairs: [
          { title: "High-rise apartment balcony", before: "/images/services/before-1-landscape-design-india.webp", after: "/images/services/after-1-landscape-design-india.webp" },
          { title: "Cozy evening setup", before: "/images/services/before-2-landscape-design-india.webp", after: "/images/services/after-2-landscape-design-india.webp" },
        ],
      },
      {
        type: "gallery",
        kicker: "Portfolio and inspiration",
        title: "Balcony design collection",
        intro: "From tropical escapes to modern minimalist layouts, explore our curated balcony designs.",
        images: balconyGallery.map((m) => img(m.src, m.title, m.title)),
      },
      {
        type: "list",
        kicker: "What we include",
        title: "Balcony makeover elements",
        items: [
          "Premium outdoor flooring: weather-resistant wooden deck tiles, WPC flooring and high-density artificial grass",
          "Vertical gardens and railing planters",
          "Ambient outdoor lighting, pebbles, seating and decorative elements",
          "Optional automated drip irrigation for natural gardens",
          "Natural or ultra-realistic artificial greenery, based on sunlight and your preference",
          "Catalogue of 50+ luxury balcony design ideas with material costs",
        ],
      },
    ],
    faqs: [
      { q: "Can any balcony be transformed?", a: "Yes! Regardless of size or shape, we custom design solutions to maximize space and aesthetics, from small apartment balconies to large wrap-around terraces." },
      { q: "Do you provide artificial or natural plants?", a: "We provide both. Depending on sunlight availability and your maintenance preferences, we recommend either lush natural plants or premium ultra-realistic artificial greenery." },
      { q: "Is balcony decking waterproof?", a: "Yes, we use WPC (Wood Plastic Composite) and treated pine decking that is 100% weather-resistant, waterproof, and designed for long-term outdoor use." },
      { q: "How long does a balcony makeover take?", a: "Most balcony makeovers are completed within 3 to 7 days after the design is finalized, depending on the complexity of the custom elements." },
      { q: "Do you install irrigation systems?", a: "Yes, for natural balcony gardens, we can integrate automated drip irrigation systems connected to your nearest water source to ensure zero-hassle watering." },
    ],
    related: ["natural-vertical-garden", "artificial-vertical-garden", "landscape-consultation"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "landscape-consultation",
    title: "Landscape Consultation",
    shortTitle: "Consultation",
    blurb: "Professional landscape consultation and design services for homes and commercial properties.",
    priceFrom: "On request",
    priceNote: "Initial basic consultations are free. Detailed 2D/3D design is charged based on project scale.",
    features: ["Site analysis", "Design planning", "Plant selection", "Project management"],
    image: "/images/services/consultation-hero-landscape-design-india.webp",
    popular: true,
    seoTitle: "Professional Landscape Consultation Services in India",
    seoDescription:
      "Expert guidance for designing luxurious and functional outdoor spaces for villas, farmhouses, terraces, and commercial properties.",
    keywords: [
      "landscape consultation",
      "landscape design india",
      "terrace garden design",
      "villa landscaping",
      "outdoor space planning",
    ],
    heroKicker: "Expert guidance",
    heroTitle: "Professional landscape <em>consultation.</em>",
    heroLede:
      "Get expert guidance for designing luxurious and functional outdoor spaces for villas, farmhouses, terraces, and commercial properties.",
    overview: [
      "Expert landscape design and consultation for residential and commercial spaces. We plan green infrastructure that maximizes beauty and functionality.",
      "Our consultation covers space planning, theme selection, plant recommendations, hardscape design (pergolas, decking), lighting layout, and irrigation planning. We provide a complete blueprint for your outdoor space.",
    ],
    heroBadges: ["Luxury landscape design", "2D and 3D designs"],
    quoteLabel: "Landscaping",
    blocks: [
      {
        type: "items",
        kicker: "Core expertise",
        title: "Our consultation services",
        intro: "We provide specialized guidance across every element of landscape design to ensure a result that works.",
        items: [
          { title: "Landscape design planning", body: "Comprehensive master planning for your outdoor space layout." },
          { title: "Plant selection guidance", body: "Expert advice on selecting climate-appropriate and visually stunning plants." },
          { title: "Balcony and terrace consultation", body: "Maximizing greenery and utility in compact urban outdoor spaces." },
          { title: "Irrigation planning", body: "Designing automated, water-efficient drip irrigation systems." },
          { title: "Outdoor lighting suggestions", body: "Ambient and functional lighting placement to elevate night aesthetics." },
          { title: "Hardscape and decor consultation", body: "Guidance on pergolas, decks, water features, and furniture." },
        ],
      },
      {
        type: "pills",
        kicker: "Comprehensive elements",
        title: "Outdoor features we design",
        intro: "A great landscape is more than just plants. We integrate architectural features that make the space usable.",
        items: [
          "Vertical Gardens",
          "Natural Lawns",
          "Artificial Grass",
          "Pergolas & Gazebos",
          "Deck Flooring",
          "Water Features",
          "Landscape Lighting",
          "Outdoor Seating",
          "Stone Pathways",
          "Garden Plantation",
          "Irrigation System",
          "Pool Landscaping",
          "Fire Pits & Features",
          "Screening & Fencing",
        ],
      },
      {
        type: "steps",
        kicker: "How we work",
        title: "Consultation process",
        intro: "A structured, collaborative approach to bring your dream outdoor space from concept to completion.",
        items: [
          { title: "Requirement discussion", body: "Understanding your vision, lifestyle needs, and budget." },
          { title: "Site analysis", body: "Evaluating soil, sunlight, drainage, and existing architecture." },
          { title: "Design planning", body: "Creating 2D layouts and selecting the overarching theme." },
          { title: "Plant and material selection", body: "Choosing specific flora, flooring, and hardscape elements." },
          { title: "Final consultation", body: "Presenting the comprehensive blueprint and execution strategy." },
        ],
      },
      {
        type: "gallery",
        kicker: "Gallery",
        title: "Luxury landscape design",
        images: landscapeHero.map((s, i) => img(s, `Luxury landscape design ${i + 1}`)),
      },
    ],
    faqs: [
      { q: "What is included in the landscape consultation?", a: "Our consultation covers space planning, theme selection, plant recommendations, hardscape design (pergolas, decking), lighting layout, and irrigation planning. We provide a complete blueprint for your outdoor space." },
      { q: "Do you provide execution and installation?", a: "Yes, beyond consultation, Satriva has a full execution team. Once the design is finalized, we can handle the complete sourcing, installation, and project management." },
      { q: "Do you offer 3D designs?", a: "Absolutely. We offer highly realistic 3D renderings and walkthroughs so you can visualize exactly how your villa garden, terrace, or balcony will look before any work begins." },
      { q: "What is the consultation cost?", a: "Consultation fees vary based on the size and complexity of the project. We offer a preliminary free site visit to understand your requirements before sharing a formal design proposal." },
      { q: "How long does the design process take?", a: "The initial concept and 2D layouts usually take 3 to 5 days. Full 3D renderings and final material selections may take 1 to 2 weeks depending on revisions." },
      { q: "Can installations be fully customized?", a: "Yes, 100% customization is our specialty. From plant selection and moss wall logos to custom pergolas and deck flooring, we design everything to your exact specifications." },
      { q: "Is installation included in the project pricing?", a: "Yes, our project quotations are comprehensive and include all materials, labor, installation, and finishing costs: no hidden charges." },
    ],
    related: ["related-services", "balcony-garden", "natural-vertical-garden"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "related-services",
    title: "Related Service",
    shortTitle: "Related",
    blurb: "Comprehensive gardening and landscaping services tailored to your specific outdoor or indoor needs.",
    priceFrom: "On request",
    priceNote: "Maintenance charges depend on the size of the area, the plants and the frequency of visits.",
    features: ["Garden maintenance", "Planter setup", "Lighting design", "Seasonal care"],
    image: "/images/services/related-services-image-landscape-design-india.webp",
    popular: false,
    seoTitle: "Related Landscape Services & Outdoor Maintenance in India",
    seoDescription:
      "Enhance, maintain, and upgrade your outdoor spaces with our professional landscape support and maintenance services. Book a site visit today.",
    keywords: [
      "landscape maintenance",
      "garden maintenance",
      "plant replacement",
      "irrigation upgrades",
      "outdoor lighting",
    ],
    heroKicker: "Professional care",
    heroTitle: "Related landscape services and <em>maintenance.</em>",
    heroLede:
      "Enhance, maintain, and upgrade your outdoor spaces with our professional landscape support and maintenance services.",
    overview: [
      "Beyond vertical gardens, we offer a range of related landscaping services to ensure your entire green space is harmonious and beautiful.",
      "Keep your landscape beautiful all year round. We offer comprehensive AMC packages for residential villas, corporate offices, and commercial properties.",
    ],
    heroBadges: ["AMC / maintenance", "Luxury landscape maintenance"],
    quoteLabel: "Landscaping",
    blocks: [
      {
        type: "items",
        kicker: "Comprehensive support",
        title: "Our landscape services",
        intro: "Everything you need to keep your outdoor spaces looking pristine and vibrant year-round.",
        items: [
          { title: "Landscape maintenance", body: "Regular pruning, weeding, and comprehensive care for your outdoor plants." },
          { title: "Plant replacement", body: "Sourcing and planting healthy replacements for dead or overgrown plants." },
          { title: "Irrigation upgrades", body: "Install or repair smart drip irrigation and sprinkler systems for easy watering." },
          { title: "Garden lighting", body: "Warm ambient lighting to highlight pathways, plants, and garden features." },
          { title: "Decorative stonework", body: "Pebbles, gravel, and stepping stones to enhance outdoor aesthetics." },
          { title: "Pathway development", body: "Create beautiful, durable, and functional walkways through your garden space." },
          { title: "Water features", body: "Design and maintenance of relaxing outdoor fountains, ponds, and waterfalls." },
          { title: "Pruning and trimming", body: "Expert shaping of trees and shrubs to maintain structure and promote growth." },
          { title: "Pest control", body: "Safe, eco-friendly, and effective pest management for healthy plants." },
          { title: "Soil care and fertilization", body: "Nutrient-rich soil treatments, mulching, and organic fertilizers." },
          { title: "Artificial turf", body: "Premium faux grass installation for realistic, zero-maintenance lawns." },
          { title: "Outdoor elements", body: "Installation of pergolas, trellises, seating areas, and decorative structures." },
        ],
      },
      {
        type: "pills",
        kicker: "Zero maintenance",
        title: "Artificial and low-maintenance solutions",
        intro: "For busy homeowners and commercial spaces, we provide ultra-realistic artificial landscaping that stays beautiful with minimal effort.",
        items: [
          "Artificial Grass",
          "Artificial Vertical Gardens",
          "Decorative Green Walls",
          "Garden Plantation",
          "Irrigation Systems",
          "Stone Pathways",
          "Deck Flooring",
          "Pergolas & Gazebos",
          "Outdoor Landscape Lighting",
          "Artificial Landscaping",
        ],
      },
      {
        type: "items",
        kicker: "Structural beauty",
        title: "Luxury outdoor additions and enhancements",
        intro: "A complete landscape is more than just plants. We integrate premium hardscape elements.",
        items: [
          { title: "Pergolas and trellises", body: "Custom wooden and metal structures to add shade and architectural interest." },
          { title: "Decking and flooring", body: "Premium WPC decking, outdoor tiles, and weather-resistant wooden floors." },
          { title: "Water fountains", body: "Luxurious water features that bring tranquility and dynamic movement." },
          { title: "Outdoor seating", body: "Built-in benches, fire pit areas, and custom patio furniture setups." },
        ],
      },
      {
        type: "steps",
        kicker: "How we work",
        title: "Maintenance process",
        items: [
          { title: "Site inspection", body: "We visit your property to evaluate the current state of your landscape and discuss your goals." },
          { title: "Health check", body: "A thorough assessment of plant health, soil quality, and existing irrigation systems." },
          { title: "Maintenance plan", body: "We propose a tailored action plan detailing pruning, fertilization, and necessary upgrades." },
          { title: "Execution", body: "Our expert team carries out the cleaning, pruning, planting, and hardscape installations." },
          { title: "Final review", body: "We walk you through the transformed space and set up an ongoing maintenance schedule if desired." },
        ],
      },
      {
        type: "pills",
        kicker: "Precision care",
        title: "Care we provide on site",
        items: ["Precision Irrigation & Care", "Expert Health Audits", "Routine Pruning & Styling", "Deep Cleaning & Washing"],
      },
      {
        type: "beforeafter",
        kicker: "Real project showcase",
        title: "The difference professional maintenance makes",
        intro: "See the transformative difference professional maintenance and landscape enhancement can make.",
        pairs: relatedProjects.map((p) => ({ title: `${p.title} · ${p.type}`, before: p.before, after: p.after })),
      },
      {
        type: "gallery",
        kicker: "Inspiration",
        title: "Landscape gallery",
        intro: "Beautifully maintained landscapes and elegant outdoor hardscape installations.",
        images: relatedGallery.map((s, i) => img(s, `Landscape maintenance gallery ${i + 1}`)),
      },
    ],
    faqs: [
      { q: "Do you offer AMC (Annual Maintenance Contract) services?", a: "Yes, we offer comprehensive AMC packages for residential villas, corporate offices, and commercial properties. This ensures your landscape remains healthy and beautiful year-round without any hassle." },
      { q: "How often is maintenance required?", a: "Depending on the plants and the season, we recommend bi-weekly or monthly visits. For fully established or artificial setups, quarterly check-ups might be sufficient." },
      { q: "Can you upgrade existing gardens?", a: "Absolutely. We specialize in revamping overgrown or poorly maintained gardens by replacing dead plants, upgrading irrigation, adding lighting, and installing hardscape elements." },
      { q: "Do you maintain artificial landscapes?", a: "Yes. Even artificial grass and vertical gardens require periodic cleaning, brushing, and UV protection sprays to maintain their realistic look and prolong their lifespan." },
      { q: "What are the maintenance charges?", a: "Maintenance charges depend on the size of the area, the type of plants, and the frequency of visits. We offer a free site inspection to provide you with an accurate quotation." },
      { q: "Can installations be fully customized?", a: "Yes, 100% customization is our specialty. From plant selection and moss wall logos to custom pergolas and deck flooring, we design everything to your exact specifications." },
      { q: "Is installation included in the project pricing?", a: "Yes, our project quotations are comprehensive and include all materials, labor, installation, and finishing costs: no hidden charges." },
    ],
    related: ["landscape-consultation", "natural-vertical-garden", "balcony-garden"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Services offered in the quote form and the enquiry links. */
export const quoteServices: string[] = [
  "Natural Vertical Garden",
  "Artificial Vertical Garden",
  "Moss Wall",
  "Balcony Garden",
  "Landscaping",
  "Artificial Grass",
];
