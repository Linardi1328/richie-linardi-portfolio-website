import { AthleteStatsPage } from "@/components/basketball/athlete-stats-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballStatsPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <AthleteStatsPage />
      </main>
    </PortfolioWorldShell>
  );
}
