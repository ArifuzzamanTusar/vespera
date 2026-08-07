"use client";

import { motion } from "motion/react";

/**
 * React Bits "Noise" texture pattern.
 * An SVG feTurbulence filter overlaid on the hero at very low opacity,
 * animated by slowly shifting the baseFrequency seed — creates a subtle
 * film-grain / woven-metal effect that elevates the dark background.
 */
export default function GoldGrain() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.028,
        }}
      >
        <filter id="vespera-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#vespera-grain)" />
      </svg>

      {/* Animated shimmer overlay — a very faint gold diagonal sweep */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, transparent 40%, rgba(201,162,39,0.04) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
      />
    </div>
  );
}
