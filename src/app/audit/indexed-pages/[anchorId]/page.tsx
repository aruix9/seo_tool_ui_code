"use client";

import { Suspense } from "react";
import IndexedPage from "./IndexedPages";

export type AuditAnchorProps = {
  params: {
    anchorId: string;
  };
};

export default function Page({ params }: AuditAnchorProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IndexedPage params={params} />
    </Suspense>
  );
}
