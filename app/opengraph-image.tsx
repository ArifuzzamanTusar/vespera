import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
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
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "30%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,162,39,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Pearl cluster decoration */}
        <div style={{ display: "flex", gap: "6px", marginBottom: "32px" }}>
          {[6, 10, 14, 10, 6].map((size, i) => (
            <div
              key={i}
              style={{
                width: size,
                height: size,
                borderRadius: "50%",
                background: "radial-gradient(circle at 32% 28%, #4a4232, #232019 38%, #0c0b08)",
                boxShadow: "inset 0 0 3px rgba(232,196,104,0.35)",
              }}
            />
          ))}
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.32em",
            color: "#C9A227",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: "24px",
          }}
        >
          VESPERA CAVIAR
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#F1ECDD",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
            letterSpacing: "-0.01em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Exceptional Caviar.</span>
          <span>Shipped from New York.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 22,
            color: "#C9C2AC",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Sustainably farmed · Malossol-cured · Never frozen
        </div>

        {/* Bottom hairline */}
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
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            fontSize: 13,
            letterSpacing: "0.16em",
            color: "#6E5A22",
            textTransform: "uppercase",
          }}
        >
          vesperacaviar.com
        </div>
      </div>
    ),
    { ...size }
  );
}
