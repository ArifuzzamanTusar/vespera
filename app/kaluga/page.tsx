import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductPage from "@/components/ProductPage";
import { siteConfig, absoluteUrl, createBreadcrumbSchema } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kaluga Fusion Reserve",
  description:
    "Large, glossy deep olive to brown pearls. Rich butteriness layered with subtle sweetness and a complex nutty finish. Malossol, never frozen, shipped from New York.",
  alternates: { canonical: "/kaluga" },
  openGraph: {
    title: "Kaluga Fusion Reserve | Vespera Caviar",
    description: "Buttery, balanced, briny elegance. Large olive-brown pearls. Malossol, never frozen.",
    url: "/kaluga",
  },
};

// JSON-LD Product & Breadcrumb schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": absoluteUrl("/kaluga#product"),
      name: "Kaluga Fusion Reserve",
      image: [
        absoluteUrl("/images/tin-kaluga.jpg"),
        absoluteUrl(siteConfig.images.ogImage),
      ],
      description:
        "Large, glossy deep olive to brown pearls. Rich butteriness layered with subtle sweetness and a complex nutty finish. Malossol-cured, never frozen.",
      sku: "VES-KAL-002",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      category: "Gourmet Food > Caviar",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "135.00",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: absoluteUrl("/kaluga"),
        seller: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0.00",
            currency: "USD",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "US",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 0,
              maxValue: 1,
              unitCode: "d",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 1,
              maxValue: 1,
              unitCode: "d",
            },
          },
        },
      },
    },
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Collection", path: "/shop" },
      { name: "Kaluga Fusion Reserve", path: "/kaluga" },
    ]),
  ],
};

export default function KalugaPage() {
  const product = getProduct("kaluga")!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPage
        product={product}
        imageSrc="/images/tin-kaluga.jpg"
        imageAlt="Kaluga Fusion Reserve caviar tin with olive-brown pearls"
      />
    </>
  );
}
