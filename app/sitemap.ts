import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: siteConfig.links.home, priority: 1.0, changeFrequency: "monthly" as const },
    { path: siteConfig.links.shop, priority: 0.9, changeFrequency: "monthly" as const },
    { path: siteConfig.links.siberian, priority: 0.85, changeFrequency: "monthly" as const },
    { path: siteConfig.links.kaluga, priority: 0.85, changeFrequency: "monthly" as const },
    { path: siteConfig.links.imperial, priority: 0.85, changeFrequency: "monthly" as const },
    { path: siteConfig.links.about, priority: 0.7, changeFrequency: "yearly" as const },
    { path: siteConfig.links.shipping, priority: 0.65, changeFrequency: "yearly" as const },
    { path: siteConfig.links.contact, priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const now = new Date();

  return routes.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
