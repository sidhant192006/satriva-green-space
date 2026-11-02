/** Marketing copy for the home page and the information pages, taken from the Satriva website. */
import type { Faq, Item } from "./services";

export const VISIT_OFFER = "Free site visit";

export const heroFacts: { title: string; body: string }[] = [
  { title: "Free site visit", body: "We visit your space, suggest plant options and give pricing on the spot." },
  { title: "End-to-end installation", body: "Frames, drip irrigation, plants and mounting, all brought by us." },
  { title: "Service warranty", body: "Monthly or seasonal care keeps your green walls lush and healthy." },
];

export const HERO = {
  kicker: "Vertical gardens, moss walls and balcony landscaping",
  lede:
    "Transform your home, office or commercial space with beautiful, low-maintenance vertical gardens, moss walls and customised landscaping solutions.",
  image: "/images/home/herobg1.webp",
  imageAlt: "A vertical garden wall of living plants installed by Satriva",
  caption: ["Vertical garden", "Uttar Pradesh"],
};

export const marqueeItems: string[] = [
  "Natural vertical gardens",
  "Artificial green walls",
  "Preserved moss walls",
  "Balcony gardens",
  "Landscape consultation",
  "Garden maintenance",
  "Corporate gifting",
];

export const STATS: { value: string; suffix: string; label: string }[] = [
  { value: "3", suffix: "+", label: "years of experience" },
  { value: "350", suffix: "+", label: "Vertical gardens installed" },
  { value: "1000", suffix: "+", label: "Walls beautified" },
  { value: "90", suffix: "%", label: "clients return for maintenance" },
];

export const WHY_CHOOSE_US: Item[] = [
  { title: "Free site visit and quick estimate", body: "We visit your space, suggest plant options, and provide pricing on the spot." },
  { title: "End-to-end installation", body: "From frames and drip irrigation to plants and mounting, we bring everything needed." },
  { title: "Quality and service warranty", body: "We offer monthly or seasonal care to keep your green walls lush, healthy, and mess-free." },
  { title: "Trusted green experts", body: "Plant pros with industry experience, trained to deliver reliable and trusted service." },
];

export const HOW_IT_WORKS: { step: string; title: string; body: string }[] = [
  { step: "01", title: "Free quote", body: "Tell us about your home and choose the date you want." },
  { step: "02", title: "Installation", body: "Our expert team professionally installs your green wall with precision care." },
  { step: "03", title: "Enjoy", body: "Enjoy a fresh, green space that enhances beauty, comfort, and air quality." },
];

export const ABOUT_SHORT = {
  kicker: "Who we are",
  title: "Elevating spaces with nature.",
  body: [
    "At Satriva, we create thoughtfully designed green spaces that bring beauty, freshness, and calmness into modern living. From premium vertical gardens and preserved moss walls to elegant balcony transformations.",
    "We focus on creating healthier, greener, and more inspiring environments for homes, offices, cafes, and commercial spaces with both low and zero-maintenance solutions. Backed by the trusted landscaping expertise of ProGarden India.",
  ],
  points: ["End-to-end execution", "Bespoke green designs", "Affordable pricing", "Low and zero-maintenance solutions"],
  note: "Transforming spaces since 2022",
};

export const HOME_FAQS: Faq[] = [
  { q: "What services does Satriva offer?", a: "Satriva provides complete green solutions including natural vertical gardens, artificial green walls, moss walls, balcony gardens, terrace gardens, and full landscaping design & execution for residential and commercial spaces across India." },
  { q: "How much does a vertical garden cost in India?", a: "The cost depends on the wall size, garden type (natural / artificial / moss), plant selection, irrigation system, and maintenance needs. Pricing is customized for each project. Contact us for a detailed quotation." },
  { q: "Are plants, materials, and installation included?", a: "Yes! Our pricing includes everything: structural framework, waterproofing, drip irrigation setup, premium plants or panels, mounting hardware, and professional installation by our trained team." },
  { q: "Do you provide maintenance services?", a: "Yes, we offer monthly and seasonal maintenance plans to keep your vertical garden lush, healthy, and beautiful. Our AMC plans include regular visits, fertilization, pruning, and irrigation checks." },
  { q: "How long does installation take?", a: "A standard residential vertical garden (50–100 sq ft) takes 1–2 days. Larger commercial projects (500+ sq ft) take 3–7 days. We provide a detailed timeline after the site visit." },
  { q: "Do you offer a free site visit?", a: "Yes! We offer complimentary site visits. Our designer will assess your space, suggest plant options, and provide pricing on the spot, with no obligation." },
  { q: "Can I install a vertical garden indoors?", a: "Yes, indoor vertical gardens are highly popular! We use specific indoor plant varieties that thrive in lower light. Alternatively, our Artificial or Preserved Moss walls require zero sunlight and are perfect for any indoor space." },
  { q: "Will a vertical garden damage my wall?", a: "Not at all. We use specialized waterproof backing boards and framing systems that create a protective barrier between the plants and your wall. This ensures your wall stays completely dry and safe from moisture." },
];

