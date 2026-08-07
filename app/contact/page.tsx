import type { Metadata } from "next";
import RoeDivider from "@/components/RoeDivider";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/motion/FadeIn";
import BlurRevealText from "@/components/motion/BlurRevealText";

export const metadata: Metadata = {
  title: "Private Client",
  description:
    "Contact Vespera Caviar for personal orders, wholesale inquiries, or concierge event service. No ticketing system — someone from the team responds personally.",
  alternates: { canonical: "https://vesperacaviar.com/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <FadeIn>
        <div className="page-head">
          <p className="eyebrow">Private Client</p>
          <h1>For orders, wholesale, and concierge service</h1>
          <p>
            Tell us what you need and someone from Vespera will respond
            personally — no ticketing system, no queue.
          </p>
        </div>
      </FadeIn>

      <section>
        <div className="wrap">
          <FadeIn delay={0.1} y={20}>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.25}>
            <div
              className="note-box"
              style={{ maxWidth: "560px", margin: "36px auto 0", textAlign: "center" }}
            >
              Prefer email? Reach us directly at{" "}
              <strong>concierge@vesperacaviar.com</strong>. We&apos;re based in
              New York and typically respond within one business day.
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <RoeDivider />
          <FadeIn>
            <div className="section-head">
              <p className="eyebrow">While You Wait</p>
              <BlurRevealText text="Explore the collection" as="h2" delay={0.1} />
              <p>
                Browse our three tins — each malossol-cured, never frozen, and
                packed to order from New York.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
