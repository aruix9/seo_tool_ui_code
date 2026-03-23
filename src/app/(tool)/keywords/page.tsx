"use client";

import Breadcrumb from "@/components/Layout/Breadcrumb";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const KeywordsPage = () => {

  useEffect(() => {
    redirect("/keywords/similar")
  }, [])

  return (
    <Breadcrumb items={[
      { label: "Home", href: "/" },
      { label: "Keywords" },
    ]}
    />
  );
};

export default KeywordsPage;
