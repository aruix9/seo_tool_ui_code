"use client";

import Filters from "./Filters";
import { Suspense, useState } from "react";
import KeywordContent from "./KeywordContent";
import { Breadcrumb } from "@/components/Layout/Breadcrumb";
import HeroTitle from "../cms/HeroTitle";
import TabNavigations from "../TabNavigations";
import FilterContent from "./FilterContent";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import Results from "./Results";

const SimilarKeywordPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [keywordData, setKeywordData] = useState(null);

  const handleFilteredData = async (data: any) => {
    setIsLoading(true);
    const response = await data;
    setKeywordData(response);
    setIsLoading(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Keywords" },
      ]}
      />
      <main className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        <HeroTitle />
        <TabNavigations />
        <FilterContent onFiltered={handleFilteredData} />
        {isLoading ? <LoadingSkeleton /> : <Results data={keywordData} />}
      </main>
    </Suspense>
  );
};

export default SimilarKeywordPage;
