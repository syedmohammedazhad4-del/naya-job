import type { MetadataRoute } from "next";
import { ITEMS } from "@/data/items";

const BASE = "https://syedmohammedazhad4-del.github.io/naya-job";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString();

  const staticPaths = [
    "/",
    "/start/",
    "/roadmap/",
    "/chat/",
    "/sources/",
    "/changelog/",
    "/privacy/",
    "/about/",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1.0 : 0.7,
    })),
    ...ITEMS.map((item) => ({
      url: `${BASE}/item/${item.slug}/`,
      lastModified: item.verifiedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
