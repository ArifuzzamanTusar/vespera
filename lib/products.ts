export interface Product {
  slug: string;
  eyebrow: string;
  name: string;
  species: string;
  shortDesc: string;
  longDesc: string;
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
    shortDesc:
      "Jet-black pearls with a firm pop and a clean, nutty, slightly spicy finish. The everyday luxury benchmark.",
    longDesc:
      "Medium-sized dark grey to jet-black pearls with a firm texture and satisfying pop. A classic, full-flavored profile — pronounced nutty and earthy notes with a clean, slightly spicy finish. Highly versatile, and a true benchmark of traditional black caviar.",
    tastingNotes: {
      title: "Nutty, earthy, precise",
      body: [
        "Siberian Sturgeon Classic is the tin we recommend to anyone new to Vespera. The pearls hold a firm, clean pop and a flavor that stays balanced rather than overtly briny — nutty through the middle, with a faint, pleasant spice on the finish.",
        "Pairs beautifully with blinis and crème fraîche, or served simply on ice with a mother-of-pearl spoon.",
      ],
    },
    specs: [
      { label: "Species", value: "Acipenser baerii" },
      { label: "Cure", value: "Malossol (lightly salted)" },
      { label: "Condition", value: "Never frozen" },
      {
        label: "Shipping",
        value: "Overnight, temperature-controlled, shipped from New York",
      },
    ],
    related: ["kaluga", "imperial"],
  },
  {
    slug: "kaluga",
    eyebrow: "Kaluga × Amur Hybrid",
    name: "Kaluga Fusion Reserve",
    species: "Kaluga × Amur Hybrid",
    shortDesc:
      "Large olive-brown pearls, buttery and balanced with a clean briny elegance. Approachable sophistication.",
    longDesc:
      "Large, glossy deep olive to brown pearls. A refined and balanced flavor — rich butteriness layered with subtle sweetness and a complex nutty finish, with clean briny elegance and no heaviness. Selected for peak freshness and consistency.",
    tastingNotes: {
      title: "Buttery, sweet, refined",
      body: [
        "Kaluga Fusion Reserve is built for those who want sophistication without a steep learning curve. The pearls are noticeably larger, with a rich buttery core, a whisper of sweetness, and a nutty finish that lingers cleanly.",
        "Ideal on its own, with a chilled dry Champagne, or as the centerpiece of a tasting flight alongside our Siberian Classic.",
      ],
    },
    specs: [
      {
        label: "Species",
        value: "Kaluga (Huso dauricus) × Amur sturgeon",
      },
      { label: "Cure", value: "Malossol (lightly salted)" },
      { label: "Condition", value: "Never frozen" },
      {
        label: "Shipping",
        value: "Overnight, temperature-controlled, shipped from New York",
      },
    ],
    related: ["siberian", "imperial"],
  },
  {
    slug: "imperial",
    eyebrow: "Kaluga × Amur, Highest Selection",
    name: "Imperial Kaluga Fusion",
    species: "Kaluga × Amur, Top Selection",
    shortDesc:
      "The largest, most luxurious pearls in the collection — intensely creamy, often likened to classic Beluga.",
    longDesc:
      "The largest and most luxurious pearls in the collection — oversized, firm, and deeply colored. Intensely creamy and buttery with a long, lingering finish and refined nutty depth. Often compared to the experience of classic Beluga.",
    tastingNotes: {
      title: "Creamy, deep, unhurried",
      body: [
        "Imperial Kaluga Fusion is our top selection, reserved for special occasions and true connoisseurs. The pearls are the largest and firmest in the collection, with an intensely creamy, buttery character and a nutty depth that lingers far longer than our other tins.",
        "Serve simply — on ice, with mother-of-pearl, and little else — to let the pearl speak for itself.",
      ],
    },
    specs: [
      {
        label: "Species",
        value: "Kaluga (Huso dauricus) × Amur sturgeon, top selection",
      },
      { label: "Cure", value: "Malossol (lightly salted)" },
      { label: "Condition", value: "Never frozen" },
      {
        label: "Shipping",
        value: "Overnight, temperature-controlled, shipped from New York",
      },
    ],
    related: ["siberian", "kaluga"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