export type Product = { title: string; image: string; alt: string; href: string; cta: string };

export const PRODUCTS: Product[] = [
  { title: "Artificial Plants", image: "/images/products/premium-artificial-plants-india-vertical-garden-india.webp", alt: "Premium artificial vertical garden plants for Indian homes and offices", href: "/services/artificial-vertical-garden", cta: "See the catalogue" },
  { title: "Indoor Plants", image: "/images/products/air-purifying-indoor-plants-india-vertical-garden-india.webp", alt: "Air-purifying indoor plants for vertical gardens in India", href: "/services/natural-vertical-garden", cta: "See the plants" },
  { title: "Creepers & Vines", image: "/images/products/natural-creepers-vines-green-wall-vertical-garden-india.webp", alt: "Natural creepers and vines for green wall installations", href: "/services/natural-vertical-garden", cta: "See the plants" },
  { title: "Premium Planters", image: "/images/products/designer-premium-planters-india-vertical-garden-india.webp", alt: "Designer planters for vertical garden setups in Uttar Pradesh", href: "/services/balcony-garden", cta: "Balcony gardens" },
  { title: "Preserved Moss", image: "/images/products/preserved-moss-panels-luxury-india.webp", alt: "Preserved moss panels for luxury moss wall art India", href: "/services/moss-wall", cta: "Learn more" },
  { title: "Corporate Gifting", image: "/images/products/corporate-green-gifting-plants-india-vertical-garden-india.webp", alt: "Corporate green gifting ideas with plants India", href: "/corporate-gifting", cta: "Enquire" },
];

