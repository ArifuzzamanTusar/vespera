import type { Metadata } from "next";
import Image from "next/image";
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
import { siteConfig, absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Exceptional Caviar, Shipped from New York`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

// JSON-LD — WebSite + Organization + WebPage
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${absoluteUrl("/shop")}?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      logo: absoluteUrl(siteConfig.images.logo),
      image: absoluteUrl(siteConfig.images.ogImage),
      description: siteConfig.description,
      priceRange: siteConfig.priceRange,
      currenciesAccepted: siteConfig.currenciesAccepted,
      paymentAccepted: siteConfig.paymentAccepted,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.state,
        postalCode: siteConfig.contact.postalCode,
        addressCountry: siteConfig.contact.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contact.email,
        contactType: "customer service",
        availableLanguage: ["English"],
      },
      knowsAbout: [
        "Artisanal Caviar",
        "Sturgeon Aquaculture",
        "Malossol Curing",
        "Acipenser baerii",
        "Huso dauricus",
      ],
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      url: siteConfig.url,
      name: `${siteConfig.name} — ${siteConfig.tagline}`,
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#organization") },
      description: siteConfig.description,
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
              <Image
                src="/images/vespera-logo.png"
                alt="Vespera Caviar Icon"
                width={92}
                height={92}
                priority
                className="hero-mark"
                style={{
                  width: "92px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 24px rgba(201, 162, 39, 0.4))",
                }}
              />
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
