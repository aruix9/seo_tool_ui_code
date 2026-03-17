import { Link } from "react-router-dom"
import { 
  ShoppingCart, ChevronDown, SortDesc
} from "lucide-react"
import { Breadcrumb } from "../components/ui/Breadcrumb"
import { AuthorityRoadmap } from "../components/widgets/AuthorityRoadmap"
import { GapSummary } from "../components/widgets/GapSummary"

const opportunities = [
  { domain: "techcrunch.com", category: "Tech & News", price: "$1,200", metrics: [
    { comp: "Comp Alpha", stats: "2.4k BL • 45 IR" },
    { comp: "Market Leader", stats: "12k BL • 82 IR" }
  ]},
  { domain: "forbes.com", category: "Business", price: "$2,500", metrics: [
    { comp: "Market Leader", stats: "45k BL • 94 IR" }
  ]},
  { domain: "wired.com", category: "Tech", price: "$850", metrics: [
    { comp: "Industry News", stats: "1.8k BL • 39 IR" }
  ]},
  { domain: "nytimes.com", category: "News", price: "$3,200", metrics: [
    { comp: "Market Leader", stats: "110k BL • 98 IR" }
  ]},
  { domain: "theverge.com", category: "Tech", price: "$950", metrics: [
    { comp: "Comp Alpha", stats: "5.2k BL • 51 IR" }
  ]},
  { domain: "hubspot.com", category: "Marketing", price: "$1,500", metrics: [
    { comp: "Market Leader", stats: "22k BL • 78 IR" }
  ]},
  { domain: "engadget.com", category: "Tech", price: "$700", metrics: [
    { comp: "Comp Alpha", stats: "3.1k BL • 42 IR" }
  ]},
  { domain: "businessinsider.com", category: "Business", price: "$1,800", metrics: [
    { comp: "Market Leader", stats: "35k BL • 88 IR" }
  ]},
  { domain: "medium.com", category: "Social", price: "$350", metrics: [
    { comp: "Industry News", stats: "0.8k BL • 28 IR" }
  ]},
  { domain: "techradar.com", category: "Tech Reviews", price: "$550", metrics: [
    { comp: "Comp Alpha", stats: "1.2k BL • 32 IR" }
  ]}
];

export default function AcquireLinks() {
  return (
    <div className="bg-white font-display text-slate-900 min-h-screen">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Audit Analyse Gap", href: "/analysis" },
        { label: "Acquire Links" }
      ]} />

      <section className="mx-auto flex flex-col lg:flex-row max-w-[1440px] px-6 gap-8 pb-12">
        {/* Main Content Area (Left) */}
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-tight text-slate-900">Link Opportunities</h1>
            <p className="mt-2 text-lg text-slate-600 max-w-2xl font-medium">
              Discover and acquire high-authority backlinks to boost your domain ranking and outpace competitors.
            </p>
          </div>
          
          <div className="flex flex-col gap-8 items-start">
            <div className="w-full min-w-0">
              {/* Filters Section */}
              <div className="mb-6 flex flex-wrap items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
                <button className="flex items-center gap-2 rounded-xl bg-primary/5 border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                  Price Range <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 rounded-xl bg-primary/5 border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                  Competitor Match <ChevronDown className="w-4 h-4" />
                </button>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sorted by:</span>
                  <button className="text-sm font-bold text-primary flex items-center gap-1">
                    Relevance <SortDesc className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Links Marketplace Table */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                <div className="min-w-full divide-y divide-slate-100">
                  <div className="grid grid-cols-12 gap-4 bg-slate-100/50 border-b border-slate-200 px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <div className="col-span-4">Source Domain</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-4">Found In (Metrics)</div>
                    <div className="col-span-2 text-right">Action</div>
                  </div>
                  
                  {/* Table Rows */}
                  {opportunities.map((opp, index) => (
                    <div key={index} className="grid grid-cols-12 items-center gap-4 px-8 py-6 hover:bg-slate-50/30 transition-colors border-t border-slate-100 first:border-t-0">
                      <div className="col-span-4">
                        <div className="min-w-0">
                          <p className="truncate font-bold text-slate-900 text-base">{opp.domain}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{opp.category}</p>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <span className="text-lg font-black text-slate-900">{opp.price}</span>
                      </div>
                      <div className="col-span-4">
                        <div className="flex flex-col gap-2">
                          {opp.metrics.map((metric, mIndex) => (
                            <div key={mIndex} className="flex items-center justify-between px-3 py-1.5 bg-primary/5 rounded-lg border border-slate-200">
                              <span className="text-[10px] font-bold text-slate-500">{metric.comp}</span>
                              <span className="text-[10px] font-bold text-slate-900">{metric.stats}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2 text-right">
                        <Link to="/cart" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all whitespace-nowrap">
                          <ShoppingCart className="w-4 h-4" />
                          Acquire Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between bg-slate-100/50 border-t border-slate-200 px-8 py-5">
                  <p className="text-sm font-bold text-slate-400">
                    Showing <span className="text-slate-900">1-10</span> of <span className="text-slate-900">154</span> domains
                  </p>
                  <div className="flex gap-3">
                    <button className="rounded-xl border border-slate-200 bg-primary/5 px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">Previous</button>
                    <button className="rounded-xl border border-slate-200 bg-primary/5 px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Right) */}
        <aside className="w-full lg:w-80 space-y-6 flex-shrink-0 mt-8 lg:mt-0">
          {/* Competitor Gaps Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">groups</span>
              <h3 className="font-bold text-lg">Competitor Gaps</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-primary/5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-slate-900">Competitor Alpha</p>
                  <span className="text-xs font-black text-primary">Gap: 45%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-primary/5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-slate-900">The Market Leader</p>
                  <span className="text-xs font-black text-primary">Gap: 12%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-primary/5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-slate-900">Industry News Inc.</p>
                  <span className="text-xs font-black text-primary">Gap: 88%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Authority Roadmap Widget */}
          <div className="space-y-6">
            <AuthorityRoadmap currentStep={3} />
            <GapSummary linksNeeded={12} competitorName="Competitor B" progressPercentage={75} showLink={false} />
          </div>
        </aside>
      </section>
    </div>
  )
}
