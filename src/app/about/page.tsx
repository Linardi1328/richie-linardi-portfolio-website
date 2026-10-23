import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { IdentityPage } from "@/components/editorial/identity-pages";

export default function Page() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <IdentityPage kind="about" />
    </PortfolioWorldShell>
  );
}
