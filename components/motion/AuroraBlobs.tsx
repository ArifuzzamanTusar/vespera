"use client";

import { motion } from "motion/react";

/**
 * React Bits "Aurora" pattern adapted for Vespera.
 * Three slow-moving radial gradient blobs in gold/amber tones,
 * layered behind the hero to give it a living, luxurious depth.
 * Very low opacity — purely atmospheric.
 */
export default function AuroraBlobs() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Blob 1 — large, centre-top, warmest */}
      <motion.div
        style={{
          position: "absolute",
          top: "-20%",
          left: "30%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,162,39,0.13) 0%, transparent 70%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "8%", "-6%", "0%"],
          y: ["0%", "10%", "4%", "0%"],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 — mid-right, cooler bronze */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(110,90,34,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "-12%", "5%", "0%"],
          y: ["0%", "8%", "-10%", "0%"],
          scale: [1, 0.92, 1.06, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Blob 3 — bottom-left, faint accent */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "0%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,196,104,0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
        animate={{
          x: ["0%", "10%", "-4%", "0%"],
          y: ["0%", "-8%", "12%", "0%"],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />
    </div>
  );
}
