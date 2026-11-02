export interface ShowcaseProject {
  id: string;
  title: string;
  location: string;
  category: string;
  area: string;
  story: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  materials: string[];
  duration: string;
  featured?: boolean;
}

export const showcaseCategories = [
  "All",
  "Balcony Gardens",
  "Moss Walls",
  "Vertical Gardens",
  "Outdoor Landscaping",
  "Luxury Spaces",
  "Commercial",
  "Residential",
];

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "1",
    title: "Luxury Penthouse Terrace Garden",
    location: "DLF Phase V, Gurgaon",
    category: "Balcony Gardens",
    area: "350 sq ft",
    story:
      "A complete transformation of a bare concrete terrace into a tropical retreat with premium WPC decking, automated irrigation, and ambient lighting.",
    image: "/images/products/moss.webp",
    beforeImage: "/images/services/premium-artificial-green-wall-india-landscape-design-india.webp",
    afterImage: "/images/products/moss.webp",
    materials: [
      "WPC Decking",
      "Automated Drip Irrigation",
      "LED Ambient Lights",
      "Custom Planters",
    ],
    duration: "5 Days",
    featured: true,
  },
  {
    id: "2",
    title: "Corporate Reception Living Wall",
    location: "Sector 62, Noida",
    category: "Vertical Gardens",
    area: "200 sq ft",
    story:
      "A dramatic biophilic living wall transforming a sterile corporate lobby into a warm, inviting, and air-purifying green focal point.",
    image: "/images/services/natural-vertical-garden-living-wall.webp",
    beforeImage: "/images/portfolio/corporate-office-green-wall-india-vertical-garden-india.webp",
    afterImage: "/images/services/professional-landscape-consultation-india.webp",
    materials: [
      "Waterproofing Membrane",
      "Galvanized Frame",
      "Auto Irrigation",
      "Air-Purifying Plants",
    ],
    duration: "3 Days",
    featured: true,
  },
  {
    id: "3",
    title: "Boardroom Moss Wall with Branding",
    location: "Connaught Place, Delhi",
    category: "Moss Walls",
    area: "120 sq ft",
    story:
      "A preserved moss art installation with integrated backlit company logo for a premium boardroom experience.",
    image: "/images/portfolio/corporate-office-green-wall-india-vertical-garden-india.webp",
    beforeImage: "/images/portfolio/corporate-office-green-wall-india-vertical-garden-india.webp",
    afterImage: "/images/services/professional-landscape-consultation-india.webp",
    materials: ["Preserved Reindeer Moss", "Flat Moss", "LED Backlight", "Custom Frame"],
    duration: "2 Days",
    featured: true,
  },
  {
    id: "4",
    title: "Cafe Exterior Green Facade",
    location: "Hauz Khas, Delhi",
    category: "Artificial Greenery",
    area: "300 sq ft",
    story:
      "UV-protected artificial foliage panels covering a cafe exterior, creating an Instagram-worthy green aesthetic.",
    image: "/images/services/professional-landscape-consultation-india.webp",
    beforeImage: "/images/services/professional-landscape-consultation-india.webp",
    afterImage: "/images/services/professional-landscape-consultation-india.webp",
    materials: ["UV-Protected Panels", "Steel Frame", "Decorative Accents"],
    duration: "2 Days",
  },
  {
    id: "5",
    title: "Villa Landscape with Pergola",
    location: "Golf Course Road, Gurgaon",
    category: "Outdoor Landscaping",
    area: "800 sq ft",
    story:
      "A complete outdoor landscape transformation featuring a custom pergola, stone pathways, water features, and lush planting.",
    image: "/images/services/luxury-balcony-garden-makeover-india-landscape-design-india.webp",
    beforeImage: "/images/portfolio/vertical-garden-transformation-india.webp",
    afterImage: "/images/services/luxury-balcony-garden-makeover-india-landscape-design-india.webp",
    materials: ["Teak Pergola", "Natural Stone", "Landscape Lighting", "Drip Irrigation"],
    duration: "12 Days",
  },
  {
    id: "6",
    title: "Compact Balcony Oasis",
    location: "Sector 50, Noida",
    category: "Residential",
    area: "60 sq ft",
    story:
      "Proving that even the smallest balcony can become a lush retreat with smart vertical solutions and premium artificial grass.",
    image: "/images/services/premium-artificial-green-wall-india-landscape-design-india.webp",
    beforeImage: "/images/services/premium-artificial-green-wall-india-landscape-design-india.webp",
    afterImage: "/images/portfolio/live-natural-vertical-garden-project.webp",
    materials: ["Artificial Grass", "Vertical Planters", "String Lights", "Pebbles"],
    duration: "2 Days",
  },
  {
    id: "7",
    title: "Hotel Lobby Green Corridor",
    location: "Aerocity, Delhi",
    category: "Commercial",
    area: "500 sq ft",
    story:
      "A grand biophilic corridor connecting the hotel lobby to event halls, featuring a mix of natural and artificial greenery.",
    image: "/images/services/professional-landscape-consultation-india.webp",
    beforeImage: "/images/portfolio/corporate-office-green-wall-india-vertical-garden-india.webp",
    afterImage: "/images/services/professional-landscape-consultation-india.webp",
    materials: ["Living Plants", "Artificial Accent Panels", "Spot Lighting", "Custom Pots"],
    duration: "8 Days",
  },
  {
    id: "8",
    title: "Luxury Living Room Green Wall",
    location: "Greater Kailash, Delhi",
    category: "Luxury Spaces",
    area: "150 sq ft",
    story:
      "An indoor preserved moss and living plant wall creating a stunning focal point in a high-end residential living room.",
    image: "/images/portfolio/live-natural-vertical-garden-project.webp",
    beforeImage: "/images/services/natural-vertical-garden-living-wall.webp",
    afterImage: "/images/portfolio/live-natural-vertical-garden-project.webp",
    materials: ["Preserved Moss", "Pothos", "Ferns", "Custom Oak Frame"],
    duration: "3 Days",
  },
];

