"use client";

import { useState } from "react";

interface Spec {
  label: string;
  value: string;
}

interface ProductControlsProps {
  specs: Spec[];
}

export default function ProductControls({ specs }: ProductControlsProps) {
  const [size, setSize] = useState<"oz1" | "oz2">("oz1");

  return (
    <>
      <div className="size-toggle" role="group" aria-label="Select size">
        <button
          id="size-1oz"
          className={size === "oz1" ? "active" : undefined}
          onClick={() => setSize("oz1")}
          aria-pressed={size === "oz1"}
        >
          1 oz
        </button>
        <button
          id="size-2oz"
          className={size === "oz2" ? "active" : undefined}
          onClick={() => setSize("oz2")}
          aria-pressed={size === "oz2"}
        >
          2 oz
        </button>
      </div>

      <ul className="spec-list">
        {specs.map((s) => (
          <li key={s.label}>
            <span>{s.label}</span>
            <span>{s.value}</span>
          </li>
        ))}
        <li>
          <span>Size selected</span>
          <span>{size === "oz1" ? "1 oz tin" : "2 oz tin"}</span>
        </li>
      </ul>
    </>
  );
}
