import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";
import { AthleteDualTracePage } from "@/components/dual-trace/athlete-dual-trace-page";

export default function BasketballPage() {
  return (
    <PortfolioWorldShell
      dualTraceHome={true}
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <AthleteDualTracePage />
      </main>
    </PortfolioWorldShell>
  );
}
