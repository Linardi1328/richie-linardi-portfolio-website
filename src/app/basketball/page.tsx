import { AthleteHomePage } from "@/components/basketball/athlete-home-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <AthleteHomePage />
      </main>
    </PortfolioWorldShell>
  );
}
