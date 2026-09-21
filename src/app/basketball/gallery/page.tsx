import { AthleteProofGalleryPage } from "@/components/basketball/athlete-proof-gallery-page";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballGalleryPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <AthleteProofGalleryPage />
      </main>
    </PortfolioWorldShell>
  );
}
