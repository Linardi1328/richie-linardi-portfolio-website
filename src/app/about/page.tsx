import { AboutIdentityPage } from "@/components/about/about-identity-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function AboutPage() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <AboutIdentityPage />
    </PortfolioWorldShell>
  );
}
