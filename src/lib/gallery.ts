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
    image: "/images/services/aft-1-landscape-design-india.webp",
    beforeImage: "/images/services/bef-1-landscape-design-india.webp",
    afterImage: "/images/services/aft(1).webp",
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
    image: "/images/services/aft-2-landscape-design-india.webp",
    beforeImage: "/images/services/bef-2-landscape-design-india.webp",
    afterImage: "/images/services/aft-2-landscape-design-india.webp",
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
    image: "/images/services/aft-3-landscape-design-india.webp",
    beforeImage: "/images/services/bef-3-landscape-design-india.webp",
    afterImage: "/images/services/aft-3-landscape-design-india.webp",
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
    image: "/images/services/aft-4-landscape-design-india.webp",
    beforeImage: "/images/services/bef-4-landscape-design-india.webp",
    afterImage: "/images/services/aft-4-landscape-design-india.webp",
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
    image: "/images/services/aft-5-landscape-design-india.webp",
    beforeImage: "/images/services/bef-5-landscape-design-india.webp",
    afterImage: "/images/services/aft-5-landscape-design-india.webp",
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
    src: "/images/portfolio/dsWhatsApp Image 2026-09-07 at 9.42.31 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.28 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.28 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.29 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.30 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.30 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.31 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.31 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.32 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.32 PM (2).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.32 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.33 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.33 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.34 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.34 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/dsWhatsApp Image 2026-09-07 at 9.42.31 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },

  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.32 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.33 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.33 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.34 PM (1).jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.42.34 PM.jpeg",
    alt: "Vertical Garden",
    category: "Vertical Gardens",
    size: "tall" as const,
  },

  {
    src: "/images/portfolio/i-1-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-2-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-4-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-5-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-6-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-7-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-8-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-9-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-10-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-11-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-12-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-13-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-14-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-15-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-16-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-17-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  /* {
    src: "/images/portfolio/i-22-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-23-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-24-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */

  /* {
    src: "/images/portfolio/i-26-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-27-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-28-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-29-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /*  {
    src: "/images/portfolio/i-30-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-31-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  {
    src: "/images/portfolio/i-32-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  } /* 
  {
    src: "/images/portfolio/i-33-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */,
  /* {
    src: "/images/portfolio/i-34-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  {
    src: "/images/portfolio/i-35-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  } /* 
  {
    src: "/images/portfolio/i-36-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */,
  /* {
    src: "/images/portfolio/i-37-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-38-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-39-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/i-40-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-41-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-42-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-43-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  /* {
    src: "/images/portfolio/i-44-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  }, */
  {
    src: "/images/portfolio/i-45-vertical-garden-india.webp",
    alt: "Living Wall",
    category: "Vertical Gardens",
    size: "tall" as const,
  },

  // =========================
  // Balcony Gardens
  // =========================

  {
    src: "/images/portfolio/dWhatsApp Image 2026-09-07 at 9.40.40 PM.jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.40.37 PM.jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.40.38 PM (1).jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.40.38 PM.jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.40.39 PM (1).jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.40.39 PM.jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.40.40 PM.jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.40.41 PM.jpeg",
    alt: "Balcony Garden",
    category: "Balcony Gardens",
    size: "tall" as const,
  },

  // =========================
  // Moss Walls
  // =========================

  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.10 PM.jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.12 PM.jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.13 PM.jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.14 PM (1).jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.14 PM.jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.15 PM (1).jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.15 PM.jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.16 PM (1).jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.16 PM (2).jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.16 PM.jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.17 PM (1).jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-07 at 9.41.17 PM.jpeg",
    alt: "Moss Wall",
    category: "Moss Walls",
    size: "tall" as const,
  },

  // =========================
  // Residential
  // =========================

  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.29 PM.jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.30 PM (1).jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.30 PM (2).jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.30 PM.jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.31 PM (1).jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.31 PM.jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.46.57 PM (1).jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.46.57 PM.jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.46.58 PM.jpeg",
    alt: "Residential Landscaping",
    category: "Residential",
    size: "tall" as const,
  },

  // =========================
  // Luxury Spaces
  // =========================

  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.40 PM (1).jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.40 PM.jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.41 PM (1).jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.41 PM (2).jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.41 PM.jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.42 PM (1).jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.42 PM.jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.43 PM (1).jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.43 PM (2).jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.43 PM.jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.36.44 PM.jpeg",
    alt: "Luxury Space",
    category: "Luxury Spaces",
    size: "tall" as const,
  },

  // =========================
  // Outdoor Landscaping
  // =========================

  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.02 PM.jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.05 PM (1).jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.05 PM.jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.06 PM (1).jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.06 PM (2).jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.06 PM.jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.07 PM (1).jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.35.07 PM.jpeg",
    alt: "Outdoor Landscaping",
    category: "Outdoor Landscaping",
    size: "tall" as const,
  },

  // =========================
  // Commercial
  // =========================

  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.46 PM (1).jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.46 PM.jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.47 PM (1).jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.47 PM (2).jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.47 PM.jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.48 PM (1).jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.48 PM (2).jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.34.48 PM.jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.47.53 PM.jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.47.54 PM (1).jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
  {
    src: "/images/portfolio/WhatsApp Image 2026-09-08 at 3.47.54 PM.jpeg",
    alt: "Commercial Landscaping",
    category: "Commercial",
    size: "tall" as const,
  },
];
