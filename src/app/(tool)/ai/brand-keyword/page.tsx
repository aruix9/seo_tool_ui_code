"use client";

import { Suspense } from "react";
import Breadcrumb from "@/components/Layout/Breadcrumb";

import HeroTitle from "../cms/HeroTitle";

import TabNavigations from "../shared/TabNavigations";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";

const AiBrandKeywordPage = () => {
  return (
    <Suspense fallback={<div className="w-full max-w-[1440px] mx-auto"><LoadingSkeleton /></div>}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "AI", href: "/ai" },
        { label: "Keyword by Target" },
      ]}
      />
      <main className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        <HeroTitle />
        <TabNavigations activeTab={3} />
        {/* <Filters currentUrl="overview" setKeywordData={setKeywordData} setIsLoading={setIsLoading} getKeywordData={getSimilarKeywordData} /> */}
      </main>
    </Suspense>
  );
};

export default AiBrandKeywordPage;
