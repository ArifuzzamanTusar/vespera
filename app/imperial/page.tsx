import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductPage from "@/components/ProductPage";
import { siteConfig, absoluteUrl, createBreadcrumbSchema } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Imperial Kaluga Fusion",
  description:
    "The largest and most luxurious pearls in the collection — oversized, firm, intensely creamy. Often compared to classic Beluga. Malossol, never frozen, shipped from New York.",
  alternates: { canonical: "/imperial" },
  openGraph: {
    title: "Imperial Kaluga Fusion | Vespera Caviar",
    description: "The house's most luxurious tin. Intensely creamy, likened to Beluga. Malossol, never frozen.",
    url: "/imperial",
  },
};

// JSON-LD Product & Breadcrumb schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": absoluteUrl("/imperial#product"),
      name: "Imperial Kaluga Fusion",
      image: [
        absoluteUrl("/images/tin-imperial.jpg"),
        absoluteUrl(siteConfig.images.ogImage),
      ],
      description:
        "The largest and most luxurious pearls in the collection — oversized, firm, deeply colored. Intensely creamy with a long, lingering finish. Malossol-cured, never frozen.",
      sku: "VES-IMP-003",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      category: "Gourmet Food > Caviar",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "195.00",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: absoluteUrl("/imperial"),
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
      { name: "Imperial Kaluga Fusion", path: "/imperial" },
    ]),
  ],
};

export default function ImperialPage() {
  const product = getProduct("imperial")!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPage
        product={product}
        imageSrc="/images/tin-imperial.jpg"
        imageAlt="Imperial Kaluga Fusion caviar tin with large, deeply colored pearls"
      />
    </>
  );
}
