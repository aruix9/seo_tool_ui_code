"use client";

import { Breadcrumb } from "@/components/Layout/Breadcrumb";

import Link from "next/link";
import TabNavigations from "./shared/TabNavigations";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import HeroTitle from "./cms/HeroTitle";

const KeywordsPage = () => {

  useEffect(() => {
    redirect("/keywords/similar")
  }, [])

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Keywords" },
      ]}
      />
      <main className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        <HeroTitle />
        <TabNavigations />
        <div className="flex gap-6">
          <Link href="keywords/similar">Similar Keywords</Link>
          <Link href="keywords/related">Related Keywords</Link>
          <Link href="keywords/question">Questions Keywords</Link>
          <Link href="keywords/longtail">Longtail Keywords</Link>
        </div>
      </main>
    </>
  );
};

export default KeywordsPage;
