import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import "../styles/editorial.css";

const manrope = localFont({
  src: "../../public/fonts/manrope-variable.ttf",
  display: "swap",
  variable: "--font-manrope",
  weight: "200 800",
});

const portfolioTitle = "Richie Linardi | Data Science, AI & Basketball";
const portfolioDescription =
  "Richie Linardi’s portfolio: data science, applied AI, software projects, and a life in competitive basketball.";
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
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
