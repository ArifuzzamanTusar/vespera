"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const LINKS = [
  { href: "/", label: "Home", match: ["/"] },
  { href: "/shop", label: "Collection", match: ["/shop"] },
  { href: "/about", label: "About", match: ["/about"] },
  { href: "/shipping", label: "Shipping & Care", match: ["/shipping"] },
  { href: "/contact", label: "Private Client", match: ["/contact"] },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (match: string[]) =>
    match.some((m) =>
      m === "/" ? pathname === "/" : pathname.startsWith(m)
    );

  return (
    <motion.nav
      className="site-nav"
      animate={{
        backgroundColor: scrolled
          ? "rgba(10,10,10,0.96)"
          : "rgba(10,10,10,0.72)",
        borderBottomColor: scrolled
          ? "rgba(201,162,39,0.35)"
          : "rgba(201,162,39,0.18)",
      }}
      transition={{ duration: 0.3 }}
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="nav-inner">
        <Link className="nav-logo" href="/">
          <svg
            viewBox="0 0 64 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M9 9 L31 46 L53 9" stroke="#C9A227" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="31" cy="24" r="9" stroke="#C9A227" strokeWidth="1.4" fill="#0A0A0A" />
            <circle cx="27.5" cy="22" r="1.3" fill="#3a3324" />
            <circle cx="31.5" cy="26.5" r="1.6" fill="#241f14" />
            <circle cx="34.5" cy="21.5" r="1.1" fill="#453d28" />
            <line x1="31" y1="46" x2="31" y2="60" stroke="#C9A227" strokeWidth="1.2" />
            <circle cx="31" cy="63" r="2.6" fill="#111008" stroke="#C9A227" strokeWidth="0.8" />
          </svg>
          <span className="nav-wordmark">VESPERA</span>
        </Link>

        <div
          className={`nav-links${open ? " open" : ""}`}
          id="navLinks"
          onClick={() => setOpen(false)}
        >
          {LINKS.map(({ href, label, match }) => (
            <Link
              key={href}
              href={href}
              className={isActive(match) ? "active" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </motion.nav>
  );
}
