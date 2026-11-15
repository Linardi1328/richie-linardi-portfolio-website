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
    { href: "#flagship-system", label: "Flagship System" },
    { href: "#selected-systems", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/resume", label: "Résumé" },
    { href: "/contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Computer Science · Data Science · Applied AI",
    title:
      "Developing secure, data-driven software, human-supervised AI systems, and competitive athletic discipline.",
    description:
      "I’m Richie Linardi, a Computer Science student at Monash University Malaysia specializing in Data Science (CGPA 3.50, expected 2027). I build practical software across full-stack engineering, quantitative research, live sports operations, and independent ventures.",
    tags: [
      "Python",
      "TypeScript",
      "Next.js",
      "React",
      "Cloudflare",
      "PostgreSQL",
      "FastAPI",
    ],
  },
  projects: projectCards,
  milestones: [
    {
      label: "Flagship Deployed System",
      title: "KHLIM 3x3 Live V1",
      description:
        "Delivered real-time tournament scoring for 118 matches across 2 courts and 4 divisions; automated standings and brackets via Google Sheets, Apps Script, and Cloudflare Workers.",
    },
    {
      label: "Education",
      title: "Bachelor of Computer Science (Data Science)",
      description:
        "Monash University Malaysia · CGPA 3.50 · Expected graduation November 2027.",
    },
    {
      label: "Upcoming Role",
      title: "Incoming Data Annotation Intern",
      description: "GTEX Asia Sdn Bhd · Scheduled 23 Nov 2026 – 19 Feb 2027.",
    },
  ] satisfies ProfessionalMilestone[],
  technicalFocus: [
    "Python",
    "TypeScript",
    "SQL",
    "Next.js",
    "React",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
    "Cloudflare Workers",
    "pandas",
    "scikit-learn",
    "Automated Testing",
  ],
};
