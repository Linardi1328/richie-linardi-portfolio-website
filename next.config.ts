import type { NextConfig } from "next";

const isStaticPreview = process.env.STATIC_PREVIEW === "1";
const repositoryBasePath = "/richie-linardi-portfolio-website";

const nextConfig: NextConfig = {
  ...(isStaticPreview
    ? {
        assetPrefix: repositoryBasePath,
        basePath: repositoryBasePath,
        images: {
          unoptimized: true,
        },
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
