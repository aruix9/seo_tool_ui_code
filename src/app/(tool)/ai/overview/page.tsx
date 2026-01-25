"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import Filters from "./Filters";
import KeywordContent from "./KeywordContent";

const AiOverviewPage = () => {
  const [aiOverviewData, setAiOverviewData] = useState(null);

  const handleFilteredData = (data: any) => {
    setAiOverviewData(data);
    console.log(data);
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
        <h1 className="my-8 font-bold text-xl">Ai Overview</h1>

        <div className="flex gap-6 mb-8">
          <Link href="overview">AI Overview</Link>
          <Link href="discover">AI Discover</Link>
          <Link href="keywords">AI keywords</Link>
        </div>

        <Filters onFiltered={handleFilteredData} />
        <KeywordContent data={aiOverviewData} />
      </div>
    </Suspense>
  );
};

export default AiOverviewPage;
