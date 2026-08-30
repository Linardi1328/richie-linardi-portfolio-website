import { projectCards } from "@/data/project-registry";
import type { ProjectCardData } from "@/types/project";

export type ProfessionalProject = ProjectCardData;

export type ProfessionalMilestone = {
  description: string;
  label: string;
  title: string;
};

export const professionalHomeData = {
  navigation: [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Technical Focus" },
  ],
  hero: {
    eyebrow: "Computer Science · Data Science · Software Systems",
    title: "I build practical software with clear technical boundaries.",
    description:
      "I’m Richie Linardi, a Computer Science student at Monash University Malaysia focused on data science, AI, automation, and reliable software engineering. My portfolio work prioritizes traceability, testing, and honest system boundaries over inflated demos.",
    tags: ["Python", "TypeScript", "Data & AI", "Automation", "System design"],
  },
  projects: projectCards,
  milestones: [
    {
      label: "Project experience",
      title: "Independent software systems",
      description:
        "Building and documenting software across market research, accounting workflows, multilingual support, project operations, content verification, and sports-platform infrastructure.",
    },
    {
      label: "Education",
      title: "Bachelor of Computer Science",
      description:
        "Monash University Malaysia · Data Science specialization · Expected 2027.",
    },
  ] satisfies ProfessionalMilestone[],
  technicalFocus: [
    "Python",
    "FastAPI",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Machine learning",
    "API design",
    "Automation",
    "Testing",
    "Type safety",
  ],
};
