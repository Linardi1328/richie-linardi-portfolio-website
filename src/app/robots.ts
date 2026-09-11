import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.PORTFOLIO_PREVIEW === "1";

  return {
    rules: isPreview
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
          disallow: ["/exploration"],
        },
  };
}
