export type PortfolioWorld = "professional" | "basketball";

export type WorldNavigationItem = {
  href: string;
  label: string;
};

export const professionalWorldNavigation = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Technical Focus" },
] as const satisfies readonly WorldNavigationItem[];

export const basketballWorldNavigation = [
  { href: "#journey", label: "Journey" },
  { href: "#proof", label: "Proof" },
  { href: "#archive", label: "Archive" },
] as const satisfies readonly WorldNavigationItem[];
