import { Suspense } from "react";
import BacklinkPage from "./BacklinkPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BacklinkPage />
    </Suspense>
  );
}
