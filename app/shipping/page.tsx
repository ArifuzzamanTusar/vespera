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
  title: "Shipping & Care — Overnight Cold Chain Protocol",
  description:
    "Every Vespera tin travels packed to order, sealed cold, and shipped overnight from New York. Refrigerate at 28–32°F and enjoy within 2–3 days of opening.",
  alternates: { canonical: "/shipping" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemPage",
      "@id": absoluteUrl("/shipping#webpage"),
      url: absoluteUrl("/shipping"),
      name: "Vespera Caviar Shipping & Care Guide",
      description:
        "Information on Vespera Caviar's overnight refrigerated cold chain, storage temperatures, and tasting presentation.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Vespera ship caviar to ensure freshness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every tin is packed to order in New York and shipped overnight in a vacuum-insulated thermal case with specialized cooling packs maintaining 28–32°F throughout transit.",
          },
        },
        {
          "@type": "Question",
          name: "How should caviar be stored upon arrival?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Refrigerate immediately at 28–32°F (-2°C to 0°C), preferably in the coldest rear compartment of your refrigerator rather than the door.",
          },
        },
        {
          "@type": "Question",
          name: "What is the shelf life of unopened and opened caviar tins?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unopened tins maintain peak quality until the best-by date stamped on the base (typically 3–4 weeks). Once opened, consume within 2–3 days while keeping chilled.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I use mother-of-pearl spoons for serving caviar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reactive metals like silver and stainless steel can oxidize and impart a metallic aftertaste to delicate sturgeon roe. Non-reactive mother-of-pearl, horn, or gold preserves pure flavor.",
          },
        },
      ],
    },
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Shipping & Care", path: "/shipping" },
    ]),
  ],
};

export default function ShippingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FadeIn>
        <div className="page-head">
          <p className="eyebrow">Shipping &amp; Care</p>
          <h1>From our door to yours, in one cold chain</h1>
          <p>
            Every tin travels the same route — packed to order, sealed cold, and
            shipped overnight from New York.
          </p>
        </div>
      </FadeIn>

      {/* ---- THE JOURNEY ---- */}
      <section>
        <div className="wrap">
          <FadeIn>
            <div className="section-head">
              <p className="eyebrow">The Journey</p>
              <BlurRevealText text="Three steps, one night" as="h2" delay={0.1} />
            </div>
          </FadeIn>
          <StaggerGrid className="ship-steps">
            <div className="ship-step">
              <p className="num">I.</p>
              <h3>Packed in New York</h3>
              <p>Your tin is selected and packed the same day it ships — never pulled from long-held stock.</p>
            </div>
            <div className="ship-step">
              <p className="num">II.</p>
              <h3>Sealed cold</h3>
              <p>Each order travels in an insulated, temperature-controlled case designed to hold near-freezing temperatures for the full transit window.</p>
            </div>
            <div className="ship-step">
              <p className="num">III.</p>
              <h3>Overnight to your door</h3>
              <p>Delivery arrives the next morning. We recommend being present to receive it, or arranging a cold, shaded drop location.</p>
            </div>
          </StaggerGrid>
        </div>
      </section>

      {/* ---- STORAGE ---- */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <FadeIn y={40}>
            <div className="prose">
              <p className="eyebrow">Storage</p>
              <BlurRevealText text="Once it arrives" as="h2" delay={0.1} />
              <p>
                Refrigerate immediately at 28–32°F, ideally in the coldest part
                of your refrigerator rather than the door. An unopened tin from
                Vespera holds its quality for the best-by date printed on the
                base of the tin — typically two to three weeks from packing.
              </p>
              <p>
                Once opened, we recommend enjoying the tin within two to three
                days, kept tightly sealed and nestled in ice between servings.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} y={40}>
            {/*
              IMAGE: /public/images/shipping-cold.jpg
              Size: 1200×800px
              Prompt: "Insulated luxury caviar shipping case open on white marble,
                       dry ice mist rising, black tin inside with gold label,
                       cool blue-white light, premium packaging editorial photography"
            */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", border: "1px solid rgba(201,162,39,0.28)", overflow: "hidden" }}>
              <SafeImage
                src="/images/shipping-cold.jpg"
                alt="Insulated Vespera caviar shipping case open on marble with dry ice mist"
                fill
                sizes="(max-width:820px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RoeTin size="lg" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---- SERVING ---- */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RoeDivider />
          <FadeIn>
            <div className="section-head">
              <p className="eyebrow">Serving</p>
              <BlurRevealText text="A few notes on presentation" as="h2" delay={0.1} />
            </div>
          </FadeIn>
          <StaggerGrid className="grid-3">
            <div className="card">
              <h3>Use mother-of-pearl</h3>
              <p>Metal spoons can affect the flavor. Serve with mother-of-pearl, horn, or glass.</p>
            </div>
            <div className="card">
              <h3>Keep it cold</h3>
              <p>Nest the open tin in a bed of crushed ice throughout service to preserve texture.</p>
            </div>
            <div className="card">
              <h3>Let it speak</h3>
              <p>Our tins are built to be tasted on their own before you reach for blinis or crème fraîche.</p>
            </div>
          </StaggerGrid>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section style={{ paddingTop: 0 }}>
        <FadeIn>
          <div className="wrap" style={{ textAlign: "center" }}>
            <div className="badge" style={{ marginBottom: "22px" }}>Ships from New York</div>
            <h2 style={{ marginBottom: "20px" }}>Questions about a specific order?</h2>
            <Link href="/contact" className="btn btn-solid">Contact Private Client</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
