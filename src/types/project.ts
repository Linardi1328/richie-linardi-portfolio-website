export type ProjectCatalogueState =
  "featured" | "catalogue" | "candidate" | "unlisted";

export type ProjectEvidenceKind =
  "deployment" | "documentation" | "release" | "repository" | "tests";

export type ProjectEvidence = {
  href?: string;
  kind: ProjectEvidenceKind;
  label: string;
};

export type PortfolioProject = {
  boundaries: readonly string[];
  catalogueState: ProjectCatalogueState;
  currentStatus: string;
  deploymentUrl?: string;
  evidence: readonly ProjectEvidence[];
  phase: string;
  release?: string;
  repositoryUrl: string;
  slug: string;
  sortOrder: number;
  statusVerifiedAt: string;
  summary: string;
  tags: readonly string[];
  title: string;
};

export type ProjectCardData = {
  deploymentUrl?: string;
  description: string;
  href: string;
  status: string;
  tags: string[];
  title: string;
};
