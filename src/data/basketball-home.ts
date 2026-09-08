export type BasketballCareerMoment = {
  context: string;
  detail: string;
  label: string;
  year: string;
};

export const basketballCareerMoments = [
  {
    context: "Development",
    detail: "The basketball journey begins with DBL Academy.",
    label: "DBL Academy",
    year: "2016",
  },
  {
    context: "East Java",
    detail: "Named to the DBL East Java Second Team.",
    label: "DBL breakthrough",
    year: "2021",
  },
  {
    context: "East Java",
    detail: "52 points · 21 rebounds · 13 assists · Second Team.",
    label: "DBL season",
    year: "2022",
  },
  {
    context: "Gloria 1",
    detail: "East Java final run and DBL First Team recognition.",
    label: "Final run",
    year: "2023",
  },
  {
    context: "Indonesia",
    detail: "DBL Indonesia All-Star selection.",
    label: "All-Star",
    year: "2024",
  },
  {
    context: "National team",
    detail:
      "ASEAN Schools Games Gold · Indonesia beat the Philippines 56–54 in the final.",
    label: "ASEAN Schools Games",
    year: "2024",
  },
  {
    context: "FIBA U18 Asia Cup",
    detail: "3 games · 5.3 PPG · 3.0 RPG · 0.7 APG.",
    label: "Continental competition",
    year: "2024",
  },
] as const satisfies readonly BasketballCareerMoment[];

export const basketballArchiveModules = [
  {
    description:
      "Development chapters, teams, tournaments, and verified milestones in one timeline.",
    href: "/basketball/journey",
    index: "01",
    title: "Journey timeline",
  },
  {
    description:
      "Results shown with event context, role, supporting media, and source records.",
    href: "/basketball/achievements",
    index: "02",
    title: "Achievement ledger",
  },
  {
    description:
      "Photography connected to the event, result, and career chapter behind each moment.",
    href: "/basketball/gallery",
    index: "03",
    title: "Proof gallery",
  },
] as const;

export const basketballEvidenceRules = [
  "Result → source → context",
  "Photo → event → role",
  "Statistic → competition → verification",
  "Story → evidence → related moments",
] as const;
