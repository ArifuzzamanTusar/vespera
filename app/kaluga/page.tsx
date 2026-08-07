import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Kaluga Fusion Reserve",
  description:
    "Large, glossy deep olive to brown pearls. Rich butteriness layered with subtle sweetness and a complex nutty finish. Malossol, never frozen, shipped from New York.",
  alternates: { canonical: "https://vesperacaviar.com/kaluga" },
  openGraph: {
    title: "Kaluga Fusion Reserve | Vespera Caviar",
    description: "Buttery, balanced, briny elegance. Large olive-brown pearls. Malossol, never frozen.",
    url: "https://vesperacaviar.com/kaluga",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kaluga Fusion Reserve",
  brand: { "@type": "Brand", name: "Vespera Caviar" },
  description:
    "Large, glossy deep olive to brown pearls. Rich butteriness layered with subtle sweetness and a complex nutty finish.",
  category: "Caviar",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Vespera Caviar" },
  },
};

export default function KalugaPage() {
  const product = getProduct("kaluga")!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/*
        IMAGE: /public/images/tin-kaluga.jpg
        Size: 800×800px
        Prompt: "Close-up caviar tin, large olive-brown pearls glistening,
                 warm amber side lighting, rich deep brown tones, dark studio,
                 macro luxury editorial, no background distractions"
      */}
      <ProductPage
        product={product}
        imageSrc="/images/tin-kaluga.jpg"
        imageAlt="Kaluga Fusion Reserve caviar tin with olive-brown pearls"
      />
    </>
  );
}
