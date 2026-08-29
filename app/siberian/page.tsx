import type { Metadata } from "next";
import { getProduct } from "@/lib/products";
import ProductPage from "@/components/ProductPage";
import { siteConfig, absoluteUrl, createBreadcrumbSchema } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Siberian Sturgeon Classic",
  description:
    "Medium-sized dark grey to jet-black pearls with a firm texture and satisfying pop. Nutty, earthy — the everyday luxury benchmark. Malossol, never frozen, shipped from New York.",
  alternates: { canonical: "/siberian" },
  openGraph: {
    title: "Siberian Sturgeon Classic | Vespera Caviar",
    description: "Jet-black pearls, firm pop, clean nutty finish. Malossol, never frozen.",
    url: "/siberian",
  },
};

// JSON-LD Product & Breadcrumb schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": absoluteUrl("/siberian#product"),
      name: "Siberian Sturgeon Classic",
      image: [
        absoluteUrl("/images/tin-siberian.jpg"),
        absoluteUrl(siteConfig.images.ogImage),
      ],
      description:
        "Medium-sized dark grey to jet-black pearls with a firm texture and satisfying pop. Nutty, earthy, and clean. Malossol-cured, never frozen.",
      sku: "VES-SIB-001",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      category: "Gourmet Food > Caviar",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "95.00",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: absoluteUrl("/siberian"),
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
      { name: "Siberian Sturgeon Classic", path: "/siberian" },
    ]),
  ],
};

export default function SiberianPage() {
  const product = getProduct("siberian")!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPage
        product={product}
        imageSrc="/images/tin-siberian.jpg"
        imageAlt="Siberian Sturgeon Classic caviar tin with jet-black pearls"
      />
    </>
  );
}
