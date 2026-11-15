import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.PORTFOLIO_PREVIEW === "1";
  const siteOrigin = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://richielinardi.vercel.app"
  ).replace(/\/+$/, "");

  return {
    rules: isPreview
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
        },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
