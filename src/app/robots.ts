import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://syedmohammedazhad4-del.github.io/naya-job/sitemap.xml",
  };
}