export const PORTFOLIO: { tag: string; title: string; body: string; image: string }[] = [
  { tag: "Residential", title: "Urban Balcony Sanctuaries", body: "Complete makeovers for private terraces.", image: "/images/portfolio/urban-balcony-vertical-garden-india.webp" },
  { tag: "Interior design", title: "Preserved Moss Art", body: "Zero-maintenance green art for luxury living.", image: "/images/portfolio/premium-moss-art-wall-design.webp" },
  { tag: "Commercial", title: "Corporate Green Spaces", body: "Inspiring vertical gardens for office lobbies.", image: "/images/portfolio/corporate-office-green-wall-india-vertical-garden-india.webp" },
  { tag: "Natural", title: "Live Vertical Gardens", body: "Breathing, air-purifying natural plant walls.", image: "/images/portfolio/live-natural-vertical-garden-project.webp" },
  { tag: "Maintenance-free", title: "Artificial Landscaping", body: "Hyper-realistic faux greenery for tricky spaces.", image: "/images/portfolio/artificial-green-wall-commercial-india-vertical-garden-india.webp" },
  { tag: "Before & after", title: "Magical Transformations", body: "See our stunning before and after projects.", image: "/images/portfolio/vertical-garden-transformation-india.webp" },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT = {
  kicker: "Who we are",
  title: "Creating luxurious green spaces that <em>inspire.</em>",
  lede:
    "At Satriva, we transform ordinary spaces into premium green environments through innovative vertical gardens, balcony designs, and modern landscaping solutions.",
  image: "/images/about-hero-vertical-garden-india.webp",
  storyKicker: "Our journey",
  storyTitle: "Our journey to make green India",
  story: [
    "At Satriva, our journey began with a simple but profound passion for greenery. We realized that as our cities grew, our connection with nature was rapidly fading. We set out to change that.",
    "We believe in bringing nature back into urban spaces without compromising on luxury or aesthetic appeal. Every project we undertake is an opportunity to create a stunning, breathable, and vibrant outdoor experience.",
    "Uncompromising quality, innovative design, and seamless execution. From the smallest balcony to the grandest corporate facade, we treat every space as a canvas for natural art.",
  ],
  storyImage: "/images/vertical-garden-company-india-about.webp",
  philosophyKicker: "Design philosophy",
  philosophyTitle: "Nature meets modern design",
  philosophyBody:
    "We do not just install plants; we curate experiences. Our design philosophy bridges the gap between raw natural beauty and refined architectural elegance.",
  philosophy: [
    "Luxury greenery aesthetics",
    "Highly functional outdoor spaces",
    "Minimal, modern, clean designs",
    "Sustainable green environments",
    "Biophilic design approach",
  ],
  servicesKicker: "What we do",
  servicesTitle: "Our core expertise",
  servicesBody:
    "From lush living walls to zero-maintenance artificial setups, we provide end-to-end luxury greenery solutions.",
  services: [
    { title: "Natural Vertical Gardens", body: "Living, breathing bio-walls that purify air.", href: "/services/natural-vertical-garden" },
    { title: "Artificial Green Walls", body: "Zero maintenance synthetic foliage panels.", href: "/services/artificial-vertical-garden" },
    { title: "Moss Walls", body: "Premium preserved moss art and custom branding.", href: "/services/moss-wall" },
    { title: "Balcony Gardens", body: "Turn your apartment balcony into a luxury retreat.", href: "/services/balcony-garden" },
    { title: "Landscape Consultation", body: "Expert advice for villas and commercial spaces.", href: "/services/landscape-consultation" },
    { title: "Related Services", body: "Some related services from our expert team.", href: "/services/related-services" },
  ],
  processKicker: "Our process",
  processTitle: "How we execute perfection",
  process: [
    { title: "Understanding your space", body: "We begin with a thorough consultation to understand your vision, requirements, and spatial constraints." },
    { title: "Design planning", body: "Our architects create custom layouts, 3D visualizations, and select the perfect plant palette." },
    { title: "Material selection", body: "We source premium materials, from natural plants to preserved moss and high-grade WPC decking." },
    { title: "Professional installation", body: "Our expert team executes the design with precision, ensuring waterproofing and structural integrity." },
    { title: "Final finishing and support", body: "We ensure everything is perfect, provide maintenance guidelines, and offer AMC support." },
  ] as Item[],
  whyKicker: "Why choose us",
  whyTitle: "The Satriva difference",
  why: [
    { title: "500+ projects completed", body: "A proven track record of successful luxury installations across India." },
    { title: "Customized design solutions", body: "Every project is tailored specifically to your space and aesthetic preferences." },
    { title: "Premium material quality", body: "From preserved moss to UV-resistant artificial foliage, we use only the best." },
    { title: "Expert installation team", body: "Our highly trained professionals ensure flawless execution." },
    { title: "End-to-end execution", body: "We manage everything from conceptualization to final installation and support." },
    { title: "Across Uttar Pradesh", body: "Prompt and reliable service in Lucknow, Kanpur, Noida, Agra, Varanasi and more." },
  ] as Item[],
  projectsKicker: "Projects showcase",
  projectsTitle: "See the transformative difference our professional designs make",
  projects: [
    { title: "Luxury Balcony Garden", tag: "Balcony Garden", image: "/images/portfolio/urban-balcony-vertical-garden-india.webp" },
    { title: "Corporate Moss Wall", tag: "Moss Wall", image: "/images/portfolio/premium-moss-art-wall-design.webp" },
  ],
};

/* ------------------------------------------------------------------ */
/* Installation process                                                */
/* ------------------------------------------------------------------ */

export const INSTALL = {
  kicker: "Expert execution",
  title: "Professional <em>installation services.</em>",
  lede:
    "From luxury balcony gardens to premium vertical greenery installations, we deliver flawless execution with expert craftsmanship and attention to every detail.",
  badges: ["500+ Installations", "Expert Installation Team", "Premium Materials", "End-to-End Execution"],
  servicesKicker: "What we install",
  servicesTitle: "Our installation",
  servicesLede:
    "From living walls to complete landscape makeovers, we deliver flawless, end-to-end installation services with expert craftsmanship.",
  services: [
    { title: "Natural Vertical Garden Installation", body: "Living walls with automated irrigation, waterproofing layers, and carefully curated plant selection for lasting greenery.", href: "/services/natural-vertical-garden" },
    { title: "Artificial Vertical Garden Installation", body: "UV-protected premium panels with secure frame mounting, delivering maintenance-free green walls that last for years.", href: "/services/artificial-vertical-garden" },
    { title: "Moss Wall Installation", body: "Preserved moss artworks and biophilic branding walls with custom logos, zero maintenance, and luxurious acoustic benefits.", href: "/services/moss-wall" },
    { title: "Balcony Garden Installation", body: "Complete balcony transformations including flooring, vertical gardens, planters, lighting, and decorative styling.", href: "/services/balcony-garden" },
    { title: "Artificial Grass Installation", body: "High-density, drainage-friendly synthetic turf for balconies, terraces, rooftops, and outdoor entertainment areas.", href: "/services/related-services" },
    { title: "Landscape Installation", body: "End-to-end outdoor landscaping including pergolas, deck flooring, softscape planting, and hardscape structures.", href: "/services/landscape-consultation" },
  ],
  processKicker: "Our methodology",
  processTitle: "Installation process",
  processLede: "Every service follows a refined, step-by-step process to ensure flawless results.",
  processes: [
    {
      name: "Natural Vertical Garden",
      steps: [
        { title: "Site inspection", body: "Thorough evaluation of the wall structure, space, and environmental conditions." },
        { title: "Sunlight analysis", body: "Careful assessment of light exposure to select the ideal plant varieties." },
        { title: "Waterproof layer setup", body: "Industrial-grade waterproofing membrane applied to protect walls from moisture." },
        { title: "Frame installation", body: "Precision mounting of modular framework with secure wall anchoring systems." },
        { title: "Irrigation setup", body: "Automated drip irrigation system connected with timer and water source." },
        { title: "Plant installation", body: "Carefully placing and positioning each plant for optimal growth and aesthetics." },
        { title: "Final testing", body: "Comprehensive system check: water flow, drainage, and plant health verified." },
      ],
    },
    {
      name: "Artificial Vertical Garden",
      steps: [
        { title: "Site measurement", body: "Laser-precise measurements of the wall surface area and layout." },
        { title: "Design selection", body: "Choose from our premium catalog of UV-protected artificial foliage panels." },
        { title: "Frame installation", body: "Secure mounting of the structural framework tailored to wall dimensions." },
        { title: "Panel fixing", body: "Precision fitting of interlocking artificial panels for seamless coverage." },
        { title: "Decorative styling", body: "Layering varied foliage textures and densities for a natural, organic look." },
        { title: "Final finishing", body: "Edge trimming, quality checks, and site cleanup for a flawless handover." },
      ],
    },
    {
      name: "Moss Wall",
      steps: [
        { title: "Design consultation", body: "Understanding your vision, space, and branding requirements for the moss artwork." },
        { title: "Moss selection", body: "Curating premium preserved moss varieties: reindeer, flat, pole, and mood moss." },
        { title: "Frame preparation", body: "Custom frame fabrication with precise cutouts for logos and design patterns." },
        { title: "Moss installation", body: "Artisan hand-placement of preserved moss with careful color composition." },
        { title: "Logo and lighting setup", body: "Integrating backlit company branding and ambient accent lighting." },
        { title: "Final handover", body: "Quality assurance, alignment verification, and professional handover." },
      ],
    },
    {
      name: "Balcony Garden",
      steps: [
        { title: "Balcony inspection", body: "Structural assessment, waterproofing checks, and drainage evaluation." },
        { title: "Flooring installation", body: "Premium WPC decking, artificial grass, or stone tile flooring installation." },
        { title: "Vertical garden setup", body: "Mounting vertical planters or green wall panels on balcony walls." },
        { title: "Planter placement", body: "Strategic positioning of custom planters, raised beds, and railing pots." },
        { title: "Lighting and decor setup", body: "Warm ambient lighting, pebble accents, and decorative elements added." },
        { title: "Final styling", body: "Complete styling pass: furniture, accessories, and finishing touches." },
      ],
    },
  ] as { name: string; steps: Item[] }[],
  materialsKicker: "Uncompromising quality",
  materialsTitle: "Premium installation materials and quality craftsmanship",
  materialsLede:
    "We source the finest materials globally to ensure our installations are not only visually stunning but also built to withstand the test of time and weather.",
  materials: [
    { title: "Waterproof materials", body: "Industrial-grade membranes and sealants for zero-seepage wall protection." },
    { title: "UV-resistant materials", body: "Premium UV-stabilized foliage and coatings that resist fading in direct sunlight." },
    { title: "Premium foliage", body: "Hand-selected live plants and high-density artificial greenery panels for rich texture." },
    { title: "Strong framework", body: "Commercial-grade galvanized steel and aluminum frames built for structural integrity." },
    { title: "Long-lasting installation", body: "Engineered durability: our installations are designed to last 5–10+ years with minimal upkeep." },
  ] as Item[],
  warranty: "Years warranty on all premium installations",
  whyKicker: "Why choose us",
  whyTitle: "Why choose our installation team?",
  whyLede: "With 500+ successful installations, our team delivers unmatched craftsmanship and professional excellence.",
  why: [
    { title: "Expert installers", body: "Our in-house team of trained professionals ensures flawless execution with meticulous attention to every detail." },
    { title: "Premium materials", body: "We source only the finest commercial-grade materials for durability, longevity, and a luxurious finish." },
    { title: "Clean finishing", body: "We leave your space spotless: every edge refined, every surface polished, and every detail perfected." },
    { title: "Fast execution", body: "Efficient project timelines with rapid installation turnaround without compromising on quality or precision." },
    { title: "Waterproof systems", body: "Zero-seepage waterproofing layers and drainage systems protect your walls and floors completely." },
    { title: "Customized installation", body: "Every project is tailored to your exact requirements: bespoke designs, dimensions, and material choices." },
  ] as Item[],
  projectsKicker: "Installation showcase",
  projectsLede:
    "See the transformative difference our professional installation team makes, before and after every project.",
  projectTitles: [
    "Luxury Balcony Transformation",
    "Office Reception Green Wall",
    "Corporate Moss Wall Branding",
    "Villa Outdoor Landscaping",
    "Penthouse Terrace Garden",
    "Restaurant Living Wall",
  ],
  faqs: [
    { q: "How long does installation take?", a: "Most balcony and vertical garden installations are completed within 2 to 4 days, depending on the scale of the project. Larger landscape installations can take 1–2 weeks." },
    { q: "Is waterproofing included in the installation?", a: "Yes, all our natural vertical garden and balcony installations include a 100% zero-seepage waterproof backing system to protect your walls and floors completely." },
    { q: "Do you offer post-installation maintenance?", a: "Absolutely. We offer Annual Maintenance Contracts (AMC) for all our living walls and outdoor landscapes to ensure they stay healthy, lush, and pristine year-round." },
    { q: "What is the installation cost?", a: "Costs vary based on the size, materials (natural vs. artificial), and design complexity. We provide a comprehensive, transparent quote after a free site inspection." },
    { q: "Can installations be fully customized?", a: "Yes, 100% customization is our specialty. From plant selection and moss wall logos to custom pergolas and deck flooring, we design everything to your exact specifications." },
    { q: "Is installation included in the project pricing?", a: "Yes, our project quotations are comprehensive and include all materials, labor, installation, and finishing costs: no hidden charges." },
  ] as Faq[],
};

/* ------------------------------------------------------------------ */
/* FAQ page                                                            */
/* ------------------------------------------------------------------ */

export const FAQ_GROUPS: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: "general",
    title: "General Questions",
    faqs: [
      { q: "What services do you offer?", a: "We offer a wide range of premium greenery solutions including Natural and Artificial Vertical Gardens, Moss Walls, Balcony Gardens, and comprehensive Landscape Consultation." },
      { q: "Which cities do you serve?", a: "We serve cities across Uttar Pradesh, including Lucknow, Kanpur, Noida, Ghaziabad, Agra, Varanasi, Prayagraj, Meerut, Gorakhpur and more. See the Locations page for the full list." },
      { q: "Do you provide free site visits?", a: "Yes, we provide free initial site visits and consultations across Uttar Pradesh to understand your space and requirements." },
      { q: "How can I get a quotation?", a: "You can get a quotation by booking a free consultation through our website, calling us directly, or sending your requirements via WhatsApp." },
      { q: "Do you handle commercial projects?", a: "Absolutely. We specialize in both residential and large-scale commercial landscaping, including corporate offices, hotels, and retail spaces." },
      { q: "Do you work outside Uttar Pradesh?", a: "For larger commercial and residential projects we can travel beyond Uttar Pradesh. Contact us with your location and requirements." },
    ],
  },
  {
    id: "natural-vertical-garden",
    title: "Natural Vertical Garden",
    faqs: [
      { q: "What is a natural vertical garden?", a: "A natural vertical garden is a professionally designed living wall system where real plants grow vertically on a supported structure, complete with built-in irrigation." },
      { q: "Will it cause wall dampness?", a: "No. Our premium installations include a robust waterproofing layer and an air gap between the wall and the garden structure, completely preventing any dampness." },
      { q: "How does the irrigation system work?", a: "We install a fully automated drip irrigation system that connects directly to a water source and timer, ensuring each plant receives the precise amount of water needed without manual effort." },
      { q: "Which plants are best for vertical gardens?", a: "The plant selection depends on the lighting conditions of your space. We carefully select hardy, air-purifying varieties like Pothos, Philodendrons, Ferns, and Syngoniums for best results." },
      { q: "How much maintenance is required?", a: "Natural vertical gardens require regular maintenance including pruning, fertilizing, and checking the irrigation system. We offer comprehensive AMC (Annual Maintenance Contracts) to handle this for you." },
      { q: "What is the average cost?", a: "The cost varies based on the size, plant selection, and structural requirements. Contact us for a customized quotation based on your specific needs." },
      { q: "Can it be installed indoors?", a: "Yes! With proper grow lights and appropriate indoor plant selection, natural vertical gardens thrive beautifully indoors." },
      { q: "How long does installation take?", a: "A standard residential vertical garden typically takes 2-4 days to install, depending on the size and complexity." },
    ],
  },
  {
    id: "artificial-vertical-garden",
    title: "Artificial Vertical Garden",
    faqs: [
      { q: "Does artificial vertical garden fade in sunlight?", a: "We use high-quality, UV-protected artificial foliage designed specifically to resist fading, even in direct sunlight." },
      { q: "Is it waterproof?", a: "Yes, our artificial green walls are completely waterproof and designed to withstand all weather conditions, including heavy rain." },
      { q: "Can it be installed outdoors?", a: "Absolutely. It is an excellent low-maintenance solution for exterior walls, facades, and outdoor boundaries." },
      { q: "How long does artificial greenery last?", a: "Our premium artificial installations typically last 4-6 years outdoors and even longer indoors with proper care." },
      { q: "Is it washable?", a: "Yes. You can easily wash artificial vertical gardens with a gentle hose spray to remove dust and keep them looking fresh." },
      { q: "Does it require maintenance?", a: "It requires zero horticultural maintenance: no watering, pruning, or fertilizing. Just occasional dusting or washing is needed." },
      { q: "What is the cost per sqft?", a: "Pricing depends on the density and quality of the foliage panels selected. Please reach out for our current catalog and pricing." },
    ],
  },
  {
    id: "moss-wall",
    title: "Moss Wall",
    faqs: [
      { q: "Is moss wall made from real moss?", a: "Yes, we use 100% real moss that has been sustainably harvested and preserved using a natural, eco-friendly process." },
      { q: "Does moss require water?", a: "No! Preserved moss requires zero water, misting, or sunlight. Watering it will actually damage the preservation." },
      { q: "How long does preserved moss last?", a: "When kept indoors away from direct sunlight and high humidity, preserved moss walls can last 5-10 years or more." },
      { q: "Does moss wall attract insects?", a: "No. The preservation process removes any moisture and nutrients that would attract insects, making it completely bug-free." },
      { q: "Is moss wall suitable for offices?", a: "It is perfect for offices! It requires no maintenance, absorbs sound, and provides a stunning, premium aesthetic for receptions and boardrooms." },
      { q: "Can moss walls include company logos?", a: "Absolutely. We specialize in custom biophilic branding, integrating company logos and signage directly into the moss design." },
      { q: "Is moss wall maintenance-free?", a: "Yes, it is 100% maintenance-free. Just avoid touching it frequently and keep it out of direct sunlight." },
    ],
  },
  {
    id: "balcony-garden",
    title: "Balcony Garden",
    faqs: [
      { q: "Can small balconies be transformed?", a: "Yes! We specialize in maximizing small spaces using vertical planting, custom planters, and smart layouts to create your personal oasis." },
      { q: "Which plants are best for balconies?", a: "We select plants based on your balcony's sunlight exposure. Sunny balconies get sun-loving flowering plants, while shaded ones get lush tropical foliage." },
      { q: "Do you provide balcony flooring?", a: "Yes, we provide premium outdoor flooring options including weather-resistant wooden deck tiles, WPC flooring, and high-density artificial grass." },
      { q: "Can artificial grass be installed?", a: "Yes, we install high-quality, drainage-friendly artificial grass that is soft to the touch and easy to clean." },
      { q: "Do you provide lighting and decor?", a: "Our comprehensive balcony makeovers include ambient outdoor lighting, pebbles, seating solutions, and decorative elements." },
      { q: "What is the maintenance requirement?", a: "Maintenance depends on the ratio of natural to artificial elements. We design our natural balconies to be low-maintenance and can install automated drip irrigation." },
      { q: "What is the average balcony garden cost?", a: "Costs vary widely based on the size and elements chosen (flooring, vertical gardens, planters). Book a consultation for a customized estimate." },
    ],
  },
  {
    id: "landscape-consultation",
    title: "Landscape Consultation",
    faqs: [
      { q: "What is included in landscape consultation?", a: "Our consultation includes site analysis, spatial planning, plant selection recommendations, and aesthetic concept development tailored to your vision." },
      { q: "Do you provide 2D/3D designs?", a: "Yes, we provide detailed 2D layouts and photorealistic 3D renders so you can visualize the final result before execution begins." },
      { q: "Can consultation be done online?", a: "Yes, we offer online consultations for clients outside our immediate service area or those who prefer a virtual first step." },
      { q: "Do you execute landscaping projects?", a: "Yes, we offer end-to-end services. After the design phase, our expert team will seamlessly execute and install the entire project." },
      { q: "What is the consultation cost?", a: "Initial basic consultations are free. Detailed 2D/3D design and comprehensive landscape planning are charged based on the project scale." },
      { q: "How long does planning take?", a: "A complete landscape design phase usually takes 1-3 weeks, depending on the complexity of the project and revision cycles." },
    ],
  },
  {
    id: "installation",
    title: "Installation",
    faqs: [
      { q: "How long does installation take?", a: "Installation timelines vary. A balcony or standard vertical garden takes 2-4 days, while larger landscape projects may take a few weeks." },
      { q: "Is waterproofing included?", a: "Yes, rigorous waterproofing and wall protection are standard inclusions in all our vertical garden installations." },
      { q: "Do you provide customized installations?", a: "Absolutely. Every project we undertake is fully customized to fit the exact dimensions and aesthetic requirements of your space." },
      { q: "Is installation included in pricing?", a: "Yes, our project quotations are comprehensive and include all materials, labor, and installation costs." },
      { q: "Do you provide post-installation support?", a: "Yes, we provide an initial warranty period and thorough handover instructions to ensure your greenery thrives." },
      { q: "Do you offer maintenance after installation?", a: "Yes, we offer ongoing maintenance packages (AMC) to keep your natural installations looking pristine year-round." },
    ],
  },
  {
    id: "maintenance-services",
    title: "Maintenance Services",
    faqs: [
      { q: "Do you provide AMC services?", a: "Yes, we provide comprehensive Annual Maintenance Contracts for vertical gardens, balconies, and complete landscapes." },
      { q: "How often is maintenance required?", a: "For natural vertical gardens and landscapes, we typically schedule weekly or bi-weekly maintenance visits depending on the plant types." },
      { q: "Do you provide plant replacement?", a: "Yes, our AMC packages can include provisions for replacing plants that naturally expire, ensuring the garden always looks full." },
      { q: "Can you upgrade existing gardens?", a: "Certainly. We can revitalize, redesign, or upgrade existing gardens that were installed by others." },
      { q: "Do you maintain artificial greenery?", a: "Artificial greenery requires minimal maintenance, but we do offer deep cleaning and structural check-up services upon request." },
      { q: "Do you provide irrigation maintenance?", a: "Yes, checking and clearing the automated drip irrigation system is a core part of our regular maintenance visits." },
    ],
  },
  {
    id: "pricing-payments",
    title: "Pricing & Payments",
    faqs: [
      { q: "How is pricing calculated?", a: "Pricing is calculated based on the total square footage, the type of system (natural/artificial/moss), plant density, and site complexity." },
      { q: "What factors affect project cost?", a: "Key factors include materials chosen, the need for custom fabrication, accessibility of the site, and the scale of the automated irrigation required." },
      { q: "Is site visit free?", a: "Yes, the first site visit and consultation across Uttar Pradesh are completely free of charge." },
      { q: "Do you provide customized quotations?", a: "Yes, after a site visit or detailed discussion, we provide a fully itemized, customized quotation." },
      { q: "What payment methods are accepted?", a: "We accept all major payment methods including Bank Transfers (NEFT/RTGS), UPI, Cheques, and major Credit/Debit cards." },
      { q: "Is advance payment required?", a: "Yes, to initiate material procurement and block our installation team's calendar, a standard advance payment is required upon order confirmation." },
    ],
  },
];

