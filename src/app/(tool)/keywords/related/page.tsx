"use client";

import { Suspense, useState } from "react";
import { Breadcrumb } from "@/components/Layout/Breadcrumb";
import HeroTitle from "../cms/HeroTitle";
import TabNavigations from "../shared/TabNavigations";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
// import Results from "./Results";
import Filters from "../shared/Filters";
import Results from "./Results";
import { getRelatedKeywordData } from "@/lib/actions/audit/auditActions";

const SimilarKeywordPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [keywordData, setKeywordData] = useState(null);

  const handleFilteredData = async (data: any) => {
    const response = await data;
    setKeywordData(response);
    setIsLoading(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Keywords", href: "/" },
        { label: "Similar Keywords" },
      ]}
      />
      <main className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        <HeroTitle />
        <TabNavigations activeTab={2} />
        <Filters onFiltered={handleFilteredData} getKeywordData={getRelatedKeywordData} />
        {isLoading ? <LoadingSkeleton /> : <Results data={keywordData} />}
      </main>
    </Suspense>
  );
};

export default SimilarKeywordPage;
