import { AthleteAchievementsPage } from "@/components/basketball/athlete-achievements-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballAchievementsPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <AthleteAchievementsPage />
      </main>
    </PortfolioWorldShell>
  );
}