export const generalFaqs: Faq[] = HOME_FAQS;

/* ------------------------------------------------------------------ */
/* Contact, quote and other pages                                      */
/* ------------------------------------------------------------------ */

export const CONTACT_FAQS: Faq[] = [
  { q: "Is site visit free?", a: "Yes, our initial site visit and consultation across Uttar Pradesh is completely free of charge. Our expert will assess your space and provide recommendations." },
  { q: "How soon can work start?", a: "Depending on the scale of the project, we typically commence work within 48-72 hours after design approval and material selection." },
  { q: "Do you work outside Uttar Pradesh?", a: "For large-scale commercial and residential projects we can travel beyond Uttar Pradesh. Contact us with your location and requirements." },
  { q: "What services do you offer?", a: "We specialize in Natural & Artificial Vertical Gardens, Moss Walls, Terrace Landscaping, Balcony Makeovers, and comprehensive Garden Maintenance." },
];

export const CONTACT_PAGE = {
  kicker: "Contact us",
  title: "Your dream green space <em>starts here.</em>",
  lede:
    "Get in touch with our team for premium vertical gardens, balcony transformations, moss walls, landscaping, and greenery solutions. Fill out the form and our design experts will get back to you within 24 hours.",
  closing: "Contact us today to turn your vision into a living masterpiece.",
};

