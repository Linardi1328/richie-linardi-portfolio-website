import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "../styles/production-shell.css";
import "../styles/featured-project-dossier.css";
import "../styles/foundation-routes.css";
import "../styles/portfolio-depth.css";
import "../styles/motion-effects.css";
import "../styles/basketball-record.css";
import "../styles/production-hardening.css";

const portfolioTitle = "Richie Linardi | Software, Data & Basketball";
const portfolioDescription =
  "Two-sided portfolio for Richie Linardi, connecting software, data, AI, and basketball through one evidence-driven personal archive.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const isPreview = process.env.PORTFOLIO_PREVIEW === "1";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: portfolioTitle,
    template: "%s | Richie Linardi",
  },
  description: portfolioDescription,
  applicationName: "Richie Linardi Portfolio",
  authors: [{ name: "Richie Linardi" }],
  creator: "Richie Linardi",
  robots: isPreview
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
    : {
        index: true,
        follow: true,
      },
  openGraph: {
    type: "website",
    siteName: "Richie Linardi",
    title: portfolioTitle,
    description: portfolioDescription,
  },
  twitter: {
    card: "summary",
    title: portfolioTitle,
    description: portfolioDescription,
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
