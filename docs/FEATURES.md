# Vespera Caviar — Project Blueprint & Feature Map

> Single Source of Truth for architecture, route tree, and feature matrix.

---

## 1. Site Map & Route Hierarchy

```
/ (Home) ────────────────── Hero, The House, Selections, Cold-Chain Prose
├── /shop ───────────────── The Collection overview (3 tins)
├── /siberian ───────────── Siberian Sturgeon Classic product page
├── /kaluga ─────────────── Kaluga Fusion Reserve product page
├── /imperial ───────────── Imperial Kaluga Fusion product page
├── /about ──────────────── The House philosophy & commitments
├── /shipping ───────────── Shipping & Care protocol + Storage guide
└── /contact ────────────── Private Client & Concierge enquiry form

Metadata & Discovery Routes:
├── /sitemap.xml ────────── Dynamic priority sitemap
├── /robots.txt ─────────── Search & AI bot access rules (GPTBot, ClaudeBot, etc.)
├── /manifest.webmanifest ─ PWA mobile manifest
├── /opengraph-image ────── Dynamic root 1200x630 OG card
├── /twitter-image ──────── Dynamic root 800x418 Twitter summary card
├── /[product]/opengraph-image ── Dynamic product-level social cards
├── /llms.txt ───────────── Compact LLM specification & product summary
└── /llms-full.txt ──────── Deep AI Knowledge Graph & pairing guide
```

---

## 2. Feature Matrix

### Core Platform & Design
- [x] Global luxury design system (Black, Charcoal, Gold `#C9A227`, Cream `#F1ECDD`)
- [x] Custom typography hierarchy (Playfair Display, EB Garamond, Jost)
- [x] Custom vector logo mark, wordmark, and dynamic pearl clusters
- [x] Responsive navigation bar with blur backdrop and mobile toggle
- [x] Global footer with direct navigation & brand credentials

### Product Catalogue & Presentation
- [x] Siberian Sturgeon Classic (*Acipenser baerii*)
- [x] Kaluga Fusion Reserve (*Huso dauricus* × *Amur*)
- [x] Imperial Kaluga Fusion (*Huso dauricus* × *Amur*, Top 5%)
- [x] Dynamic sizing switchers (1 oz & 2 oz)
- [x] Tasting notes, pairing suggestions, and species specifications

### Private Client Ordering
- [x] Private Client inquiry form connected to Web3Forms API (`https://api.web3forms.com/submit`)
- [x] Automated email notifications and inbox delivery for new submissions
- [x] Honeypot (`botcheck`) anti-spam protection
- [x] Form submission states (Submitting, Error with retry, and Luxury Confirmation card)
- [x] Direct `mailto:info@vesperacaviar.com` fallback link integration
- [x] Full accessibility attributes (`aria-live`, `aria-atomic`, `role="alert"`)

### SEO, Schema.org & LLM Optimization
- [x] Centralized Site Configuration ([lib/site-config.ts](file:///d:/ClientWorks/GIT/vespera/lib/site-config.ts))
- [x] Relative canonical URL architecture with `metadataBase`
- [x] Full JSON-LD structured data (Organization, WebSite, Product, CollectionPage, ItemList, FAQPage, ContactPage, BreadcrumbList)
- [x] Machine-readable `/llms.txt` and `/llms-full.txt`
- [x] OpenGraph / Twitter Cards dynamically generated via Next.js OG ImageResponse

### Performance & Security
- [x] AVIF & WebP modern image optimization with 1-year cache TTL
- [x] HTTP compression (gzip/brotli) and `poweredByHeader: false`
- [x] Security headers (HSTS, X-Content-Type-Options, X-Frame-Options, CSP frame-ancestors, Referrer-Policy)
- [x] CSS `content-visibility: auto` on offscreen sections
- [x] Next.js Viewport theme-color & color-scheme tokens

---

## 3. Global Dependencies & Integrations

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Runtime / Rendering**: Node.js & React 19
- **Animations**: `motion/react`
- **Fonts**: `next/font/google` (Playfair Display, EB Garamond, Jost)
- **State & Config**: `siteConfig` in [lib/site-config.ts](file:///d:/ClientWorks/GIT/vespera/lib/site-config.ts)
