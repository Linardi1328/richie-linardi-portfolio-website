import { EducationMonashPage } from "@/components/education/education-monash-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function EducationPage() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <EducationMonashPage />
    </PortfolioWorldShell>
  );
}
