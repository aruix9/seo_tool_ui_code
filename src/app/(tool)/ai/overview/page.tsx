"use client";

import { Suspense, useState } from "react";
import Breadcrumb from "@/components/Layout/Breadcrumb";

import HeroTitle from "../cms/HeroTitle";

import TabNavigations from "../shared/TabNavigations";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { getAiOverviewData } from "@/lib/actions/audit/auditActions";
import Filters from "../shared/Filters";
import Results from "./Results";

const AiOverviewPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [keywordData, setKeywordData] = useState(null);

  return (
    <Suspense fallback={<div className="w-full max-w-[1440px] mx-auto"><LoadingSkeleton /></div>}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "AI", href: "/ai" },
        { label: "Overview" },
      ]}
      />
      <main className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        <HeroTitle />
        <TabNavigations activeTab={1} />
        <Filters currentUrl="overview" setKeywordData={setKeywordData} setIsLoading={setIsLoading} getKeywordData={getAiOverviewData} />
        <Results data={keywordData} isLoading={isLoading} />
      </main>
    </Suspense>
  );
};

export default AiOverviewPage;
