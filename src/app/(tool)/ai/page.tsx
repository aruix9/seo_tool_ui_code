"use client";

import { useEffect } from "react";
import Breadcrumb from "@/components/Layout/Breadcrumb";
import { redirect } from "next/navigation";

const Page = () => {
  useEffect(() => {
    redirect("/ai-overview")
  }, [])

  return (
    <Breadcrumb items={[
      { label: "Home", href: "/" },
      { label: "AI Overview" },
    ]}
    />
  );
};

export default Page;
