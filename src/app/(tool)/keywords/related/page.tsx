"use client";

import { Suspense, useState } from "react";
import Breadcrumb from "@/components/Layout/Breadcrumb";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";

import Results from "./Results";

import HeroTitle from "../cms/HeroTitle";
import TabNavigations from "../shared/TabNavigations";
import Filters from "../shared/Filters";
import { getRelatedKeywordData } from "@/lib/actions/audit/auditActions";

const RelatedKeywordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [keywordData, setKeywordData] = useState(null);

  return (
    <Suspense fallback={<div className="w-full max-w-[1440px] mx-auto"><LoadingSkeleton /></div>}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Keywords", href: "/" },
        { label: "Related Keywords" },
      ]}
      />
      <main className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        <HeroTitle />
        <TabNavigations activeTab={2} />
        <Filters currentUrl="related" setKeywordData={setKeywordData} setIsLoading={setIsLoading} getKeywordData={getRelatedKeywordData} />
        <Results data={keywordData} isLoading={isLoading} />
      </main>
    </Suspense>
  );
};

export default RelatedKeywordPage;