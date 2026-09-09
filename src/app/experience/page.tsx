import { ExperienceRecordPage } from "@/components/experience/experience-record-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function ExperiencePage() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <ExperienceRecordPage />
    </PortfolioWorldShell>
  );
}
