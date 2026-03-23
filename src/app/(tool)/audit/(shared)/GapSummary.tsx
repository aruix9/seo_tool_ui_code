import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface GapSummaryProps {
  allUrls: string[];
  noLinksRequired: string;
  competitorName: string;
  showLink?: boolean;
}

export function GapSummary({
  noLinksRequired,
  competitorName,
  allUrls,
  showLink = true,
}: GapSummaryProps) {
  return (
    <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">
        Gap Summary
      </p>
      <p className="text-sm text-slate-600 mb-4 font-medium">
        You need{" "}
        <span className="text-slate-900 font-black">
          {noLinksRequired} more links
        </span>{" "}
        to match <strong>{competitorName}</strong>.
      </p>
      <div className="space-y-3">
        {showLink && (
          <div>
            <Link
              href={`/audit/opportunities?targets=${allUrls.join(",")}`}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline group"
            >
              Find Links to Bridge This Gap
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
