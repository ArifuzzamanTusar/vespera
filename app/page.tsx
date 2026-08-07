import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import RoeTin from "@/components/RoeTin";
import RoeDivider from "@/components/RoeDivider";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGrid from "@/components/motion/StaggerGrid";
import BlurRevealText from "@/components/motion/BlurRevealText";
import AuroraBlobs from "@/components/motion/AuroraBlobs";
import GoldGrain from "@/components/motion/GoldGrain";
import ParallaxHero from "@/components/motion/ParallaxHero";

export const metadata: Metadata = {
  title: "Vespera Caviar — Exceptional Caviar, Shipped from New York",
  description:
    "Sustainably farmed roe, malossol-cured and never frozen, sent to your door overnight in a temperature-controlled case. No storefront, no middleman — just the tin.",
  alternates: { canonical: "https://vesperacaviar.com" },
};

// JSON-LD — WebSite + Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://vesperacaviar.com/#website",
      url: "https://vesperacaviar.com",
      name: "Vespera Caviar",
      description:
        "Exceptional caviar, sustainably sourced, malossol-cured, and never frozen. Shipped from New York.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://vesperacaviar.com/shop?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://vesperacaviar.com/#organization",
      name: "Vespera Caviar",
      url: "https://vesperacaviar.com",
      description:
        "A small New York house working directly with sustainable sturgeon farms. Malossol-cured, never frozen caviar shipped overnight.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "concierge@vesperacaviar.com",
        contactType: "customer service",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ======== HERO ======== */}
      <header className="hero" style={{ position: "relative" }}>
        {/* Hero background image */}
        {/*
          IMAGE: /public/images/hero-bg.jpg
          Size: 1920×1080px
          Prompt: "Dark luxury caviar tin on crushed ice, black background,
                   gold rim highlight, extreme macro, cinematic lighting,
                   rich blacks, subtle gold specular"
        */}
        <SafeImage
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.22 }}
          aria-hidden="true"
        />

        <AuroraBlobs />
        <GoldGrain />

        <ParallaxHero>
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FadeIn delay={0} duration={0.8}>
              <svg
                className="hero-mark"
                viewBox="0 0 64 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M9 9 L31 46 L53 9" stroke="#C9A227" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="31" cy="24" r="9" stroke="#C9A227" strokeWidth="1.4" fill="#0A0A0A" />
                <circle cx="27.5" cy="22" r="1.3" fill="#3a3324" />
                <circle cx="31.5" cy="26.5" r="1.6" fill="#241f14" />
                <circle cx="34.5" cy="21.5" r="1.1" fill="#453d28" />
                <line x1="31" y1="46" x2="31" y2="60" stroke="#C9A227" strokeWidth="1.2" />
                <circle cx="31" cy="63" r="2.6" fill="#111008" stroke="#C9A227" strokeWidth="0.8" />
              </svg>
            </FadeIn>

            <h1 style={{ fontSize: "clamp(38px,6vw,68px)", lineHeight: 1.06, maxWidth: "14ch", textAlign: "center", margin: "0 0 0.5em" }}>
              <BlurRevealText text="Exceptional Caviar. Shipped from New York." as="span" delay={0.2} stagger={0.06} by="word" />
            </h1>

            <FadeIn delay={0.7} y={16}>
              <p className="lede">
                Sustainably farmed roe, malossol-cured and never frozen, sent to
                your door overnight in a temperature-controlled case — no
                storefront, no middleman, just the tin.
              </p>
            </FadeIn>

            <FadeIn delay={0.9} y={12}>
              <div className="hero-actions">
                <Link href="/shop" className="btn btn-solid">View the Collection</Link>
                <Link href="/about" className="btn">Our Story</Link>
              </div>
            </FadeIn>

            <FadeIn delay={1.1} y={8}>
              <div className="badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 2C8 2 5 5.5 5 9.5c0 5.5 7 12.5 7 12.5s7-7 7-12.5C19 5.5 16 2 12 2z" />
                  <circle cx="12" cy="9.5" r="2.3" />
                </svg>
                Ships from New York
              </div>
            </FadeIn>
          </div>
        </ParallaxHero>
      </header>

      {/* ======== THE HOUSE ======== */}
      <section>
        <div className="wrap">
          <FadeIn>
            <div className="section-head">
              <p className="eyebrow">The House</p>
              <BlurRevealText text="A quiet obsession with the pearl" as="h2" delay={0.1} />
              <p>
                Vespera works with a small number of sustainable sturgeon farms to
                select roe at its peak — firm, glossy, and correct in salt. Every
                tin is packed to order and never held in inventory.
              </p>
            </div>
          </FadeIn>
          <RoeDivider />
        </div>
      </section>

      {/* ======== FEATURED SELECTIONS ======== */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <FadeIn>
            <div className="section-head">
              <p className="eyebrow">Featured Selections</p>
              <BlurRevealText text="Three tins, one standard" as="h2" delay={0.1} />
            </div>
          </FadeIn>

          <StaggerGrid className="grid-3">
            <div className="card">
              <RoeTin size="sm" />
              <p className="species">Acipenser baerii</p>
              <h3>Siberian Sturgeon Classic</h3>
              <p>Jet-black pearls with a firm pop and a clean, nutty, slightly spicy finish. The everyday luxury benchmark.</p>
              <Link href="/siberian" className="btn">View Tin</Link>
            </div>
            <div className="card">
              <RoeTin size="sm" />
              <p className="species">Kaluga × Amur Hybrid</p>
              <h3>Kaluga Fusion Reserve</h3>
              <p>Large olive-brown pearls, buttery and balanced with a clean briny elegance. Approachable sophistication.</p>
              <Link href="/kaluga" className="btn">View Tin</Link>
            </div>
            <div className="card">
              <RoeTin size="sm" />
              <p className="species">Kaluga × Amur, Top Selection</p>
              <h3>Imperial Kaluga Fusion</h3>
              <p>The largest, most luxurious pearls in the collection — intensely creamy, often likened to classic Beluga.</p>
              <Link href="/imperial" className="btn">View Tin</Link>
            </div>
          </StaggerGrid>
        </div>
      </section>

      {/* ======== NEVER FROZEN ======== */}
      <section>
        <div className="wrap split">
          <FadeIn y={40}>
            <div className="prose">
              <p className="eyebrow">Why Vespera</p>
              <BlurRevealText text="Never frozen. Never rushed." as="h2" delay={0.1} />
              <p>
                Freezing a tin extends its shelf life at the cost of texture —
                the pop that defines great caviar. We don&apos;t make that trade.
                Every order leaves our New York facility within a day of packing,
                in a sealed, temperature-controlled case, so the roe reaches you
                exactly as it left the farm.
              </p>
              <p>
                No retail storefront, no distributor markup. Just a relationship
                between the house and the table it&apos;s served on.
              </p>
              <Link href="/shipping" className="btn">Shipping &amp; Care</Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} y={40}>
            {/*
              IMAGE: /public/images/about-story.jpg
              Size: 800×800px
              Prompt: "Elegant hands carefully opening a black caviar tin, gold rim,
                       white linen, candle light, fine dining atmosphere, dark moody background"
            */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", border: "1px solid rgba(201,162,39,0.28)" }}>
              <SafeImage
                src="/images/about-story.jpg"
                alt="A tin of Vespera caviar being opened at an elegant table"
                fill
                sizes="(max-width:820px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {/* Fallback pearl cluster shown until image is placed */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RoeTin size="lg" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
