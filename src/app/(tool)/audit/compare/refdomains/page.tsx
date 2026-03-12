import { Suspense } from "react";
import LinkOpportunity from "./LinkOpportunity";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LinkOpportunity />
    </Suspense>
  );
}
