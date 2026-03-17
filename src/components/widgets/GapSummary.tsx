import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

interface GapSummaryProps {
  linksNeeded: number;
  competitorName: string;
  progressPercentage: number;
  showLink?: boolean;
}

export function GapSummary({ linksNeeded, competitorName, progressPercentage, showLink = true }: GapSummaryProps) {
  return (
    <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Gap Summary</p>
      <p className="text-sm text-slate-600 mb-4 font-medium">
        You need <span className="text-slate-900 font-black">{linksNeeded} more links</span> to match {competitorName}.
      </p>
      <div className="h-2 w-full bg-slate-100 rounded-full mb-2">
        <div className="h-full bg-primary rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="space-y-3">
        <p className="text-[10px] font-bold text-slate-400">{progressPercentage}% to authority target</p>
        {showLink && (
          <div>
            <Link to="/acquire-links" className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline group">
              Find Links to Bridge This Gap
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