export const QUOTE_PAGE = {
  kicker: "Free quote",
  title: "Get your free, <em>no-obligation quote.</em>",
  lede:
    "Tell us about your space and we'll send back a transparent, itemised quote. No site visit required to get started.",
  steps: [
    { title: "Share your space", body: "Tell us about your area, budget and the look you want." },
    { title: "Free site visit", body: "Our expert visits, measures the space and checks sunlight." },
    { title: "Get a fixed quote", body: "A transparent, itemised quote: no hidden costs, ever." },
  ] as Item[],
  benefitsTitle: "What you get, free",
  benefits: [
    { title: "Itemised, fixed quote", body: "No vague estimates: a clear price breakdown." },
    { title: "No-obligation advice", body: "Zero pressure to proceed after your quote." },
    { title: "Plant and material suggestions", body: "Matched to your light, space and budget." },
    { title: "24-hour turnaround", body: "Most quotes are back in your inbox within a day." },
  ] as Item[],
  talkTitle: "Prefer to talk it through?",
  talkBody:
    "Call or WhatsApp our team directly. We're happy to talk through your space before you fill out a form.",
  talkHours: "Mon – Sun, 9AM – 8PM",
  formNote: "The more detail you share, the more accurate your quote. Our team typically responds within 24 hours.",
  propertyTypes: ["Residential", "Commercial", "Café / Retail"],
  budgets: ["Under ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000", "Above ₹3,00,000", "Not sure yet"],
};

