"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { getMetrics, getSummary } from "@/lib/actions/audit/auditActions";
import Breadcrumbs from "@/components/shared/breadcrumb";
import MultiUrls from "./MultiUrls";
import SingleUrl from "./SingleUrl";

const BacklinkPage = () => {
  const searchParams = useSearchParams();
  // Collect the main website
  const urls: string[] = [];
  const mainUrl = searchParams.get("url");
  if (mainUrl) urls.push(mainUrl);

  const [backlinkData, setBacklinkData] = useState(null);
  const [auditKeys, setAuditKeys] = useState(null);

  useEffect(() => {
    const fetchAuditData = async () => {
      // Collect competitors (competitor1..5)
      for (let i = 1; i <= 5; i++) {
        const competitor = searchParams.get(`competitor${i}`);
        if (competitor) urls.push(competitor);
      }

      if (urls.length === 0) return; // avoid empty API calls

      // metrics API
      const backlinkMetrics = await getMetrics(urls);

      // summary API
      const summaryResponse = await getSummary(urls);

      setBacklinkData({
        summary: summaryResponse,
        // history: historyResponse,
        metrics: backlinkMetrics,
      });
      setAuditKeys({
        summaryKeys: Object.keys(summaryResponse[0]),
      });
    };

    fetchAuditData();
  }, [searchParams]);

  if (!backlinkData) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="container grow flex flex-col mb-16">
      <Breadcrumbs
        list={[
          { name: "Home", link: "/" },
          { name: "Audit", link: "" },
        ]}
      />
      <h1 className="my-8 font-bold text-xl">Backlink Summary</h1>

      {searchParams.size > 1 ? (
        <MultiUrls backlinkData={backlinkData} auditKeys={auditKeys} />
      ) : (
        <SingleUrl backlinkData={backlinkData} auditKeys={auditKeys} />
      )}
    </div>
  );
};

export default BacklinkPage;
