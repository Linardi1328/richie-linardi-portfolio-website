import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "../styles/production-shell.css";
import "../styles/featured-project-dossier.css";
import "../styles/foundation-routes.css";
import "../styles/portfolio-depth.css";

export const metadata: Metadata = {
  title: "Richie Linardi | Software, Data & Basketball",
  description:
    "Two-sided portfolio for Richie Linardi, connecting software, data, AI, and basketball through one evidence-driven personal archive.",
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
