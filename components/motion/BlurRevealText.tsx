"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BlurRevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  /** Split by word (default) or character */
  by?: "word" | "char";
}

export default function BlurRevealText({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.04,
  by = "word",
}: BlurRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  const tokens =
    by === "char" ? text.split("") : text.split(" ");

  return (
    // @ts-expect-error — polymorphic tag
    <Tag ref={ref} className={className} aria-label={text}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
          initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 12, filter: "blur(10px)" }
          }
          transition={{
            duration: 0.55,
            delay: delay + i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {token}
          {by === "word" && i < tokens.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
