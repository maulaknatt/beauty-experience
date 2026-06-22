import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://beautyexperience.my.id/sitemap.xml",
    host: "https://beautyexperience.my.id",
  };
}
