import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function ProductOG({ name, species, tagline }: { name: string; species: string; tagline: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0A0A0A 0%, #141310 60%, #0d0c09 100%)",
        position: "relative",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "35%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)",
        }}
      />
      <div style={{ fontSize: 14, letterSpacing: "0.28em", color: "#C9A227", textTransform: "uppercase", marginBottom: "10px" }}>
        VESPERA CAVIAR
      </div>
      <div style={{ fontSize: 13, letterSpacing: "0.16em", color: "#6E5A22", fontStyle: "italic", marginBottom: "28px" }}>
        {species}
      </div>
      <div style={{ fontSize: 62, fontWeight: 700, color: "#F1ECDD", textAlign: "center", lineHeight: 1.08, maxWidth: "860px" }}>
        {name}
      </div>
      <div style={{ fontSize: 20, color: "#C9C2AC", marginTop: "22px", textAlign: "center", maxWidth: "560px", lineHeight: 1.5 }}>
        {tagline}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "60px",
          right: "60px",
          height: "1px",
          background: "rgba(201,162,39,0.28)",
        }}
      />
      <div style={{ position: "absolute", bottom: "20px", fontSize: 12, letterSpacing: "0.16em", color: "#6E5A22", textTransform: "uppercase" }}>
        vesperacaviar.com
      </div>
    </div>
  );
}

export function SiberianOG() {
  return new ImageResponse(
    <ProductOG
      name="Siberian Sturgeon Classic"
      species="Acipenser baerii"
      tagline="Jet-black pearls · Firm pop · Nutty, earthy finish"
    />,
    { ...size }
  );
}

export function KalugaOG() {
  return new ImageResponse(
    <ProductOG
      name="Kaluga Fusion Reserve"
      species="Kaluga × Amur Hybrid"
      tagline="Large olive-brown pearls · Buttery · Briny elegance"
    />,
    { ...size }
  );
}

export function ImperialOG() {
  return new ImageResponse(
    <ProductOG
      name="Imperial Kaluga Fusion"
      species="Kaluga × Amur, Highest Selection"
      tagline="The house's most luxurious tin · Intensely creamy"
    />,
    { ...size }
  );
}
