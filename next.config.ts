import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Suppress 404 errors for placeholder images during development.
    // Remove or tighten this once real images are in place.
    unoptimized: false,
    dangerouslyAllowSVG: false,
    // Allow local images from /public — default, listed explicitly for clarity
    remotePatterns: [],
  },
  // Suppress image 404 during development — images will 404 until replaced
  // but the page won't crash thanks to the RoeTin overlay fallback
};

export default nextConfig;
