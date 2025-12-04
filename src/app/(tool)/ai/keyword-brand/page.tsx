"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import Filters from "./Filters";
import KeywordContent from "./KeywordContent";

const AiOverviewPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [aiOverviewData, setAiOverviewData] = useState(null);

  const handleFilteredData = async (data: any) => {
    setIsLoading(true);
    const response = await data;
    setAiOverviewData(response);
    setIsLoading(false);
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
        <h1 className="my-8 font-bold text-xl">Ai Keywords by Brand</h1>

        <Filters onFiltered={handleFilteredData} />
        <KeywordContent data={aiOverviewData} isLoading={isLoading} />
      </div>
    </Suspense>
  );
};

export default AiOverviewPage;
