"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";

import Filters from "./Filters";
import { useState } from "react";
import KeywordContent from "./KeywordContent";

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
    <div className="container grow flex flex-col mb-16">
      <Breadcrumbs
        list={[
          { name: "Home", link: "/" },
          { name: "Keywords", link: "/keywords" },
          { name: "Similar", link: "" },
        ]}
      />
      <h1 className="my-8 font-bold text-xl">Similar Keywords</h1>
      <Filters onFiltered={handleFilteredData} />
      <KeywordContent data={keywordData} isLoading={isLoading} />
    </div>
  );
};

export default SimilarKeywordPage;
