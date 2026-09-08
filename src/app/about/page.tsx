import { FoundationRoutePage } from "@/components/layout/foundation-route-page";
import { foundationPages } from "@/data/foundation-pages";

export default function AboutPage() {
  return <FoundationRoutePage {...foundationPages.about} />;
}
