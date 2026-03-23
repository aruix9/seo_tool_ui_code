import { Suspense} from "react";

import Breadcrumb from "@/components/Layout/Breadcrumb";
// import LinkOpportunity from "./LinkOpportunity";
import Results from "./Results";

export default function Page() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-background-light font-display text-slate-900 min-h-screen">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Audit", href: "/audit" },
          { label: "Acquire Links" }
        ]} />

        <Results />
        {/* <LinkOpportunity /> */}
      </div>
    </Suspense>
  );
}
