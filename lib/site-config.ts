/**
 * Centralized site configuration — Single Source of Truth for Vespera Caviar.
 * Any domain, email, metadata, or link changes should be made here.
 */
export const siteConfig = {
  name: "Vespera Caviar",
  legalName: "Vespera Caviar LLC",
  shortName: "VESPERA",
  domain: "www.vesperacaviar.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vesperacaviar.com",
  
  description:
    "Sustainably farmed roe, malossol-cured and never frozen, sent to your door overnight in a temperature-controlled case. No storefront, no middleman — just the tin.",
  
  tagline: "Exceptional Caviar. Shipped from New York.",
  
  contact: {
    email: "info@vesperacaviar.com",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "US",
    shipsFrom: "Ships from New York",
    businessHours: "Mo-Fr 09:00-18:00 EST",
  },

  priceRange: "$$$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Credit Card, Wire Transfer, Private Invoice",

  images: {
    logo: "/images/vespera-logo.png",
    ogImage: "/images/vespera.jpg",
    heroBg: "/images/hero-bg.jpg",
    aboutStory: "/images/about-story.jpg",
    shippingCold: "/images/shipping-cold.jpg",
  },

  web3formsKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    "29321da5-e239-4f0c-a04f-7bb223cb5d05",

  keywords: [
    "caviar",
    "sturgeon caviar",
    "malossol caviar",
    "Siberian sturgeon",
    "Kaluga caviar",
    "buy caviar online",
    "caviar delivery New York",
    "luxury caviar",
    "never frozen caviar",
    "sustainable caviar",
    "caviar gift",
    "gourmet food New York",
    "Acipenser baerii",
    "Huso dauricus",
    "malossol cured",
    "fresh caviar overnight",
  ],

  links: {
    home: "/",
    shop: "/shop",
    siberian: "/siberian",
    kaluga: "/kaluga",
    imperial: "/imperial",
    about: "/about",
    shipping: "/shipping",
    contact: "/contact",
    sitemap: "/sitemap.xml",
    llms: "/llms.txt",
    llmsFull: "/llms-full.txt",
  },
} as const;

/**
 * Returns an absolute URL string for a given relative path using the configured site base URL.
 * Example: absoluteUrl('/shop') -> 'https://www.vesperacaviar.com/shop'
 */
export function absoluteUrl(path = ""): string {
  if (!path || path === "/") {
    return siteConfig.url;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Helper to construct BreadcrumbList JSON-LD schema
 */
export function createBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
