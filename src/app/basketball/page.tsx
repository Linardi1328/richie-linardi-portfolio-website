import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";
import { AthleteHome } from "@/components/editorial/home-pages";

export default function Page() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <AthleteHome />
    </PortfolioWorldShell>
  );
}
