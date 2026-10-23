import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { ProfessionalHome } from "@/components/editorial/home-pages";

export default function Page() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <ProfessionalHome />
    </PortfolioWorldShell>
  );
}
