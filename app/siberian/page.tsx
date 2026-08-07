import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Siberian Sturgeon Classic",
  description:
    "Medium-sized dark grey to jet-black pearls with a firm texture and satisfying pop. Nutty, earthy — the everyday luxury benchmark. Malossol, never frozen, shipped from New York.",
  alternates: { canonical: "https://vesperacaviar.com/siberian" },
  openGraph: {
    title: "Siberian Sturgeon Classic | Vespera Caviar",
    description: "Jet-black pearls, firm pop, clean nutty finish. Malossol, never frozen.",
    url: "https://vesperacaviar.com/siberian",
  },
};

// JSON-LD Product schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Siberian Sturgeon Classic",
  brand: { "@type": "Brand", name: "Vespera Caviar" },
  description:
    "Medium-sized dark grey to jet-black pearls with a firm texture. Nutty, earthy, a clean everyday luxury.",
  category: "Caviar",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "Vespera Caviar" },
  },
};

export default function SiberianPage() {
  const product = getProduct("siberian")!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/*
        IMAGE: /public/images/tin-siberian.jpg
        Size: 800×800px
        Prompt: "Close-up matte black caviar tin, jet-black roe pearls glistening,
                 dramatic single-source studio light from left, pure black background,
                 extreme macro depth of field, luxury editorial photography"
      */}
      <ProductPage
        product={product}
        imageSrc="/images/tin-siberian.jpg"
        imageAlt="Siberian Sturgeon Classic caviar tin with jet-black pearls"
      />
    </>
  );
}
