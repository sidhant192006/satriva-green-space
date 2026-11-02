export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

// Alias so existing imports of `Testimonial` (from the data barrel) keep working
export type Testimonial = Review;

// Small pool of real headshots to cycle through. Swap/add more real photos
// here as you get them — reviews reference this pool by index so adding a
// new image automatically becomes available everywhere.
const AVATARS = [
  "/images/testimonials/rohan-mehta-vertical-garden-india.webp",
  "/images/testimonials/anjali-verma-vertical-garden-india.webp",
  "/images/testimonials/ankit-vertical-garden-india.webp",
  "/images/testimonials/pooja-verma-vertical-garden-india.webp",
];

export type ServiceKey =
  | "natural-vertical-garden"
  | "artificial-vertical-garden"
  | "moss-wall"
  | "balcony-garden"
  | "landscape-consultation"
  | "related-services";

export const TESTIMONIALS_BY_SERVICE: Record<ServiceKey, Review[]> = {
  "natural-vertical-garden": [
    {
      name: "Rohan Mehta",
      location: "Gurgaon, Haryana",
      rating: 5,
      text: "We got a living green wall installed in our villa courtyard and the plant selection was spot on for our light conditions - nothing has struggled or died even six months. The drip irrigation setup means we barely think about it.",
      image: AVATARS[0],
    },
    {
      name: "Ishita Malhotra",
      location: "Sushant Lok, Gurgaon",
      rating: 5,
      text: "I was worried a natural vertical garden would be high-maintenance, but the auto-irrigation and plant choices they made have kept it thriving with almost no effort from us. It's the first thing guests notice when they walk in.",
      image: AVATARS[1],
    },
    {
      name: "Karan Bhatia",
      location: "DLF Phase 3, Gurgaon",
      rating: 4,
      text: "Beautiful, lush result on our office atrium wall. Took a couple of weeks for the plants to fully fill in and settle, but the team was upfront about that timeline from day one so there were no surprises.",
      image: AVATARS[2],
    },
    {
      name: "Simran Kaur",
      location: "Golf Course Road, Gurgaon",
      rating: 5,
      text: "Real plants, real air quality difference — our home office genuinely feels fresher. They walked us through watering schedules and even came back for a free check-up a month later.",
      image: AVATARS[3],
    },
  ],

  "artificial-vertical-garden": [
    {
      name: "Rishabh Sharma",
      location: "Gurgaon, Haryana",
      rating: 5,
      text: "Got an artificial green wall installed in my office reception. It looks extremely premium and the best part is absolutely zero maintenance. The Satriva team was super professional.",
      image: AVATARS[0],
    },
    {
      name: "Priya Verma",
      location: "South Delhi",
      rating: 5,
      text: "We wanted greenery in our balcony but don't have time to water plants. The UV protected artificial garden they installed is perfect. Has not faded even after a year in direct sun.",
      image: AVATARS[1],
    },
    {
      name: "Amit Agarwal",
      location: "Noida, UP",
      rating: 5,
      text: "Amazing finish! We compared natural vs artificial and went with the luxury 3D artificial for our restaurant wall. Customers take selfies there all day. Totally worth the investment.",
      image: AVATARS[2],
    },
    {
      name: "Kavita Singh",
      location: "Vasant Vihar, Delhi",
      rating: 5,
      text: "The artificial vertical garden completely transformed our outdoor seating area. The quality is so good that most guests think they are real plants! Highly recommended.",
      image: AVATARS[3],
    },
  ],

  "moss-wall": [
    {
      name: "Ananya Chatterjee",
      location: "Cyber City, Gurgaon",
      rating: 5,
      text: "The preserved moss wall behind our reception desk with our logo built into the design has become our most photographed corner. Zero watering, zero fading, and it still looks completely alive.",
      image: AVATARS[1],
    },
    {
      name: "Devansh Oberoi",
      location: "Connaught Place, Delhi",
      rating: 5,
      text: "I run a boutique café and wanted something soft and acoustic-friendly for a feature wall — the moss panel absorbs sound noticeably better than I expected, on top of looking incredible.",
      image: AVATARS[2],
    },
    {
      name: "Meher Kapoor",
      location: "Saket, Delhi",
      rating: 5,
      text: "We used moss art in our home theatre room for both the texture and the sound dampening. The finish is so tactile that first-time visitors always ask to touch it to check if it's real.",
      image: AVATARS[3],
    },
    {
      name: "Yash Trivedi",
      location: "Sector 29, Gurgaon",
      rating: 4,
      text: "Ordered a custom logo moss wall for our office lobby. Turnaround took a little longer than expected due to the custom branding work, but the final piece was worth the wait.",
      image: AVATARS[0],
    },
  ],

  "balcony-garden": [
    {
      name: "Pooja Nair",
      location: "Indirapuram, Ghaziabad",
      rating: 5,
      text: "Our tiny apartment balcony is now the best room in the house. They planned out vertical planters, seating, and lighting so it never feels cramped despite the small footprint.",
      image: AVATARS[3],
    },
    {
      name: "Aditya Ranjan",
      location: "Mayur Vihar, Delhi",
      rating: 5,
      text: "Went from a bare concrete balcony to a proper green retreat with decking and a mix of plants suited to our east-facing light. Morning coffee out there has become a daily ritual now.",
      image: AVATARS[0],
    },
    {
      name: "Ritika Sethi",
      location: "Sector 62, Noida",
      rating: 5,
      text: "The team suggested compact, low-maintenance plant choices for our balcony instead of what we originally asked for, and honestly they were right — it's stayed lush with almost no upkeep.",
      image: AVATARS[1],
    },
    {
      name: "Nikhil Bakshi",
      location: "Rajouri Garden, Delhi",
      rating: 4,
      text: "Great transformation on a budget balcony makeover. A couple of the planters arrived a shade different from the sample shown, but the team swapped them without any fuss.",
      image: AVATARS[2],
    },
  ],

  "landscape-consultation": [
    {
      name: "Colonel Vikram Rathore (Retd.)",
      location: "Chattarpur Farms, Delhi",
      rating: 5,
      text: "We needed a full landscape plan for our farmhouse — hardscape, lighting, irrigation, the works. The 3D walkthrough before any construction started made it easy to sign off with confidence.",
      image: AVATARS[2],
    },
    {
      name: "Radhika Ahluwalia",
      location: "Sohna Road, Gurgaon",
      rating: 5,
      text: "Their consultation went well beyond just plant suggestions — they thought through drainage, seasonal maintenance, and even how the space would age over the next few years.",
      image: AVATARS[1],
    },
    {
      name: "Sameer Dutta",
      location: "Greater Kailash, Delhi",
      rating: 5,
      text: "Hired them purely for design consultation on our villa garden and later brought them back for execution too — the concept-to-reality match was almost exact.",
      image: AVATARS[0],
    },
    {
      name: "Tanvi Chopra",
      location: "Sector 50, Gurgaon",
      rating: 4,
      text: "Solid consultation with clear pricing tiers explained upfront. We revised the layout twice before finalizing and they were patient through both rounds.",
      image: AVATARS[3],
    },
  ],

  "related-services": [
    {
      name: "Rajesh Khanna",
      location: "Faridabad, Haryana",
      rating: 5,
      text: "Excellent AMC service — they show up on schedule every time, and our garden has looked consistently sharp for over a year now without us having to chase anyone.",
      image: AVATARS[0],
    },
    {
      name: "Neha Kapoor",
      location: "Indirapuram, Ghaziabad",
      rating: 5,
      text: "Brought them in to revamp a garden that had been neglected for years — dead plants replaced, irrigation fixed, new lighting added. Feels like a completely different space now.",
      image: AVATARS[1],
    },
    {
      name: "Farhan Qureshi",
      location: "Sector 15, Noida",
      rating: 5,
      text: "Even our artificial grass and vertical panels needed occasional cleaning and UV touch-ups, which I didn't expect — their maintenance team handles all of it without me having to ask twice.",
      image: AVATARS[2],
    },
    {
      name: "Divya Malhotra",
      location: "Panchsheel Park, Delhi",
      rating: 4,
      text: "Quarterly maintenance visits have kept our rooftop garden in great shape. Only minor gripe is scheduling can occasionally shift by a few days, but they always communicate ahead of time.",
      image: AVATARS[3],
    },
  ],
};

// Flattened set used on the homepage so visitors see a representative mix
// from every service instead of just one category.
export const ALL_TESTIMONIALS: Review[] = Object.values(TESTIMONIALS_BY_SERVICE).flat();

// Alias so existing imports of `TESTIMONIALS` (from the data barrel) keep working
export const TESTIMONIALS = ALL_TESTIMONIALS;
