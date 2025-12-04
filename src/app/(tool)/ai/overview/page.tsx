"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";
import Link from "next/link";
import React from "react";
import Filters from "./Filters";

const AiOverviewPage = () => {
  const handleFilteredData = (data: any) => {
    // setKeywordData(data);
    console.log(data);
  };

  return (
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
    </div>
  );
};

export default AiOverviewPage;