export const masonryImages = [
  {
    src: "/images/services/natural-vertical-garden-living-wall.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/services/premium-artificial-green-wall-india-landscape-design-india.webp",
    alt: "Balcony Oasis",
    category: "Balcony Gardens",
    size: "normal" as const,
  },
  {
    src: "/images/portfolio/corporate-office-green-wall-india-vertical-garden-india.webp",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "wide" as const,
  },
  {
    src: "/images/services/professional-landscape-consultation-india.webp",
    alt: "Artificial Green Wall",
    category: "Artificial Greenery",
    size: "normal" as const,
  },
  {
    src: "/images/portfolio/vertical-garden-transformation-india.webp",
    alt: "Landscape Project",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/services/luxury-balcony-garden-makeover-india-landscape-design-india.webp",
    alt: "Pergola Deck",
    category: "Outdoor Landscaping",
    size: "normal" as const,
  },
  {
    src: "/images/products/moss.webp",
    alt: "Terrace Garden",
    category: "Balcony Gardens",
    size: "normal" as const,
  },
  {
    src: "/images/services/professional-landscape-consultation-india.webp",
    alt: "Green Corridor",
    category: "Luxury Spaces",
    size: "wide" as const,
  },
  {
    src: "/images/portfolio/live-natural-vertical-garden-project.webp",
    alt: "Indoor Greenery",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/services/professional-landscape-consultation-india.webp",
    alt: "Artificial Grass",
    category: "Artificial Greenery",
    size: "normal" as const,
  },
  {
    src: "/images/services/natural-vertical-garden-living-wall.webp",
    alt: "Green Decor",
    category: "Vertical Gardens",
    size: "normal" as const,
  },
  {
    src: "/images/lush-green-garden-landscape-india.webp",
    alt: "Outdoor Greenery",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
];
