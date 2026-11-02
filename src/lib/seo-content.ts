/**
 * Search-focused copy: page titles, descriptions, keywords and FAQs.
 * Kept apart from content.ts so the visible page copy and the search copy can be edited separately.
 */

export type Faq = { q: string; a: string };

type ServiceSeo = {
  title: string;
  description: string;
  keywords: string[];
  faqs: Faq[];
};

export const serviceSeo: Record<string, ServiceSeo> = {
  "balcony-refresh": {
    title: "Balcony Garden Design and Makeover",
    description:
      "Balcony garden design with planters, plants, styling and care guidance in Lucknow, Kanpur and Indore. Indicative price ₹8,000–₹25,000. Book a site visit.",
    keywords: ["balcony garden design", "balcony makeover", "balcony plants and planters", "balcony gardening service"],
    faqs: [
      {
        q: "How much does a balcony garden cost?",
        a: "Our balcony refresh starts at an indicative ₹8,000–₹25,000. The final quote depends on the size of the balcony, the number and size of planters and plants, the finish you choose and travel to your locality. We confirm it after a site visit.",
      },
      {
        q: "What is included in a balcony refresh?",
        a: "Planters chosen for your balcony, plants matched to its light and wind, styling and placement, and a written care guide. You receive good, better and best options so you can pick what suits your budget.",
      },
      {
        q: "Which plants suit a sunny balcony?",
        a: "Bougainvillea, portulaca, hibiscus, jasmine, aloe vera, jade plant, tulsi and rosemary generally cope with strong sun once established. We choose according to how many hours of direct sun your balcony actually gets.",
      },
    ],
  },
  "terrace-starter": {
    title: "Terrace Garden Design and Planting",
    description:
      "Terrace garden design with layout, planting, planters and irrigation coordination in Lucknow, Kanpur and Indore. Quoted after a site visit.",
    keywords: ["terrace garden design", "rooftop garden", "terrace gardening service", "terrace garden planters"],
    faqs: [
      {
        q: "Why is a terrace garden quoted only after a visit?",
        a: "Terraces differ in size, surface, drainage and exposure to sun and wind. We measure the space and check its condition first, so the quote reflects the real site and not a guess.",
      },
      {
        q: "Do I need permission to make a terrace garden?",
        a: "In apartment buildings terraces are often shared or restricted, so check with your society or builder first. Also confirm that the slab can carry the weight of soil, water and planters, and that the waterproofing layer stays protected.",
      },
      {
        q: "Can you set up watering for a terrace garden?",
        a: "Yes. A terrace starter includes coordination of watering lines and timers where needed, which is much easier to lay out before the planters go in.",
      },
    ],
  },
  "green-wall-feature": {
    title: "Green Wall and Vertical Garden Design",
    description:
      "Artificial and living green walls for homes, cafés, salons and offices in Lucknow, Kanpur and Indore. Indicative price ₹25,000–₹1,00,000+.",
    keywords: ["green wall", "vertical garden", "artificial green wall", "living wall"],
    faqs: [
      {
        q: "Should I choose an artificial or a living green wall?",
        a: "An artificial wall needs no watering and suits low-light or hard-to-reach spots. A living wall uses real plants and needs regular care, which a GardenCare plan can cover. We help you decide after seeing the wall.",
      },
      {
        q: "How much does a green wall cost?",
        a: "Green-wall features start at an indicative ₹25,000 and can go beyond ₹1,00,000 for larger or custom walls. The price depends on wall size and height, artificial or living, the frame and backing, and access.",
      },
      {
        q: "Why do you collect a deposit for a green wall?",
        a: "Materials, frames and any custom metalwork are ordered for your wall specifically, so a deposit is collected before ordering. Fabrication is handled by specialist partners.",
      },
    ],
  },
  "garden-revival": {
    title: "Garden Revival, Pruning and Soil Care",
    description:
      "Bring a neglected garden back with cleanup, pruning, soil correction, replanting and redesign in Lucknow, Kanpur and Indore. From ₹15,000.",
    keywords: ["garden revival", "garden makeover", "garden cleanup and pruning", "soil correction"],
    faqs: [
      {
        q: "Can a neglected garden be revived?",
        a: "Often yes. We clear dead growth, prune, correct the soil, replace plants that have not survived and redesign beds where the layout no longer works. A site visit tells us how much can be saved.",
      },
      {
        q: "What does garden revival cost?",
        a: "Our indicative range is ₹15,000–₹60,000. It depends on the size and condition of the garden, the amount of soil work and replacement planting, and the amount of green waste to clear.",
      },
      {
        q: "How do I keep the garden looking good afterwards?",
        a: "A new or revived garden needs regular care. We offer a GardenCare maintenance plan with scheduled visits and photographs after every visit.",
      },
    ],
  },
  "gardencare-amc": {
    title: "Garden Maintenance AMC Plans",
    description:
      "GardenCare garden maintenance contracts with fixed visit days, checklists and photo reports in Lucknow, Kanpur and Indore. From ₹1,500 a month.",
    keywords: ["garden maintenance", "garden AMC", "plant maintenance service", "annual maintenance contract garden"],
    faqs: [
      {
        q: "What does a garden maintenance contract include?",
        a: "Scheduled visits on fixed days, a checklist for every visit, photographs and a short summary after each visit, and a written scope covering visit frequency, included work, exclusions, response times and plant replacement rules.",
      },
      {
        q: "How much is garden maintenance per month?",
        a: "Indicative monthly ranges are ₹1,500–₹3,000 for Essential, ₹3,000–₹6,000 for Plus and ₹15,000–₹50,000+ for Commercial plans. Final pricing is confirmed after a site visit.",
      },
      {
        q: "Will you remind me before the plan ends?",
        a: "Yes. We send a renewal reminder 30 to 45 days before your plan ends so you have time to adjust it.",
      },
    ],
  },
  "site-visit": {
    title: "Garden Site Visit and Green-Space Audit",
    description:
      "Book a chargeable site visit (₹500–₹1,500) for your balcony, terrace or garden. The fee is credited against your project once you approve it.",
    keywords: ["garden site visit", "green space audit", "garden consultation", "balcony garden consultation"],
    faqs: [
      {
        q: "Is the site visit fee credited?",
        a: "Yes. The visit costs ₹500–₹1,500 and the fee is credited against your project once you approve a proposal.",
      },
      {
        q: "What happens during the visit?",
        a: "We measure the space, check sunlight, wind exposure and existing plants, and note condition, drainage and access. We also talk about your budget and how you want to use the space. A proposal with good, better and best options follows.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */

type LocationSeo = {
  title: string;
  description: string;
  faqs: Faq[];
};

export const locationSeo: Record<string, LocationSeo> = {
  lucknow: {
    title: "Balcony, Terrace and Garden Care in Lucknow",
    description:
      "SATRIVA designs, plants and maintains balcony gardens, terrace gardens and green walls in Lucknow. Clear quotes, photo reports and GardenCare plans.",
    faqs: [
      {
        q: "Do you offer balcony and terrace garden services in Lucknow?",
        a: "Yes. We design, plant and look after balconies, terraces, indoor gardens and green walls in Lucknow. Book a site visit and we will suggest good, better and best options for your space.",
      },
      {
        q: "Which plants cope with Lucknow summers?",
        a: "Heat-tolerant plants such as bougainvillea, hibiscus, jasmine, aloe vera and tulsi generally do well. Use larger pots, shade tender plants in the afternoon and water early in the morning.",
      },
      {
        q: "How do I book a site visit in Lucknow?",
        a: "Use the enquiry form with Lucknow selected as your city. We will reply and agree a time. The visit fee is credited against your project once you approve it.",
      },
    ],
  },
  kanpur: {
    title: "Balcony, Terrace and Garden Care in Kanpur",
    description:
      "Balcony gardens, rooftop and terrace gardens, green walls and garden maintenance in Kanpur, planned around heat, dust and the monsoon.",
    faqs: [
      {
        q: "Do you design rooftop and terrace gardens in Kanpur?",
        a: "Yes. We plan rooftops and terraces in Kanpur around surface condition, drainage, weight, heat and the monsoon, then plant and maintain them.",
      },
      {
        q: "Which plants cope with dust and pollution in Kanpur?",
        a: "Tough, glossy-leaved plants cope best, and wiping leaves regularly keeps them healthy. We choose plants for your light and routine at the site visit.",
      },
      {
        q: "How do I book a site visit in Kanpur?",
        a: "Choose Kanpur as your city in the enquiry form. We will agree a time for the visit, and the fee is credited against your project once you approve it.",
      },
    ],
  },
  indore: {
    title: "Balcony, Terrace and Garden Care in Indore",
    description:
      "Balcony gardens, terrace gardens, green walls for offices and showrooms, and garden maintenance plans in Indore. Book a site visit.",
    faqs: [
      {
        q: "Do you work with new apartments and townships in Indore?",
        a: "Yes. We design and plant balconies and small terraces in new apartments. Check your society's rules on balcony weight and drainage before starting.",
      },
      {
        q: "Can you make a green wall for an office or showroom in Indore?",
        a: "Yes. Artificial or living green walls suit offices, cafés and showrooms, and a commercial care plan keeps them looking good with scheduled visits and reports.",
      },
      {
        q: "How do I book a site visit in Indore?",
        a: "Choose Indore as your city in the enquiry form. We will agree a time, and the visit fee is credited against your project once you approve it.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */

/** Questions shown on /faq. */
export const generalFaqs: Faq[] = [
  {
    q: "Which cities do you serve?",
    a: "We currently take enquiries from Lucknow, Kanpur and Indore. More cities will follow.",
  },
  {
    q: "What services does SATRIVA offer?",
    a: "Balcony refresh, terrace starter, green-wall feature, garden revival and GardenCare maintenance plans, plus a site visit and green-space audit.",
  },
  {
    q: "How are your quotes worked out?",
    a: "Each proposal is built from scope, labour, materials and travel, never from a square-foot figure alone. You receive good, better and best options for the same space.",
  },
  {
    q: "Is the site visit free?",
    a: "No. The visit costs ₹500–₹1,500, and the fee is credited against your project once you approve a proposal.",
  },
  {
    q: "Do I pay anything before work starts?",
    a: "A deposit confirms your booking and covers project materials. Green walls, in particular, use materials ordered for your project.",
  },
  {
    q: "Who builds the green walls?",
    a: "Specialist work such as green-wall fabrication and custom metalwork is handled by specialist partners, so the finish stays right.",
  },
  {
    q: "What do GardenCare plans cost?",
    a: "Indicative monthly ranges are ₹1,500–₹3,000 for Essential, ₹3,000–₹6,000 for Plus and ₹15,000–₹50,000+ for Commercial. Final pricing is confirmed after a site visit.",
  },
  {
    q: "Will I see what was done on each care visit?",
    a: "Yes. You receive photographs and a short service summary after every visit.",
  },
  {
    q: "Do you work with architects, builders and facility managers?",
    a: "Yes. We act as an execution partner, with site visits, clear quotes, checklist-based installation and documented handovers.",
  },
];
