import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import ProductControls from "@/components/ProductControls";
import RoeDivider from "@/components/RoeDivider";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGrid from "@/components/motion/StaggerGrid";
import BlurRevealText from "@/components/motion/BlurRevealText";
import { type Product, PRODUCTS } from "@/lib/products";

interface ProductPageProps {
  product: Product;
  imageSrc: string;
  imageAlt: string;
}

export default function ProductPage({
  product,
  imageSrc,
  imageAlt,
}: ProductPageProps) {
  const related = PRODUCTS.filter((p) => product.related.includes(p.slug));

  return (
    <>
      {/* ======== PRODUCT HERO ======== */}
      <div className="wrap">
        <div className="product-hero" style={{ padding: "60px 0 40px" }}>
          {/* Left: Product Visual Frame */}
          <FadeIn y={20}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(201, 162, 39, 0.35)",
                boxShadow:
                  "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(201, 162, 39, 0.08)",
                background: "radial-gradient(circle at 50% 50%, #15130f 0%, #0a0a0a 100%)",
              }}
            >
              <SafeImage
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width:860px) 100vw, 48vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    background: "rgba(10, 10, 10, 0.85)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--hairline)",
                    padding: "6px 12px",
                    fontFamily: "var(--font-jost)",
                    fontSize: "11.5px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  Malossol · Never Frozen
                </span>
                <span
                  style={{
                    background: "rgba(10, 10, 10, 0.85)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--hairline)",
                    padding: "6px 12px",
                    fontFamily: "var(--font-jost)",
                    fontSize: "11.5px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--cream-dim)",
                  }}
                >
                  New York Packed
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right: Product Details & Purchase Controls */}
          <FadeIn delay={0.15} y={28}>
            <p className="eyebrow" style={{ marginBottom: "8px" }}>
              {product.eyebrow}
            </p>
            <BlurRevealText
              text={product.name}
              as="h1"
              delay={0.2}
              stagger={0.06}
              by="word"
            />

            {/* Profile Highlight Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                margin: "14px 0 18px",
              }}
            >
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid rgba(201, 162, 39, 0.25)",
                    background: "rgba(20, 19, 16, 0.6)",
                    padding: "4px 10px",
                    fontSize: "12px",
                    fontFamily: "var(--font-jost)",
                    letterSpacing: "0.04em",
                    color: "var(--cream)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p
              style={{
                color: "var(--cream-dim)",
                fontSize: "17.5px",
                lineHeight: 1.6,
                margin: "0 0 8px",
              }}
            >
              {product.longDesc}
            </p>

            {/* Dynamic Sizing, Pricing & Specs Controls */}
            <ProductControls
              specs={product.specs}
              price1oz={product.price1oz}
              price2oz={product.price2oz}
              productName={product.name}
            />
          </FadeIn>
        </div>
      </div>

      {/* ======== TASTING & SOMMELIER PAIRINGS ======== */}
      <section style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <RoeDivider />
          <div className="split" style={{ alignItems: "stretch", marginTop: "40px" }}>
            {/* Left: Sensorial Tasting Profile */}
            <FadeIn y={30}>
              <div
                style={{
                  background: "var(--charcoal)",
                  border: "1px solid var(--hairline)",
                  padding: "44px 38px",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p className="eyebrow" style={{ marginBottom: "12px" }}>
                  Sensory Experience
                </p>
                <BlurRevealText
                  text={product.tastingNotes.title}
                  as="h2"
                  delay={0.1}
                />
                <div style={{ marginTop: "16px", color: "var(--cream-dim)", fontSize: "17px", lineHeight: 1.65, flexGrow: 1 }}>
                  {product.tastingNotes.body.map((para, i) => (
                    <p key={i} style={{ marginBottom: "16px" }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: Sommelier Pairing Guide Card (Replaced duplicate image) */}
            <FadeIn delay={0.15} y={30}>
              <div
                style={{
                  background: "var(--charcoal-2)",
                  border: "1px solid rgba(201, 162, 39, 0.4)",
                  padding: "44px 38px",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p className="eyebrow" style={{ marginBottom: "12px" }}>
                    Sommelier &amp; Pairing Notes
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "24px",
                      color: "var(--cream)",
                      marginBottom: "24px",
                    }}
                  >
                    Culinary Harmony
                  </h3>

                  <div style={{ display: "grid", gap: "20px" }}>
                    <div>
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-jost)",
                          fontSize: "12px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: "4px",
                        }}
                      >
                        Recommended Beverage
                      </span>
                      <p style={{ margin: 0, color: "var(--cream)", fontSize: "15.5px" }}>
                        {product.pairings.beverage}
                      </p>
                    </div>

                    <div>
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-jost)",
                          fontSize: "12px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: "4px",
                        }}
                      >
                        Table Accompaniments
                      </span>
                      <p style={{ margin: 0, color: "var(--cream)", fontSize: "15.5px" }}>
                        {product.pairings.accompaniment}
                      </p>
                    </div>

                    <div>
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-jost)",
                          fontSize: "12px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: "4px",
                        }}
                      >
                        Serving Ritual
                      </span>
                      <p style={{ margin: 0, color: "var(--cream)", fontSize: "15.5px" }}>
                        {product.pairings.ritual}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "28px",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--hairline)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "var(--cream-dim)", fontFamily: "var(--font-jost)" }}>
                    Storage: 28–32°F (-2°C to 0°C)
                  </span>
                  <Link
                    href="/shipping"
                    style={{
                      color: "var(--gold-bright)",
                      fontSize: "13px",
                      fontFamily: "var(--font-jost)",
                      textDecoration: "underline",
                    }}
                  >
                    View Care Guide →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======== THREE HOUSE PILLARS ======== */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <StaggerGrid className="grid-3">
            <div className="card" style={{ padding: "36px 28px" }}>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "11px", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>
                Purity
              </span>
              <h3 style={{ fontSize: "20px", margin: "8px 0 10px" }}>Malossol Light Salt</h3>
              <p style={{ fontSize: "15px", margin: 0 }}>
                Cured with minimal pure mineral salt under 3.5% to protect the natural oceanic nuances of the roe.
              </p>
            </div>
            <div className="card" style={{ padding: "36px 28px" }}>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "11px", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>
                Integrity
              </span>
              <h3 style={{ fontSize: "20px", margin: "8px 0 10px" }}>Never Frozen</h3>
              <p style={{ fontSize: "15px", margin: 0 }}>
                Shipped unpasteurized in strict cold-chain cases to preserve the delicate structural pop of each pearl.
              </p>
            </div>
            <div className="card" style={{ padding: "36px 28px" }}>
              <span style={{ fontFamily: "var(--font-jost)", fontSize: "11px", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>
                Logistics
              </span>
              <h3 style={{ fontSize: "20px", margin: "8px 0 10px" }}>Overnight from NY</h3>
              <p style={{ fontSize: "15px", margin: 0 }}>
                Packed to order on the day of dispatch in insulated vacuum cases directly to your door.
              </p>
            </div>
          </StaggerGrid>
        </div>
      </section>

      {/* ======== CONTINUE EXPLORING ======== */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RoeDivider />
          <FadeIn>
            <div className="section-head" style={{ marginTop: "30px" }}>
              <p className="eyebrow">Continue Exploring</p>
              <BlurRevealText text="More from the collection" as="h2" delay={0.1} />
            </div>
          </FadeIn>
          <StaggerGrid className="grid-2">
            {related.map((rel) => (
              <div key={rel.slug} className="card">
                <div className="card-tin-wrap">
                  <SafeImage
                    src={`/images/tin-${rel.slug}.jpg`}
                    alt={rel.name}
                    fill
                    sizes="110px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="species">{rel.species}</p>
                <h3>{rel.name}</h3>
                <p>{rel.shortDesc}</p>
                <div style={{ marginTop: "auto", display: "flex", gap: "10px" }}>
                  <Link href={`/${rel.slug}`} className="btn btn-solid" style={{ flex: 1 }}>
                    Explore Selection
                  </Link>
                </div>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
