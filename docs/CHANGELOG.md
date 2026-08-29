# Changelog

All notable changes to the Vespera Caviar web platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [1.4.0] - 2026-08-29
### Added
- Integrated high-res featured social & OG image (`public/images/vespera.jpg`).
- Centralized image registry in `siteConfig.images` (`logo`, `ogImage`, `heroBg`, `aboutStory`, `shippingCold`).
- Updated metadata across root layout, products, and schemas to use `siteConfig.images.ogImage` and `siteConfig.images.logo`.
- Resolved dev-server icon buffer error by serving static icon assets directly via metadata and PWA manifest.
### Removed
- Cleaned up boilerplate starter SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`).
- Removed redundant components (`SizeToggle.tsx` replaced by `ProductControls.tsx`).
### Added
- Integrated official golden emblem logo (`public/images/vespera-logo.png`).
- Applied high-resolution logo to navigation header (`SiteNav.tsx`), hero section (`app/page.tsx`), and site footer (`Footer.tsx`).
- Responsive image styling with gold specular drop-shadow glow effects.
### Added
- Web3Forms API integration (`https://api.web3forms.com/submit`) with access key configuration.
- Client-side asynchronous submission in `ContactForm.tsx` with loading, error recovery, and success states.
- Botcheck honeypot anti-spam protection on private client submissions.
- `NEXT_PUBLIC_WEB3FORMS_KEY` added to `siteConfig` and `.env.example`.
### Added
- Centralized site configuration architecture (`lib/site-config.ts`).
- Comprehensive LLM optimization layers (`/llms.txt` and `/llms-full.txt`).
- Full Schema.org JSON-LD Knowledge Graph across all routes (Organization, Product, CollectionPage, ItemList, FAQPage, ContactPage, BreadcrumbList).
- Next.js Web App Manifest (`app/manifest.ts`) and Viewport metadata.
- Automated AVIF and WebP image generation with 1-year immutable caching.
- Dedicated AI search agent permissions in `app/robots.ts` (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`).
- Security and performance headers in `next.config.ts`.
- CSS `content-visibility: auto` below-the-fold render optimizations.

### Changed
- Domain canonicals updated to `https://www.vesperacaviar.com/`.
- Official contact and schema emails updated to `info@vesperacaviar.com`.
- Refactored all subpages to use relative canonical paths against root `metadataBase`.
- Standardized OpenGraph generator pipelines with DRY re-exports.

## [1.0.0] - 2026-08-28
### Added
- Initial luxury web application for Vespera Caviar with 3 selections.
- Dynamic pearl animations, grain overlay, and parallax hero.
- Private client inquiry system and cold-chain shipping guide.
