import { AthleteJourneyPage } from "@/components/basketball/athlete-journey-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballJourneyPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <AthleteJourneyPage />
      </main>
    </PortfolioWorldShell>
  );
}
