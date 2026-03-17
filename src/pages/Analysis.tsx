import { Link } from "react-router-dom"
import { 
  Globe, X, Plus, Activity, Lightbulb, 
  Search, ListChecks, BarChart2
} from "lucide-react"
import { Breadcrumb } from "../components/ui/Breadcrumb"
import { AuthorityRoadmap } from "../components/widgets/AuthorityRoadmap"

export default function Analysis() {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Audit Analyse Gap" }
      ]} />

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white/50">
        <div className="max-w-[1440px] px-6 mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-6 bg-white rounded-xl p-8 md:p-10 shadow-sm border border-slate-200">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                  Bridge the Authority Gap
                </h1>
                <p className="text-slate-500 mb-8 text-lg">
                  Analyze your backlink profile against top competitors and discover exactly what's needed to dominate your niche.
                </p>
                <div className="space-y-6">
                  {/* Input Matrix */}
                  <div className="text-left space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Your Domain</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                        <input
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-primary bg-primary/5 focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all"
                          placeholder="e.g. yourwebsite.com"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Competitors</label>
                      <div className="flex flex-wrap gap-2 p-3 border-2 border-slate-200 rounded-xl bg-slate-50">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg text-sm font-medium border border-slate-200">
                          competitor-a.com <button className="hover:text-red-500"><X className="w-3 h-3" /></button>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg text-sm font-medium border border-slate-200">
                          competitor-b.com <button className="hover:text-red-500"><X className="w-3 h-3" /></button>
                        </span>
                        <button className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors">
                          <Plus className="w-3 h-3" /> Add Competitor
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/analysis-result"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-lg"
                  >
                    <Activity className="w-5 h-5" />
                    Analyze Authority Gap
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 h-full flex flex-col">
                <div className="flex-grow">
                  <AuthorityRoadmap currentStep={1} />
                </div>
                {/* Analysis Quick Tips Card */}
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20 mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="text-primary w-5 h-5" />
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">Analysis Quick Tips</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-sm text-slate-600">
                        <span className="text-primary font-bold">•</span>
                        <span>Add at least <span className="text-slate-900 font-semibold">3 competitors</span> for a more accurate gap analysis.</span>
                      </li>
                      <li className="flex gap-2 text-sm text-slate-600">
                        <span className="text-primary font-bold">•</span>
                        <span>Verify your domain to unlock <span className="text-slate-900 font-semibold">deep crawl insights</span>.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Recently Analyzed Section */}
      <section className="mb-12 py-8">
        <div className="max-w-[1440px] px-6 mx-auto flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold">Recently Analyzed</h2>
            <p className="text-slate-500">Track your progress over time</p>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">View All History</button>
        </div>
        <div className="max-w-[1440px] px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-lg">growthlabs.io</h4>
                  <p className="text-xs text-slate-400">Last analyzed 2 days ago</p>
                </div>
                <div className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded">DR 42</div>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Competitors Analysis</p>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-700">agencyhive.com</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-500">
                      <div>BL: <span className="font-bold text-slate-900">1.2k</span></div>
                      <div>RD: <span className="font-bold text-slate-900">450</span></div>
                      <div>AN: <span className="font-bold text-slate-900">88</span></div>
                    </div>
                  </div>
                  <div className="text-sm border-t border-slate-100 pt-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-700">marketingflow.io</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-500">
                      <div>BL: <span className="font-bold text-slate-900">3.4k</span></div>
                      <div>RD: <span className="font-bold text-slate-900">820</span></div>
                      <div>AN: <span className="font-bold text-slate-900">142</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-500">Gap Status</span>
                  <span className="text-orange-500">-28% Behind</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-orange-500"></div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-lg">saasmetric.com</h4>
                  <p className="text-xs text-slate-400">Last analyzed 5 days ago</p>
                </div>
                <div className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded">DR 58</div>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Competitors Analysis</p>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-700">chartmogul.com</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-500">
                      <div>BL: <span className="font-bold text-slate-900">12.5k</span></div>
                      <div>RD: <span className="font-bold text-slate-900">2.1k</span></div>
                      <div>AN: <span className="font-bold text-slate-900">520</span></div>
                    </div>
                  </div>
                  <div className="text-sm border-t border-slate-100 pt-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-700">baremetrics.com</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-500">
                      <div>BL: <span className="font-bold text-slate-900">9.8k</span></div>
                      <div>RD: <span className="font-bold text-slate-900">1.8k</span></div>
                      <div>AN: <span className="font-bold text-slate-900">410</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-500">Gap Status</span>
                  <span className="text-green-500">+12% Ahead</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-500"></div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-bold text-lg">pixelperfect.app</h4>
                  <p className="text-xs text-slate-400">Last analyzed 1 week ago</p>
                </div>
                <div className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded">DR 12</div>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Competitors Analysis</p>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-700">dribbble.com</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-500">
                      <div>BL: <span className="font-bold text-slate-900">850k</span></div>
                      <div>RD: <span className="font-bold text-slate-900">45k</span></div>
                      <div>AN: <span className="font-bold text-slate-900">12k</span></div>
                    </div>
                  </div>
                  <div className="text-sm border-t border-slate-100 pt-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-slate-700">behance.net</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-500">
                      <div>BL: <span className="font-bold text-slate-900">1.2M</span></div>
                      <div>RD: <span className="font-bold text-slate-900">62k</span></div>
                      <div>AN: <span className="font-bold text-slate-900">18k</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-500">Gap Status</span>
                  <span className="text-red-500">-64% Behind</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[36%] bg-red-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="mb-12 py-12">
        <div className="max-w-[1440px] px-6 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">How Authority Analysis Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <Search className="text-primary group-hover:text-white transition-colors w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Input Details</h3>
              <p className="text-sm text-slate-500 px-4">Enter your domain and up to 5 competitors to start the comparative scan.</p>
            </div>
            <div className="text-center group">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <BarChart2 className="text-primary group-hover:text-white transition-colors w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">2. Deep Analysis</h3>
              <p className="text-sm text-slate-500 px-4">Our AI identifies specific backlink gaps and quality metrics between domains.</p>
            </div>
            <div className="text-center group">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <ListChecks className="text-primary group-hover:text-white transition-colors w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Acquire & Rank</h3>
              <p className="text-sm text-slate-500 px-4">Receive a prioritized list of link opportunities to bridge the authority gap.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
