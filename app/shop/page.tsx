import type { Metadata } from "next";
import Link from "next/link";
import RoeTin from "@/components/RoeTin";
import RoeDivider from "@/components/RoeDivider";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGrid from "@/components/motion/StaggerGrid";
import BlurRevealText from "@/components/motion/BlurRevealText";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Browse all three Vespera Caviar selections — Siberian Sturgeon Classic, Kaluga Fusion Reserve, and Imperial Kaluga Fusion. Sustainably farmed, malossol-cured, never frozen.",
  alternates: { canonical: "https://vesperacaviar.com/shop" },
};

export default function ShopPage() {
  return (
    <>
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
              <RoeTin size="sm" />
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
              <RoeTin size="sm" />
              <p className="species">Kaluga × Amur Hybrid</p>
              <h3>Kaluga Fusion Reserve</h3>
              <p>
                Large, glossy deep olive to brown pearls. Rich butteriness
                layered with subtle sweetness and a complex nutty finish.
              </p>
              <Link href="/kaluga" className="btn">View Tin</Link>
            </div>
            <div className="card">
              <RoeTin size="sm" />
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
