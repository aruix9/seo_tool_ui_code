"use client";

import Breadcrumbs from "@/components/shared/breadcrumb";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TableList from "./TableList";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <div className="container grow flex flex-col">
      <Breadcrumbs
        list={[
          { name: "Home", link: "/" },
          { name: "Audit", link: "" },
        ]}
      />
      <h1 className="my-8 font-bold text-xl">Anchors</h1>
      <TableList />
    </div>
  );
}
