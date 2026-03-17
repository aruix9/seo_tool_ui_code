import { Link } from "react-router-dom"
import { 
  Info, ArrowRight, ShoppingCart, Rocket, Zap
} from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Breadcrumb } from "../components/ui/Breadcrumb"
import { AuthorityRoadmap } from "../components/widgets/AuthorityRoadmap"
import { GapSummary } from "../components/widgets/GapSummary"

const pieData = [
  { name: 'You', value: 13.5, color: '#7C3AED' },
  { name: 'Comp A', value: 10.2, color: '#94A3B8' },
  { name: 'Comp B', value: 75.0, color: '#1e293b' },
  { name: 'Comp C', value: 1.3, color: '#cbd5e1' },
];

export default function AnalysisResult() {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Audit Analyse Gap", href: "/analysis" },
        { label: "Analysis" }
      ]} />

      {/* Full Width Leaderboard Section */}
      <section className="pb-8 border-b border-slate-200 bg-white/50">
        <div className="max-w-[1440px] px-6 mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900">Analysis</h2>
            <p className="text-slate-500 mt-1">Real-time domain comparison and link intersection for your portfolio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Your Domain Card */}
            <div className="bg-white border-2 border-primary rounded-xl p-5 shadow-lg shadow-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Current</span>
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Your Domain</p>
              <h3 className="font-bold text-slate-900 truncate mb-4">my-awesome-site.com</h3>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Domain Trust</p>
                  <p className="text-lg font-bold text-primary">84</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Ref Domains</p>
                  <p className="text-lg font-bold">1.2k</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Backlinks</p>
                  <p className="text-lg font-bold">14.8k</p>
                </div>
              </div>
            </div>
            {/* Competitor 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/50 transition-colors shadow-sm">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Competitor A</p>
              <h3 className="font-bold text-slate-900 truncate mb-4">competitor-alpha.io</h3>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Domain Trust</p>
                  <p className="text-lg font-bold text-slate-700">72</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Ref Domains</p>
                  <p className="text-lg font-bold">940</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Backlinks</p>
                  <p className="text-lg font-bold">11.2k</p>
                </div>
              </div>
            </div>
            {/* Competitor 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/50 transition-colors shadow-sm">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Competitor B</p>
              <h3 className="font-bold text-slate-900 truncate mb-4">the-market-leader.com</h3>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Domain Trust</p>
                  <p className="text-lg font-bold text-slate-700">91</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Ref Domains</p>
                  <p className="text-lg font-bold">4.1k</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Backlinks</p>
                  <p className="text-lg font-bold">82.5k</p>
                </div>
              </div>
            </div>
            {/* Competitor 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary/50 transition-colors shadow-sm">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Competitor C</p>
              <h3 className="font-bold text-slate-900 truncate mb-4">emerging-rival.net</h3>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Domain Trust</p>
                  <p className="text-lg font-bold text-slate-700">45</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Ref Domains</p>
                  <p className="text-lg font-bold">210</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Backlinks</p>
                  <p className="text-lg font-bold">1.5k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Area */}
          <div className="flex-1 space-y-8">
            {/* Analysis Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Backlinks Comparison (Pie Chart) */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-lg">Backlinks Comparison</h3>
                  <Info className="w-5 h-5 text-slate-400 cursor-help" title="Proportion of backlinks across all tracked domains" />
                </div>
                <div className="h-64 flex items-center justify-center relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-2xl font-black text-primary">110k</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Total Links</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600">You (13.5%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600">Comp. A (10.2%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600">Comp. B (75.0%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    <span className="text-xs font-medium text-slate-600">Comp. C (1.3%)</span>
                  </div>
                </div>
              </div>

              {/* Referring Domains Benchmarking (Vertical Progress Bars) */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-lg">Ref. Domains Benchmarking</h3>
                  <div className="flex bg-slate-100 p-1 rounded-lg">
                    <button className="px-3 py-1 text-xs font-bold rounded-md bg-white shadow-sm">12M</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-500">6M</button>
                  </div>
                </div>
                <div className="space-y-6 h-64 flex flex-col justify-center">
                  {/* Comp B (Leader) */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="text-slate-500">Comp. B (Leader)</span>
                      <span className="text-slate-900">4,100</span>
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  {/* Your Domain */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="text-primary">Your Domain</span>
                      <span className="text-slate-900">1,200</span>
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '29%' }}></div>
                    </div>
                  </div>
                  {/* Comp A */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="text-slate-500">Comp. A</span>
                      <span className="text-slate-700">940</span>
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full transition-all duration-1000" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                  {/* Comp C */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                      <span className="text-slate-500">Comp. C</span>
                      <span className="text-slate-700">210</span>
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-300 rounded-full transition-all duration-1000" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">You</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-400 rounded-sm"></div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Comp. A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-800 rounded-sm"></div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Comp. B</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-300 rounded-sm"></div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Comp. C</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    to="/acquire-links"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                  >
                    <span>128 New Opportunities Today</span>
                    <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Competitor Comparison Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Detailed Domain Comparison</h3>
                  <p className="text-sm text-slate-500">Metric-by-metric breakdown of your market standing.</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Metrics</th>
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary">Your Domain</th>
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Comp. A</th>
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Comp. B</th>
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Comp. C</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Backlinks</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">14.8k</td>
                      <td className="px-8 py-4 text-sm">11.2k</td>
                      <td className="px-8 py-4 text-sm">82.5k</td>
                      <td className="px-8 py-4 text-sm">1.5k</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Dofollow Backlinks</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">8.2k</td>
                      <td className="px-8 py-4 text-sm">6.1k</td>
                      <td className="px-8 py-4 text-sm">54.2k</td>
                      <td className="px-8 py-4 text-sm">0.9k</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Inline Ranks</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">124</td>
                      <td className="px-8 py-4 text-sm">82</td>
                      <td className="px-8 py-4 text-sm">450</td>
                      <td className="px-8 py-4 text-sm">12</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Ref. Domains</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">1.2k</td>
                      <td className="px-8 py-4 text-sm">0.9k</td>
                      <td className="px-8 py-4 text-sm">4.1k</td>
                      <td className="px-8 py-4 text-sm">0.2k</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Subnets</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">850</td>
                      <td className="px-8 py-4 text-sm">640</td>
                      <td className="px-8 py-4 text-sm">2.8k</td>
                      <td className="px-8 py-4 text-sm">140</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">IPs</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">1.1k</td>
                      <td className="px-8 py-4 text-sm">890</td>
                      <td className="px-8 py-4 text-sm">3.9k</td>
                      <td className="px-8 py-4 text-sm">190</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Nofollow Backlinks</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">6.6k</td>
                      <td className="px-8 py-4 text-sm">5.1k</td>
                      <td className="px-8 py-4 text-sm">28.3k</td>
                      <td className="px-8 py-4 text-sm">0.6k</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Edu Backlinks</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">42</td>
                      <td className="px-8 py-4 text-sm">28</td>
                      <td className="px-8 py-4 text-sm">156</td>
                      <td className="px-8 py-4 text-sm">4</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-4 font-semibold text-sm text-slate-700">Gov Backlinks</td>
                      <td className="px-8 py-4 font-bold text-sm text-primary">18</td>
                      <td className="px-8 py-4 text-sm">12</td>
                      <td className="px-8 py-4 text-sm">84</td>
                      <td className="px-8 py-4 text-sm">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
            {/* Authority Roadmap Widget */}
            <div className="space-y-6">
              <AuthorityRoadmap currentStep={2} />
              <GapSummary linksNeeded={12} competitorName="Competitor B" progressPercentage={75} />
            </div>

            {/* Marketplace Mini Card */}
            <Link to="/acquire-links" className="block bg-primary hover:bg-primary/95 transition-all rounded-xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="w-6 h-6 text-white" />
                  <h4 className="font-black text-xl tracking-tight">Acquire Links</h4>
                </div>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Bridge your domain gap instantly. Access our curated marketplace of high-authority niche placements.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/20 w-fit px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  128 New Opportunities Today
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-black text-lg">Browse Catalog</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Rocket className="w-40 h-40" />
              </div>
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}
