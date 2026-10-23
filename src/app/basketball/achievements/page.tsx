import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";
import { AthleteAchievements } from "@/components/editorial/athlete-pages";

export default function Page() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main>
        <AthleteAchievements />
      </main>
    </PortfolioWorldShell>
  );
}
