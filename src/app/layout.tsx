import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richie Linardi | Portfolio Foundation",
  description:
    "Foundation for Richie Linardi's two-sided professional and basketball portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
