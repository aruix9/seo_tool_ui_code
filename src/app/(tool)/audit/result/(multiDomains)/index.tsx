"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import { ArrowRight, Rocket, ShoppingCart } from "lucide-react";

import { GapSummary } from "../../(shared)/GapSummary";
import { AuthorityRoadmap } from "../../(shared)/AuditAuthorityRoadmap";

import { getSummary } from "@/lib/actions/audit/auditActions";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import HeroTitle from "../cms/HeroTitleMultiDomains";
import CardsHeroDomain from "./CardsHeroDomain";
import CardBacklinksPieChart from "./CardBacklinksPieChart";
import RefDomainBacklinkProgress from "./RefDomainBacklinkProgress";
import CardDomainTable from "./CardDomainTable";
import CardAquireLinks from "../../(shared)/CardAquireLinks";
import { noLinksRequired, sortedAuditResults } from "@/lib/utils";
import { BacklinkDataType } from "../../../../../../types/type";

type Props = {
  searchParams: ReadonlyURLSearchParams;
};

type AuditProps = {
  [key: string]: BacklinkDataType;
};

const MultiDomainSummary = ({ searchParams }: Props) => {
  const mainUrl = searchParams.get("url");
  const [isLoading, setIsLoading] = useState(true);
  const [allUrls, setAllUrls] = useState<string[]>([]);
  const [auditData, setAuditData] = useState<AuditProps>();

  const fetchAuditData = useCallback(async () => {
    let url = searchParams.get("url");
    if (url) url = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const urls = [url!];

    // get only competitor1, competitor2, competitor3 from search params
    for (let i = 1; i <= searchParams.size; i++) {
      let competitor = searchParams.get(`competitor${i}`);
      if (competitor)
        urls.push(competitor.replace(/^https?:\/\//, "").replace(/\/$/, ""));
    }

    const summaryResponse: BacklinkDataType[] = await getSummary(urls);
    const summary: { [key: string]: BacklinkDataType } = {};
    urls.map((_, i) => {
      const target: string = summaryResponse[i].target;
      summary[target] = { ...summaryResponse[i] };
    });

    const data: { [key: string]: BacklinkDataType } = sortedAuditResults(
      summary,
      "dofollow_refdomains",
    );

    if (Object.keys(data).length > 0) {
      setAllUrls(urls);
      setAuditData(data);
    }
    setIsLoading(false);
  }, [searchParams]);

  useEffect(() => {
    fetchAuditData();
  }, [fetchAuditData]);

  if (isLoading || !mainUrl || !auditData) return <LoadingSkeleton />;

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen">
      <section className="pb-8 border-b border-slate-200 bg-white/50">
        <div className="max-w-[1440px] px-6 mx-auto">
          <HeroTitle />
          <CardsHeroDomain
            mainUrl={mainUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            allUrls={allUrls}
            auditData={auditData}
          />
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <CardBacklinksPieChart auditData={auditData} />
              <RefDomainBacklinkProgress
                mainUrl={mainUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                allUrls={allUrls}
                auditData={auditData}
              />
            </div>

            <CardDomainTable
              data={auditData}
              mainUrl={mainUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              allUrls={allUrls}
            />
          </div>

          <aside className="w-full lg:w-80 space-y-6">
            <div className="space-y-6">
              <AuthorityRoadmap currentStep={2} />
              <GapSummary
                allUrls={allUrls}
                noLinksRequired={noLinksRequired(mainUrl, auditData)}
                competitorName={Object.keys(auditData)[0]}
              />
            </div>

            <CardAquireLinks
              allUrls={allUrls}
              noLinksRequired={noLinksRequired(mainUrl, auditData)}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MultiDomainSummary;
