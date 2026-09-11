import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RBL // 13 Design Exploration Lab",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ExplorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
