"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";

import Filters from "./Filters";
import { useState } from "react";
import KeywordContent from "./KeywordContent";

const SimilarKeywordPage = () => {
  const [keywordData, setKeywordData] = useState(null);

  const handleFilteredData = (data: any) => {
    setKeywordData(data);
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
      <div className="my-auto">
        <Filters onFiltered={handleFilteredData} />
        <KeywordContent data={keywordData} />
      </div>
    </div>
  );
};

export default SimilarKeywordPage;
