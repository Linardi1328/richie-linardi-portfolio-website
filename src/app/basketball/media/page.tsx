import { AthletePressMediaPage } from "@/components/basketball/athlete-press-media-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballMediaPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <AthletePressMediaPage />
      </main>
    </PortfolioWorldShell>
  );
}