export const GIFTING = {
  kicker: "Corporate gifting",
  title: "Green gifts for <em>your people.</em>",
  lede:
    "Corporate green gifting with plants: pick the gift, the occasion and how you would like it personalised, then send us your requirement.",
  giftTypes: ["Indoor Plants", "Outdoor Plants", "Gift Hamper"],
  occasions: ["Employee Appreciation", "Client Gifts", "Festival Gifts", "Corporate Events", "Welcome Kits", "Anniversary"],
  customizations: ["Company Logo on Planter", "Custom Packaging", "Personalized Message/Card", "Branding Sleeve/Sticker"],
  image: "/images/products/corporate-green-gifting-plants-india-vertical-garden-india.webp",
};

export const SERVICE_AREAS_PAGE = {
  kicker: "Our locations",
  title: "Serving premium green spaces across <em>Uttar Pradesh.</em>",
  lede:
    "We provide luxury vertical gardens, balcony gardens, moss walls, artificial greenery, and landscaping solutions across Uttar Pradesh, including Lucknow, Kanpur, Noida, Agra, Varanasi and Prayagraj.",
  more: "Looking for greenery solutions in your city? Share your area with us. We are adding more Uttar Pradesh cities regularly.",
};

export const DESIGN_IDEAS_PAGE = {
  kicker: "Design ideas and project showcase",
  title: "Design ideas and <em>project showcase.</em>",
  lede:
    "Explore luxury greenery concepts, balcony transformations, moss walls, and architectural outdoor inspirations crafted by our expert design team.",
  closingTitle: "Get a similar installation",
  closing:
    "Every project begins with a conversation. Let us understand your vision and bring it to life with premium craftsmanship.",
};
