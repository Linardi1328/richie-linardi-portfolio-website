export type PortfolioWorld = "professional" | "basketball";

export type WorldNavigationItem = {
  href: string;
  label: string;
};

export const professionalWorldNavigation = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly WorldNavigationItem[];

export const basketballWorldNavigation = [
  { href: "/basketball/journey", label: "Journey" },
  { href: "/basketball/achievements", label: "Achievements" },
  { href: "/basketball/stats", label: "Stats" },
  { href: "/basketball/gallery", label: "Gallery" },
  { href: "/basketball/media", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly WorldNavigationItem[];
