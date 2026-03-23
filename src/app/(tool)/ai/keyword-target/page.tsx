"use client";

import { Suspense, useState } from "react";

import Breadcrumb from "@/components/Layout/Breadcrumb";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import HeroTitle from "../cms/HeroTitle";
import TabNavigations from "../shared/TabNavigations";
import Filters from "../shared/Filters";
import { getAiKeywordsByTargetData } from "@/lib/actions/audit/auditActions";
import Results from "./Results";

export type Snippet = {
  text: string;
  links: string[]
}

export type keywordProp = {
  keyword: string;
  snippet: Snippet;
  type: string;
  volume: number;
}

export type dataProp = {
  total: number,
  date: string,
  keywords: keywordProp[]
}


const AiKeywordByTargetPage = () => {
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
        <TabNavigations activeTab={2} />
        <Filters currentUrl="/ai/keyword-target" setKeywordData={setKeywordData} setIsLoading={setIsLoading} getKeywordData={getAiKeywordsByTargetData} />
        <Results data={keywordData} isLoading={isLoading} />
      </main>
    </Suspense>
  );
};

export default AiKeywordByTargetPage;
