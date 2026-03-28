import { checkGap, noLinksRequired, sortedAuditResults } from "@/lib/utils";
import { ArrowDown, ArrowUp, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BacklinkDataType } from "../../../../../../types/type";

type Props = {
  mainUrl: string;
  allUrls: string[];
  auditData: { [key: string]: BacklinkDataType };
};

const RefDomainBacklinkProgress = ({ mainUrl, allUrls, auditData }: Props) => {
  const data = sortedAuditResults(auditData, "dofollow_refdomains");
  const progressWidth = (current: number) => {
    const highest = Number(Object.values(data)[0].dofollow_refdomains);
    return (current / highest) * 100;
  };
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-lg">Ref. Domains Benchmarking</h3>
        {/* <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button className="px-3 py-1 text-xs font-bold rounded-md bg-white shadow-sm">12M</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-500">6M</button>
                </div> */}
      </div>
      <div className="space-y-6 h-32 mb-auto flex flex-col justify-flex-start">
        {Object.keys(data).map((url, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
              <span
                className={`${url === mainUrl ? "text-primary" : "text-slate-500"}`}
              >
                {url}&nbsp;
                {i === 0
                  ? "(leader)"
                  : url === mainUrl
                    ? "(Your Domain)"
                    : i >= 1 && `(Competitor ${i})`}
              </span>
              <span className="text-slate-900">
                {Number(data[url].dofollow_refdomains).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${url === mainUrl ? "bg-primary" : i > 1 ? "bg-slate-200" : "bg-slate-900"}`}
                style={{
                  width: `${progressWidth(data[url].dofollow_refdomains)}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-6">
        <div className="flex flex-wrap">
          {allUrls.map(
            (url, i) =>
              url !== mainUrl && (
                <div className="inline-flex gap-2 items-center mr-4" key={i}>
                  <span className="text-slate-600 font-bold lowercase tracking-tighter text-[10px]">
                    {url} Gap
                  </span>
                  <div
                    className={`flex items-center gap-1 text-sm ${checkGap(url, mainUrl, data)[1] ? "text-blue-500" : "text-red-400"}`}
                  >
                    {checkGap(url, mainUrl, data)[1] ? (
                      <ArrowUp className="size-4" />
                    ) : (
                      <ArrowDown className="size-4" />
                    )}
                    <span>
                      {Number(checkGap(url, mainUrl, data)[0]).toLocaleString(
                        "en-IN",
                      )}
                      %
                    </span>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
      <div className="mt-4">
        <Link
          href={`/audit/opportunities?targets=${allUrls.join(",")}`}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
        >
          <span>{noLinksRequired(mainUrl, data)} New Opportunities Today</span>
          <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default RefDomainBacklinkProgress;
