import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";
import { AthleteGallery } from "@/components/editorial/gallery";

export default function Page() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main>
        <AthleteGallery />
      </main>
    </PortfolioWorldShell>
  );
}
