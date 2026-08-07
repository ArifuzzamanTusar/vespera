"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxHeroProps {
  children: React.ReactNode;
}

/**
 * Wraps the hero section and applies a subtle upward parallax
 * to the inner content as the user scrolls — creating depth between
 * the fixed background and the floating text.
 */
export default function ParallaxHero({ children }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Content drifts upward at half the scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}
