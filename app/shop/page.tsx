import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import RoeDivider from "@/components/RoeDivider";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGrid from "@/components/motion/StaggerGrid";
import BlurRevealText from "@/components/motion/BlurRevealText";
import { siteConfig, absoluteUrl, createBreadcrumbSchema } from "@/lib/site-config";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "The Collection — All Caviar Selections",
  description:
    "Browse all three Vespera Caviar selections — Siberian Sturgeon Classic, Kaluga Fusion Reserve, and Imperial Kaluga Fusion. Sustainably farmed, malossol-cured, never frozen.",
  alternates: { canonical: "/shop" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": absoluteUrl("/shop#webpage"),
      url: absoluteUrl("/shop"),
      name: "The Vespera Caviar Collection",
      description:
        "Browse all three Vespera Caviar selections — Siberian Sturgeon Classic, Kaluga Fusion Reserve, and Imperial Kaluga Fusion.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: PRODUCTS.map((product, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: product.name,
          url: absoluteUrl(`/${product.slug}`),
          description: product.shortDesc,
        })),
      },
    },
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Collection", path: "/shop" },
    ]),
  ],
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FadeIn>
        <div className="page-head">
          <p className="eyebrow">The Collection</p>
          <h1>Three tins, one standard</h1>
          <p>
            Every selection is sustainably farmed, malossol-cured, and never
            frozen. Available in 1 oz and 2 oz, shipped from New York in a
            temperature-controlled case.
          </p>
        </div>
      </FadeIn>

      <section>
        <div className="wrap">
          <StaggerGrid className="grid-3">
            <div className="card">
              <div className="card-tin-wrap">
                <SafeImage
                  src="/images/tin-siberian.jpg"
                  alt="Siberian Sturgeon Classic"
                  fill
                  sizes="110px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="species">Acipenser baerii</p>
              <h3>Siberian Sturgeon Classic</h3>
              <p>
                Medium-sized dark grey to jet-black pearls, firm texture,
                satisfying pop. Nutty and earthy with a clean, slightly spicy
                finish. Highly versatile.
              </p>
              <Link href="/siberian" className="btn">View Tin</Link>
            </div>
            <div className="card">
              <div className="card-tin-wrap">
                <SafeImage
                  src="/images/tin-kaluga.jpg"
                  alt="Kaluga Fusion Reserve"
                  fill
                  sizes="110px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="species">Kaluga × Amur Hybrid</p>
              <h3>Kaluga Fusion Reserve</h3>
              <p>
                Large, glossy deep olive to brown pearls. Rich butteriness
                layered with subtle sweetness and a complex nutty finish.
              </p>
              <Link href="/kaluga" className="btn">View Tin</Link>
            </div>
            <div className="card">
              <div className="card-tin-wrap">
                <SafeImage
                  src="/images/tin-imperial.jpg"
                  alt="Imperial Kaluga Fusion"
                  fill
                  sizes="110px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="species">Kaluga × Amur, Top Selection</p>
              <h3>Imperial Kaluga Fusion</h3>
              <p>
                The largest, most luxurious pearls in the collection —
                oversized, firm, deeply colored. Intensely creamy with a long,
                lingering finish.
              </p>
              <Link href="/imperial" className="btn">View Tin</Link>
            </div>
          </StaggerGrid>

          <RoeDivider />

          <FadeIn>
            <div
              className="note-box"
              style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
            >
              <strong>Ordering for an event or in volume?</strong> Our Private
              Client desk arranges concierge delivery and wholesale terms.{" "}
              <Link href="/contact" style={{ color: "var(--gold-bright)", textDecoration: "underline" }}>
                Get in touch →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
