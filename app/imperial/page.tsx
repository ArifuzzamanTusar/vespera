import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Imperial Kaluga Fusion",
  description:
    "The largest and most luxurious pearls in the collection — oversized, firm, intensely creamy. Often compared to classic Beluga. Malossol, never frozen, shipped from New York.",
  alternates: { canonical: "https://vesperacaviar.com/imperial" },
  openGraph: {
    title: "Imperial Kaluga Fusion | Vespera Caviar",
    description: "The house's most luxurious tin. Intensely creamy, likened to Beluga. Malossol, never frozen.",
    url: "https://vesperacaviar.com/imperial",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Imperial Kaluga Fusion",
  brand: { "@type": "Brand", name: "Vespera Caviar" },
  description:
    "The largest and most luxurious pearls in the collection — oversized, firm, deeply colored. Intensely creamy with a long, lingering finish.",
  category: "Caviar",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Vespera Caviar" },
  },
};

export default function ImperialPage() {
  const product = getProduct("imperial")!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/*
        IMAGE: /public/images/tin-imperial.jpg
        Size: 800×800px
        Prompt: "Oversized gold-rimmed caviar tin open, large deep-colored pearls,
                 opulent dark studio lighting, rich shadow, regal and luxurious feeling,
                 close-up macro, black background with subtle gold reflection"
      */}
      <ProductPage
        product={product}
        imageSrc="/images/tin-imperial.jpg"
        imageAlt="Imperial Kaluga Fusion caviar tin with large, deeply colored pearls"
      />
    </>
  );
}
