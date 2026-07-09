import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/app-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/support", "/press", "/privacy", "/terms"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
