import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { ProfessionalDualTracePage } from "@/components/dual-trace/professional-dual-trace-page";

export default function Home() {
  return (
    <PortfolioWorldShell
      dualTraceHome={true}
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="theme-professional">
        <ProfessionalDualTracePage />
      </main>
    </PortfolioWorldShell>
  );
}
