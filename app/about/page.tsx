import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import RoeTin from "@/components/RoeTin";
import RoeDivider from "@/components/RoeDivider";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGrid from "@/components/motion/StaggerGrid";
import BlurRevealText from "@/components/motion/BlurRevealText";
import { siteConfig, absoluteUrl, createBreadcrumbSchema } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About the House",
  description:
    "Vespera Caviar — a small New York house working directly with sustainable sturgeon farms. No storefront, no distributor markup. Every tin packed to order.",
  alternates: { canonical: "/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": absoluteUrl("/about#webpage"),
      url: absoluteUrl("/about"),
      name: "About Vespera Caviar",
      description:
        "A small New York house working directly with sustainable sturgeon farms. Malossol-cured, never frozen caviar shipped overnight.",
      mainEntity: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FadeIn>
        <div className="page-head">
          <p className="eyebrow">About Vespera</p>
          <h1>A house, not a storefront</h1>
          <p>
            Understated luxury, built on a relationship between the tin and the
            table it&apos;s served on.
          </p>
        </div>
      </FadeIn>

      {/* ---- STORY ---- */}
      <section>
        <div className="wrap split">
          <FadeIn y={40}>
            {/*
              IMAGE: /public/images/about-story.jpg
              Size: 1200×800px
              Prompt: "Elegant hands carefully opening a black caviar tin, gold rim,
                       white linen cloth, candlelight, fine dining atmosphere,
                       dark moody background, cinematic shallow depth of field"
            */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", border: "1px solid rgba(201,162,39,0.28)", overflow: "hidden" }}>
              <SafeImage
                src="/images/about-story.jpg"
                alt="A Vespera caviar tin being opened at an elegant candlelit table"
                fill
                sizes="(max-width:820px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RoeTin size="lg" />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} y={40}>
            <div className="prose">
              <p className="eyebrow">Our Story</p>
              <BlurRevealText text="Founded on restraint" as="h2" delay={0.1} />
              <p>
                Vespera Caviar began with a simple frustration: exceptional caviar
                was either locked behind a restaurant markup or sold through
                channels that had no relationship with the person eating it. We
                built Vespera the other way around — a small New York house,
                working directly with a short list of sustainable farms, sending
                tins straight to the people who ordered them.
              </p>
              <p>
                There is no shop to visit and no shelf to sit on. Every order is
                packed against a request, not pulled from stock, which is the only
                way we know to guarantee a tin that was never frozen and never held.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---- COMMITMENTS ---- */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RoeDivider />
          <FadeIn>
            <div className="section-head">
              <p className="eyebrow">What We Believe</p>
              <BlurRevealText text="Three commitments" as="h2" delay={0.1} />
            </div>
          </FadeIn>
          <StaggerGrid className="grid-3">
            <div className="card">
              <h3>Sustainably sourced</h3>
              <p>We work only with farms that raise sturgeon responsibly, with full traceability from tank to tin.</p>
            </div>
            <div className="card">
              <h3>Malossol, always</h3>
              <p>Lightly salted in the traditional style — enough to preserve, never enough to mask the pearl.</p>
            </div>
            <div className="card">
              <h3>Never frozen</h3>
              <p>Texture is the point. Every tin ships fresh, in a temperature-controlled case, from New York.</p>
            </div>
          </StaggerGrid>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section style={{ paddingTop: 0 }}>
        <FadeIn>
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="eyebrow">Based In</p>
            <h2 style={{ marginBottom: "20px" }}>New York, and nowhere else — yet</h2>
            <p style={{ color: "var(--cream-dim)", maxWidth: "56ch", margin: "0 auto 30px" }}>
              Every tin leaves our New York facility, which keeps our shipping
              window short and our roe correct in temperature the whole way to
              your door.
            </p>
            <Link href="/shop" className="btn btn-solid">Explore the Collection</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
