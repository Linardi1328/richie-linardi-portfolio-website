import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";
import { AthleteStats } from "@/components/editorial/athlete-pages";

export default function Page() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main>
        <AthleteStats />
      </main>
    </PortfolioWorldShell>
  );
}
