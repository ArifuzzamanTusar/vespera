"use client";

import { useState } from "react";

interface SizeToggleProps {
  sizes?: { key: string; label: string; value: string }[];
}

const DEFAULT_SIZES = [
  { key: "oz1", label: "1 oz", value: "1 oz tin" },
  { key: "oz2", label: "2 oz", value: "2 oz tin" },
];

export default function SizeToggle({ sizes = DEFAULT_SIZES }: SizeToggleProps) {
  const [active, setActive] = useState(sizes[0].key);

  const selectedValue = sizes.find((s) => s.key === active)?.value ?? "";

  return (
    <>
      <div
        className="size-toggle"
        role="group"
        aria-label="Select size"
        data-selected-value={selectedValue}
      >
        {sizes.map((s) => (
          <button
            key={s.key}
            className={active === s.key ? "active" : undefined}
            onClick={() => setActive(s.key)}
            aria-pressed={active === s.key}
          >
            {s.label}
          </button>
        ))}
      </div>
      <data value={selectedValue} style={{ display: "none" }} />
    </>
  );
}

// Export selected value accessor for use in spec list
export function SizeValue({
  sizes = DEFAULT_SIZES,
}: {
  sizes?: typeof DEFAULT_SIZES;
}) {
  return <SizeToggle sizes={sizes} />;
}
