import { FoundationRoutePage } from "@/components/layout/foundation-route-page";
import { foundationPages } from "@/data/foundation-pages";

export default function BasketballStatsPage() {
  return <FoundationRoutePage {...foundationPages.stats} />;
}
