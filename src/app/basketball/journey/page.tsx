import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";
import { AthleteJourney } from "@/components/editorial/athlete-pages";

export default function Page() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main>
        <AthleteJourney />
      </main>
    </PortfolioWorldShell>
  );
}
