import { AthleteHero } from "@/components/basketball/athlete-hero";
import { AthleteCareerProgression } from "@/components/basketball/athlete-career-progression";
import { AthletePerformanceRecord } from "@/components/basketball/athlete-performance-record";
import { AthleteRecordModules } from "@/components/basketball/athlete-record-modules";
import { AthleteEvidenceSystem } from "@/components/basketball/athlete-evidence-system";
import { AthleteClosingBridge } from "@/components/basketball/athlete-closing-bridge";

export function AthleteHomePage() {
  return (
    <article className="athlete-home">
      <AthleteHero />
      <AthleteCareerProgression />
      <AthletePerformanceRecord />
      <AthleteRecordModules />
      <AthleteEvidenceSystem />
      <AthleteClosingBridge />
    </article>
  );
}
