export interface Product {
  slug: string;
  eyebrow: string;
  name: string;
  species: string;
  shortDesc: string;
  longDesc: string;
  price1oz: string;
  price2oz: string;
  tags: string[];
  pairings: {
    beverage: string;
    accompaniment: string;
    ritual: string;
  };
  tastingNotes: {
    title: string;
    body: string[];
  };
  specs: {
    label: string;
    value: string;
  }[];
  related: string[]; // slugs
}

export const PRODUCTS: Product[] = [
  {
    slug: "siberian",
    eyebrow: "Acipenser baerii",
    name: "Siberian Sturgeon Classic",
    species: "Acipenser baerii",
    price1oz: "$95",
    price2oz: "$180",
    tags: ["Jet-Black Pearls", "Firm Pop", "Clean Nutty Finish"],
    pairings: {
      beverage: "Brut Champagne, Chilled Vodka, or Crisp Chablis",
      accompaniment: "Warm buckwheat blinis, crème fraîche, and fresh chives",
      ritual: "Serve on crushed ice using non-reactive mother-of-pearl spoons",
    },
    shortDesc:
      "Jet-black pearls with a firm pop and a clean, nutty, slightly spicy finish. The everyday luxury benchmark.",
    longDesc:
      "Medium-sized dark grey to jet-black pearls with a firm texture and satisfying pop. A classic, full-flavored profile — pronounced nutty and earthy notes with a clean, slightly spicy finish. Highly versatile, and a true benchmark of traditional black caviar.",
    tastingNotes: {
      title: "Nutty, earthy, precise",
      body: [
        "Siberian Sturgeon Classic is the tin we recommend to anyone new to Vespera. The pearls hold a firm, clean pop and a flavor that stays balanced rather than overtly briny — nutty through the middle, with a faint, pleasant spice on the finish.",
        "Sustainably farmed with full traceability from tank to tin, cured in the traditional malossol method (<3.5% salt), and packed to order in New York.",
      ],
    },
    specs: [
      { label: "Species", value: "Acipenser baerii" },
      { label: "Pearl Size", value: "Medium (2.7 – 2.9 mm)" },
      { label: "Color Profile", value: "Deep Anthracite to Jet-Black" },
      { label: "Cure Standard", value: "Traditional Malossol (<3.5% Salt)" },
      { label: "Condition", value: "Fresh, unpasteurized, never frozen" },
      {
        label: "Cold Chain",
        value: "Overnight delivery at 28–32°F from New York",
      },
    ],
    related: ["kaluga", "imperial"],
  },
  {
    slug: "kaluga",
    eyebrow: "Kaluga × Amur Hybrid",
    name: "Kaluga Fusion Reserve",
    species: "Kaluga (Huso dauricus) × Amur Hybrid",
    price1oz: "$135",
    price2oz: "$260",
    tags: ["Large Olive-Brown Pearls", "Rich Butteriness", "Delicate Brine"],
    pairings: {
      beverage: "Blanc de Blancs Champagne, Meursault, or Junmai Daiginjo Sake",
      accompaniment: "Hand-tasting, lightly toasted brioche, or fingerling potato chips",
      ritual: "Allow tin to sit at room temperature for 3 minutes before opening",
    },
    shortDesc:
      "Large olive-brown pearls, buttery and balanced with a clean briny elegance. Approachable sophistication.",
    longDesc:
      "Large, glossy deep olive to brown pearls. A refined and balanced flavor — rich butteriness layered with subtle sweetness and a complex nutty finish, with clean briny elegance and no heaviness. Selected for peak freshness and consistency.",
    tastingNotes: {
      title: "Buttery, sweet, refined",
      body: [
        "Kaluga Fusion Reserve is built for those who want sophistication without a steep learning curve. The pearls are noticeably larger, with a rich buttery core, a whisper of sweetness, and a nutty finish that lingers cleanly.",
        "Harvested from mature sturgeons and aged under master supervision to ensure an unmistakable golden hue and luscious mouthfeel.",
      ],
    },
    specs: [
      {
        label: "Species",
        value: "Kaluga (Huso dauricus) × Acipenser schrenckii",
      },
      { label: "Pearl Size", value: "Large (3.0 – 3.2 mm)" },
      { label: "Color Profile", value: "Lustrous Bronze to Deep Olive-Amber" },
      { label: "Cure Standard", value: "Traditional Malossol (<3.2% Salt)" },
      { label: "Condition", value: "Fresh, unpasteurized, never frozen" },
      {
        label: "Cold Chain",
        value: "Overnight delivery at 28–32°F from New York",
      },
    ],
    related: ["siberian", "imperial"],
  },
  {
    slug: "imperial",
    eyebrow: "Kaluga × Amur, Highest Selection",
    name: "Imperial Kaluga Fusion",
    species: "Kaluga (Huso dauricus) × Amur, Top 5%",
    price1oz: "$195",
    price2oz: "$380",
    tags: ["Oversized Golden Pearls", "Intensely Creamy", "Beluga-Grade Finish"],
    pairings: {
      beverage: "Prestige Cuvée (Dom Pérignon, Krug), or Ice-Chilled Polish Rye Vodka",
      accompaniment: "Purist tasting directly from the tin or back of the hand",
      ritual: "Gently roll pearls against the palate to release buttery complexities",
    },
    shortDesc:
      "The largest, most luxurious pearls in the collection — intensely creamy, often likened to classic Beluga.",
    longDesc:
      "The largest and most luxurious pearls in the collection — oversized, firm, and deeply colored. Intensely creamy and buttery with a long, lingering finish and refined nutty depth. Often compared to the experience of classic Beluga.",
    tastingNotes: {
      title: "Creamy, deep, unhurried",
      body: [
        "Imperial Kaluga Fusion is our top selection, reserved for special occasions and true connoisseurs. The pearls are the largest and firmest in the collection, with an intensely creamy, buttery character and a nutty depth that lingers far longer than our other tins.",
        "Only the top 5% of each harvest qualifies for the Imperial distinction, hand-selected for pristine egg integrity and magnificent golden amber coloration.",
      ],
    },
    specs: [
      {
        label: "Species",
        value: "Kaluga (Huso dauricus) × Amur (Top 5% Selection)",
      },
      { label: "Pearl Size", value: "Extra-Large (3.2 – 3.5 mm)" },
      { label: "Color Profile", value: "Royal Amber with Golden Highlights" },
      { label: "Cure Standard", value: "Imperial Ultra-Light Malossol (<3.0% Salt)" },
      { label: "Condition", value: "Fresh, unpasteurized, never frozen" },
      {
        label: "Cold Chain",
        value: "Overnight delivery at 28–32°F from New York",
      },
    ],
    related: ["siberian", "kaluga"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
