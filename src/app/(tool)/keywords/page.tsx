"use client";

import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const KeywordsPage = () => {

  useEffect(() => {
    redirect("/keywords/similar")
  }, [])

  return (
    <LoadingSkeleton />
  );
};

export default KeywordsPage;
