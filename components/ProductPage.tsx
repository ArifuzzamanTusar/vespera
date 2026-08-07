import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import RoeTin from "@/components/RoeTin";
import ProductControls from "@/components/ProductControls";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGrid from "@/components/motion/StaggerGrid";
import BlurRevealText from "@/components/motion/BlurRevealText";
import { type Product, PRODUCTS } from "@/lib/products";

interface ProductPageProps {
  product: Product;
  /** The placeholder image src for this product's hero shot */
  imageSrc: string;
  imageAlt: string;
}

export default function ProductPage({ product, imageSrc, imageAlt }: ProductPageProps) {
  const related = PRODUCTS.filter((p) => product.related.includes(p.slug));

  return (
    <>
      {/* ======== PRODUCT HERO ======== */}
      <div className="wrap">
        <div className="product-hero">
          {/* Product visual */}
          <FadeIn y={20}>
            <div className="product-visual" style={{ position: "relative", overflow: "hidden" }}>
              {/*
                IMAGE: imageSrc (passed per product)
                Size: 800×800px
                See individual product page files for prompts
              */}
              <SafeImage
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width:860px) 100vw, 45vw"
                style={{ objectFit: "cover", opacity: 0.7 }}
              />
              {/* Pearl cluster overlay */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                <RoeTin size="xl" />
              </div>
            </div>
          </FadeIn>

          {/* Product info */}
          <FadeIn delay={0.15} y={28}>
            <p className="eyebrow">{product.eyebrow}</p>
            <BlurRevealText
              text={product.name}
              as="h1"
              delay={0.25}
              stagger={0.07}
              by="word"
            />
            <p style={{ color: "var(--cream-dim)", fontSize: "19px", marginTop: "14px" }}>
              {product.longDesc}
            </p>
            <ProductControls specs={product.specs} />
            <Link href="/contact" className="btn btn-solid">Enquire to Order</Link>
          </FadeIn>
        </div>
      </div>

      {/* ======== TASTING NOTES ======== */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <FadeIn y={40}>
            <div className="prose">
              <p className="eyebrow">Tasting Notes</p>
              <BlurRevealText text={product.tastingNotes.title} as="h2" delay={0.1} />
              {product.tastingNotes.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} y={40}>
            <RoeTin size="lg" />
          </FadeIn>
        </div>
      </section>

      {/* ======== CARE NOTE ======== */}
      <section style={{ paddingTop: 0 }}>
        <FadeIn>
          <div className="wrap">
            <div className="note-box" style={{ textAlign: "center" }}>
              <strong>Sustainably farmed · Malossol · Never frozen</strong> — Ships
              from New York in a temperature-controlled overnight case. See our{" "}
              <Link href="/shipping" style={{ color: "var(--gold-bright)", textDecoration: "underline" }}>
                Shipping &amp; Care
              </Link>{" "}
              page for storage and best-by guidance.
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ======== RELATED PRODUCTS ======== */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <FadeIn>
            <div className="section-head">
              <p className="eyebrow">Continue Exploring</p>
              <BlurRevealText text="More from the collection" as="h2" delay={0.1} />
            </div>
          </FadeIn>
          <StaggerGrid className="grid-3">
            {related.map((rel) => (
              <div key={rel.slug} className="card">
                <RoeTin size="sm" />
                <p className="species">{rel.species}</p>
                <h3>{rel.name}</h3>
                <p>{rel.shortDesc}</p>
                <Link href={`/${rel.slug}`} className="btn">View Tin</Link>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
