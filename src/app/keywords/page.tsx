"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";

import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [keywordData, setKeywordData] = useState(null);

  const handleFilteredData = (data: any) => {
    setKeywordData(data);
  };

  return (
    <div className="container grow flex flex-col mb-16">
      <Breadcrumbs
        list={[
          { name: "Home", link: "/" },
          { name: "Keywords", link: "" },
        ]}
      />
      <h1 className="my-8 font-bold text-xl">Keywords</h1>
      <div className="flex gap-6">
        <Link href="keywords/similar">Similar Keywords</Link>
        <Link href="keywords/related">Related Keywords</Link>
        <Link href="keywords/questions">Questions Keywords</Link>
        <Link href="keywords/longtail">Longtail Keywords</Link>
      </div>
    </div>
  );
};

export default page;
