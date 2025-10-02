"use client";

import { Suspense } from "react";
import SummaryPage from "./SummaryPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SummaryPage />
    </Suspense>
  );
}
