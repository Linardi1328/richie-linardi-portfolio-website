import type { MetadataRoute } from "next";
import { projectRegistry } from "@/data/project-registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://richielinardi.com";

  const staticRoutes = [
    "",
    "/about",
    "/education",
    "/experience",
    "/projects",
    "/resume",
    "/contact",
    "/basketball",
    "/basketball/journey",
    "/basketball/achievements",
    "/basketball/stats",
    "/basketball/gallery",
    "/basketball/media",
    "/privacy",
    "/terms",
    "/cookies",
    "/refunds",
  ];

  const projectRoutes = projectRegistry
    .filter(
      (p) =>
        p.catalogueState !== "candidate" && p.catalogueState !== "unlisted",
    )
    .map((p) => `/projects/${p.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
