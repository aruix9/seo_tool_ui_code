"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";

import Filters from "./Filters";
import { Suspense, useState } from "react";
import KeywordContent from "./KeywordContent";

const LongtailKeywordPage = () => {
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
      <div className="container grow flex flex-col mb-16">
        <Breadcrumbs
          list={[
            { name: "Home", link: "/" },
            { name: "Keywords", link: "/keywords" },
            { name: "Longtail", link: "" },
          ]}
        />
        <h1 className="my-8 font-bold text-xl">Longtail Keywords</h1>
        <Filters onFiltered={handleFilteredData} />
        <KeywordContent data={keywordData} isLoading={isLoading} />
      </div>
    </Suspense>
  );
};

export default LongtailKeywordPage;
