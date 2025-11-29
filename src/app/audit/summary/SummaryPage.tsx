"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { getSummary } from "@/lib/actions/audit/auditActions";

import Breadcrumbs from "@/components/shared/breadcrumb";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";

import SummaryDisplayCards from "./SummaryDisplayCards";
import SummaryTable from "./SummaryTable";
import { summaryList } from "../../../../data";

const Page = () => {
  const [auditData, setAuditData] = useState(null);
  const [auditKeys, setAuditKeys] = useState(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchAuditData = async () => {
      // Collect the main website
      const urls: string[] = [];
      const mainUrl = searchParams.get("url");
      if (mainUrl) urls.push(mainUrl);

      // Collect competitors (competitor1..5)
      for (let i = 1; i <= 5; i++) {
        const competitor = searchParams.get(`competitor${i}`);
        if (competitor) urls.push(competitor);
      }

      if (urls.length === 0) return; // avoid empty API calls

      const summaryResponse = await getSummary(urls);
      // const metricsResponse = await getMetrics(urls)
      // const backlinksMetricsResponse = await getBacklinksMetrics(urls)
      setAuditData({
        summary: summaryResponse,
        // metrics: metricsResponse,
        // historyBacklink: historyResponse,
        // backlinksMetrics: backlinksMetricsResponse
      });
      setAuditKeys({
        summaryKeys: Object.keys(summaryResponse[0]),
        // metricsKeys: Object.keys(metricsResponse[0]),
        // historyKeys: Object.keys(historyResponse[0]),
        // backlinksMetricsKeys: Object.keys(backlinksMetricsResponse[0]),
      });
    };

    fetchAuditData();
  }, [searchParams]);

  if (!auditData && !auditKeys) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="container grow flex flex-col">
      <Breadcrumbs
        list={[
          { name: "Home", link: "/" },
          { name: "Audit", link: "" },
        ]}
      />
      <h1 className="my-8 font-bold text-xl">Audit Summary</h1>
      <SummaryDisplayCards auditData={auditData} />
      <SummaryTable
        auditData={auditData}
        auditKeys={auditKeys}
        summaryList={summaryList}
      />
      <div className="text-center mb-16">
        <Link
          href={`backlink?${searchParams.toString()}`}
          className="border-2 px-2 py-1 border-primary rounded-md"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default Page;
