import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const BASE_URL = "https://vesperacaviar.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Vespera Caviar — Exceptional Caviar, Shipped from New York",
    template: "%s | Vespera Caviar",
  },
  description:
    "Sustainably farmed roe, malossol-cured and never frozen, sent to your door overnight in a temperature-controlled case. No storefront, no middleman — just the tin.",
  keywords: [
    "caviar",
    "sturgeon caviar",
    "malossol caviar",
    "Siberian sturgeon",
    "Kaluga caviar",
    "buy caviar online",
    "caviar delivery New York",
    "luxury caviar",
    "never frozen caviar",
    "sustainable caviar",
    "caviar gift",
    "gourmet food New York",
  ],
  authors: [{ name: "Vespera Caviar", url: BASE_URL }],
  creator: "Vespera Caviar",
  publisher: "Vespera Caviar",
  category: "Food & Gourmet",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Vespera Caviar",
    locale: "en_US",
    url: BASE_URL,
    title: "Vespera Caviar — Exceptional Caviar, Shipped from New York",
    description:
      "Sustainably farmed roe, malossol-cured and never frozen, sent to your door overnight. No storefront, no middleman — just the tin.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vespera Caviar — Exceptional Caviar, Shipped from New York",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vespera Caviar — Exceptional Caviar, Shipped from New York",
    description:
      "Sustainably farmed roe, malossol-cured and never frozen. Overnight delivery from New York.",
    images: [{ url: "/twitter-image", alt: "Vespera Caviar" }],
    // Update with your Twitter handle when available:
    // site: "@vesperacaviar",
    // creator: "@vesperacaviar",
  },

  alternates: {
    canonical: BASE_URL,
  },

  // Update with real verification tokens before launch:
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  //   bing: "YOUR_BING_TOKEN",
  // },

  appleWebApp: {
    title: "Vespera Caviar",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${garamond.variable} ${jost.variable}`}
    >
      <body>
        <SiteNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
