import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 800, height: 418 };
export const contentType = "image/png";

// Twitter uses summary_large_image at 2:1 ratio
export default function TwitterImage() {
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
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "25%",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,162,39,0.16) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
          {[5, 8, 11, 8, 5].map((s, i) => (
            <div
              key={i}
              style={{
                width: s,
                height: s,
                borderRadius: "50%",
                background: "radial-gradient(circle at 32% 28%, #4a4232, #232019 38%, #0c0b08)",
              }}
            />
          ))}
        </div>

        <div style={{ fontSize: 16, letterSpacing: "0.3em", color: "#C9A227", textTransform: "uppercase", marginBottom: "14px" }}>
          VESPERA CAVIAR
        </div>

        <div
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: "#F1ECDD",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "640px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Exceptional Caviar.</span>
          <span>Shipped from New York.</span>
        </div>

        <div style={{ fontSize: 16, color: "#C9C2AC", marginTop: "16px", letterSpacing: "0.06em" }}>
          Sustainably farmed · Malossol · Never frozen
        </div>

        <div style={{ position: "absolute", bottom: "16px", fontSize: 11, color: "#6E5A22", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          vesperacaviar.com
        </div>
      </div>
    ),
    { ...size }
  );
}
