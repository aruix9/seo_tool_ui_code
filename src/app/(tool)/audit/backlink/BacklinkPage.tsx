"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import { getMetrics, getSummary } from "@/lib/actions/audit/auditActions";
import Breadcrumbs from "@/components/shared/breadcrumb";
import MultiUrls from "./MultiUrls";
import SingleUrl from "./SingleUrl";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BacklinkPage = () => {
  const searchParams = useSearchParams();

  const [backlinkData, setBacklinkData] = useState(null);
  const [auditKeys, setAuditKeys] = useState(null);

  useEffect(() => {
    const fetchAuditData = async () => {
      // Collect the main website
      const urls: string[] = [];
      urls.push(searchParams.get("url") as string);
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
        metrics: backlinkMetrics,
        targets: urls,
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
        <>
          <MultiUrls backlinkData={backlinkData} auditKeys={auditKeys} />
          <div className="text-center mt-8">
            <Button>
              <Link
                href={`/audit/opportunities?targets=${backlinkData?.targets.join(",")}`}
                className="btn"
              >
                Find Link Opportunities
              </Link>
            </Button>
          </div>
        </>
      ) : (
        <SingleUrl backlinkData={backlinkData} auditKeys={auditKeys} />
      )}
    </div>
  );
};

export default BacklinkPage;
