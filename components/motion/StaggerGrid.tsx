"use client";

import { motion, useInView } from "motion/react";
import { useRef, Children } from "react";

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}

export default function StaggerGrid({
  children,
  className,
  stagger = 0.12,
  y = 32,
}: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y, filter: "blur(6px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y, filter: "blur(6px)" }
          }
          transition={{
            duration: 0.65,
            delay: i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
