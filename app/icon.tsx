import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Programmatic favicon — renders the Vespera "V" logo in gold on dark
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          borderRadius: "4px",
        }}
      >
        <svg
          viewBox="0 0 64 68"
          width={24}
          height={24}
          fill="none"
        >
          <path
            d="M9 9 L31 46 L53 9"
            stroke="#C9A227"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="31" cy="24" r="9" stroke="#C9A227" strokeWidth="3" fill="#0A0A0A" />
          <line x1="31" y1="46" x2="31" y2="60" stroke="#C9A227" strokeWidth="3" />
          <circle cx="31" cy="63" r="3" fill="#111008" stroke="#C9A227" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
