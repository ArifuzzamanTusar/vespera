"use client";

import { useState } from "react";
import Link from "next/link";

interface Spec {
  label: string;
  value: string;
}

interface ProductControlsProps {
  specs: Spec[];
  price1oz: string;
  price2oz: string;
  productName: string;
}

export default function ProductControls({
  specs,
  price1oz,
  price2oz,
  productName: _,
}: ProductControlsProps) {
  const [size, setSize] = useState<"1oz" | "2oz">("1oz");
  const currentPrice = size === "1oz" ? price1oz : price2oz;

  return (
    <div style={{ margin: "28px 0 0" }}>
      {/* Price & Size Header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          paddingBottom: "16px",
          borderBottom: "1px solid var(--hairline)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
          <span
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "32px",
              fontWeight: 600,
              color: "var(--gold-bright)",
            }}
          >
            {currentPrice}
          </span>
          <span
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "13px",
              color: "var(--cream-dim)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            USD · Overnight Cold-Chain Included
          </span>
        </div>

        {/* Size Switcher */}
        <div className="size-toggle" role="group" aria-label="Select tin size" style={{ margin: 0 }}>
          <button
            id="size-1oz"
            type="button"
            className={size === "1oz" ? "active" : undefined}
            onClick={() => setSize("1oz")}
            aria-pressed={size === "1oz"}
          >
            1 oz ({price1oz})
          </button>
          <button
            id="size-2oz"
            type="button"
            className={size === "2oz" ? "active" : undefined}
            onClick={() => setSize("2oz")}
            aria-pressed={size === "2oz"}
          >
            2 oz ({price2oz})
          </button>
        </div>
      </div>

      {/* Primary Action Button */}
      <div style={{ marginTop: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Link href="/contact" className="btn btn-solid" style={{ flex: 1, textAlign: "center", padding: "16px 28px" }}>
          Enquire to Order — {size} Tin
        </Link>
        <Link href="/shipping" className="btn" style={{ padding: "16px 22px", textAlign: "center" }}>
          Cold Chain Details
        </Link>
      </div>

      {/* Specifications Table */}
      <div style={{ marginTop: "32px" }}>
        <p className="eyebrow" style={{ fontSize: "11px", marginBottom: "14px" }}>
          Sturgeon Specifications
        </p>
        <ul className="spec-list" style={{ margin: 0 }}>
          {specs.map((s) => (
            <li key={s.label}>
              <span>{s.label}</span>
              <span>{s.value}</span>
            </li>
          ))}
          <li>
            <span>Active Selection</span>
            <span style={{ color: "var(--gold-bright)", fontWeight: 500 }}>
              {size === "1oz" ? `1 oz Vacuum-Sealed Tin (${price1oz})` : `2 oz Vacuum-Sealed Tin (${price2oz})`}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
