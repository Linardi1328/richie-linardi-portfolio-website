import { FoundationRoutePage } from "@/components/layout/foundation-route-page";
import { foundationPages } from "@/data/foundation-pages";

export default function ResumePage() {
  return <FoundationRoutePage {...foundationPages.resume} />;
}
