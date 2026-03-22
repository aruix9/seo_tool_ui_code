"use client";

import { Suspense, useState } from "react";
import { Breadcrumb } from "@/components/Layout/Breadcrumb";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";

import Results from "./Results";

import HeroTitle from "../cms/HeroTitle";
import TabNavigations from "../shared/TabNavigations";
import Filters from "../shared/Filters";
import { getSimilarKeywordData } from "@/lib/actions/audit/auditActions";

const SimilarKeywordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [keywordData, setKeywordData] = useState(null);

  return (
    <Suspense fallback={<div className="w-full max-w-[1440px] mx-auto"><LoadingSkeleton /></div>}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Keywords", href: "/" },
        { label: "Similar Keywords" },
      ]}
      />
      <main className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        <HeroTitle />
        <TabNavigations activeTab={1} />
        <Filters currentUrl="similar" setKeywordData={setKeywordData} setIsLoading={setIsLoading} getKeywordData={getSimilarKeywordData} />
        <Results data={keywordData} isLoading={isLoading} />
      </main>
    </Suspense>
  );
};

export default SimilarKeywordPage;
