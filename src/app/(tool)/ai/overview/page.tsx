"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";
import React, { Suspense, useState } from "react";
import Filters from "./Filters";
import KeywordContent from "./KeywordContent";
import AiLinks from "../AiLinks";

const AiOverviewPage = () => {
  const [aiOverviewData, setAiOverviewData] = useState(null);

  const handleFilteredData = (data: any) => {
    setAiOverviewData(data);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container grow flex flex-col">
        <Breadcrumbs
          list={[
            { name: "Home", link: "/" },
            { name: "Ai", link: "/ai" },
            { name: "Overview", link: "" },
          ]}
        />
        
        <AiLinks />

        <Filters onFiltered={handleFilteredData} />
        <KeywordContent data={aiOverviewData} />
      </div>
    </Suspense>
  );
};

export default AiOverviewPage;
