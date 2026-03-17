import { Link } from "react-router-dom"
import { 
  Globe, UserPlus, X, Plus, TrendingUp, Combine, LineChart, 
  ShoppingCart, ExternalLink, Briefcase, Activity, MousePointerClick, 
  BarChart2, Star, ArrowRight, Network, CheckCircle
} from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-background-light">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-slate-900">
            Bridge the <span className="text-primary">Authority Gap</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
            Analyze domain gaps, discover backlink opportunities, and build search authority with precision-engineered SEO data.
          </p>
          
          {/* Domain Comparison Matrix */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-2 rounded-2xl border-2 border-primary/40 purple-glow flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-6 gap-3 bg-slate-50 rounded-xl">
                <Globe className="text-primary w-6 h-6" />
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-lg py-5 font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal outline-none"
                  placeholder="Your Domain (e.g. acme.com)"
                  type="text"
                />
              </div>
              <Link
                to="/analysis"
                className="bg-primary text-white px-12 py-5 rounded-xl font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center"
              >
                Analyze
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 p-4 bg-white/50 rounded-xl border border-dashed border-primary/20">
              <span className="text-sm font-bold text-slate-400 mr-2 flex items-center gap-1">
                <UserPlus className="w-4 h-4" /> Add Competitors:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="pl-4 pr-2 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 flex items-center gap-2">
                  competitor-a.com
                  <button className="hover:text-primary/60"><X className="w-3 h-3" /></button>
                </span>
                <span className="pl-4 pr-2 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 flex items-center gap-2">
                  market-leader.io
                  <button className="hover:text-primary/60"><X className="w-3 h-3" /></button>
                </span>
                <button className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs font-bold rounded-full border border-slate-200 transition-colors flex items-center gap-1">
                  <Plus className="w-3 h-3" /> Add domain
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Live Data Ticker */}
      <div className="bg-slate-900 border-y border-slate-800 py-4 overflow-hidden">
        <div className="animate-marquee flex gap-12 items-center">
          {/* Ticker Items */}
          <div className="flex items-center gap-8 text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-white">1.2M</span> Backlinks Indexed Today
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-white">450</span> New Gap Opportunities Found
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-white">12.5k</span> Marketplace Transactions (24h)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-white">3,240</span> Domains Analyzed This Hour
            </div>
          </div>
          {/* Duplicated for seamless loop */}
          <div className="flex items-center gap-8 text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-white">1.2M</span> Backlinks Indexed Today
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-white">450</span> New Gap Opportunities Found
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-white">12.5k</span> Marketplace Transactions (24h)
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-white">3,240</span> Domains Analyzed This Hour
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
            {/* Box 1: Link Intersect */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <Combine className="text-primary mb-4 p-3 bg-white rounded-xl border border-primary/10 shadow-sm w-12 h-12" />
                <h3 className="text-2xl font-black mb-3">Link Intersect</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Instantly find the common domains linking to your competitors but missing from your profile.</p>
              </div>
              <div className="mt-8 relative h-32 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-primary/20 rounded-full -mr-8"></div>
                <div className="w-24 h-24 border-4 border-primary rounded-full bg-primary/5 flex items-center justify-center z-10">
                  <CheckCircle className="text-primary w-8 h-8" />
                </div>
                <div className="w-24 h-24 border-4 border-primary/20 rounded-full -ml-8"></div>
              </div>
            </div>
            
            {/* Box 2: Domain Trust Scaling */}
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <LineChart className="text-primary mb-4 p-3 bg-white rounded-xl border border-primary/10 shadow-sm w-12 h-12" />
                <h3 className="text-2xl font-black mb-3">Domain Trust Scaling</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Map your path to industry-leading domain authority with predictive growth metrics.</p>
              </div>
              <div className="mt-8 h-32 flex items-end gap-2 px-4">
                <div className="flex-1 bg-primary/20 rounded-t-lg h-[40%]"></div>
                <div className="flex-1 bg-primary/40 rounded-t-lg h-[60%]"></div>
                <div className="flex-1 bg-primary/60 rounded-t-lg h-[80%]"></div>
                <div className="flex-1 bg-primary rounded-t-lg h-[100%] shadow-lg shadow-primary/20"></div>
              </div>
            </div>
            
            {/* Box 3: Instant Marketplace */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <ShoppingCart className="text-primary mb-4 p-3 bg-white/10 rounded-xl border border-white/10 shadow-sm w-12 h-12" />
                <h3 className="text-2xl font-black mb-3">Instant Marketplace</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Acquire missing link placements in one click from our curated high-DR inventory.</p>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="bg-white/5 p-8 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Marketplace</h2>
              <p className="text-slate-500 font-medium">Top authority sources available for placement today.</p>
            </div>
            <button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2">
              Explore All Domains
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Row 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                  <Globe className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">techpulse.com</h4>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Technology & SaaS</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Domain Authority</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-900">88</span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">marketwise.io</h4>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Finance & Business</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Domain Authority</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-900">74</span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: '74%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                  <Activity className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">healthline-proxy.net</h4>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Medical & Wellness</span>
                </div>
              </div>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">Domain Authority</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-900">91</span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: '91%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">Domain Authority Insights</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              The gap between your site and your competitors isn't just a number—it's a list of missing opportunities. ButterSwipe visualizes exactly where your authority falls short and maps the fastest route to parity.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background-light border border-slate-100">
                <TrendingUp className="text-primary p-2 bg-primary/10 rounded-lg w-10 h-10" />
                <div>
                  <h4 className="font-bold">Identify Low-Hanging Fruit</h4>
                  <p className="text-sm text-slate-500">Discover domains that link to all your rivals but not to you.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-inner">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm p-8">
              <div className="relative h-64 w-full flex items-end justify-between gap-4">
                {/* Simulated Graph Visualization */}
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-slate-100 rounded-t-lg relative group h-[45%]">
                    <div className="absolute inset-0 bg-slate-200 rounded-t-lg transition-all group-hover:bg-slate-300"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">DA 42</div>
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-slate-400 uppercase">Your Site</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-primary/20 rounded-t-lg relative group h-[78%]">
                    <div className="absolute inset-0 bg-primary/10 rounded-t-lg transition-all group-hover:bg-primary/20"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">DA 76</div>
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-slate-400 uppercase">Comp A</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-primary/40 rounded-t-lg relative group h-[88%]">
                    <div className="absolute inset-0 bg-primary/30 rounded-t-lg transition-all group-hover:bg-primary/40"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">DA 84</div>
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-slate-400 uppercase">Comp B</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="w-full bg-primary rounded-t-lg relative group h-[95%] shadow-lg shadow-primary/20">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">DA 92</div>
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-slate-400 uppercase">Leader</span>
                </div>
                
                {/* Horizontal Grid Lines */}
                <div className="absolute bottom-0 left-0 w-full border-b border-slate-100 -z-10"></div>
                <div className="absolute bottom-1/4 left-0 w-full border-b border-slate-50 -z-10"></div>
                <div className="absolute bottom-2/4 left-0 w-full border-b border-slate-50 -z-10"></div>
                <div className="absolute bottom-3/4 left-0 w-full border-b border-slate-50 -z-10"></div>
              </div>
              <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-xs font-bold text-slate-600">Authority Gap</span>
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Authority Comparison v2.4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-extrabold mb-16">Three Steps to Authority</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 text-primary shadow-sm">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Input Domains</h3>
              <p className="text-slate-500 text-sm">Add your website and up to 5 major competitors to our analysis engine.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 text-primary shadow-sm">
                <BarChart2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Analyze Gaps</h3>
              <p className="text-slate-500 text-sm">We process 500M+ backlinks to find the overlap and unique opportunities.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 text-primary shadow-sm">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Buy Missing Links</h3>
              <p className="text-slate-500 text-sm">Acquire high-authority placements directly from our curated marketplace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-extrabold mb-16">Trusted by SEO Teams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50">
              <div className="flex gap-1 text-primary mb-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-600 mb-6 italic text-sm">"ButterSwipe completely automated our gap analysis. We saved over 40 hours of manual work in the first month."</p>
              <div className="flex items-center gap-3">
                <img alt="Sarah Jenkins" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD1EFW5TxRqprfThS_JU39a4YwDF0IeMdRVI9pMfmafilKwNGc7xqRtYGDWvFDb_IvjjgzhWx3baVZe8x4HHg5GH85zsS1yboqoiMQF6Bqas0xn-UCA-5dyFSxAsqbur4M51hD69EFIw8J9DheSybCAgwp3Ce5NAk1anqYUsojF9YiTkBI59OoJOiYS4eWddf98sroSQvoABvOYWh4pSlS4pvH9P0xXMOeqRuHQSPTrc8VyeMGU9gWUpJa3mQ8mAyleKUvFlPQYeY7" />
                <div>
                  <h5 className="font-bold text-sm">Sarah Jenkins</h5>
                  <span className="text-xs text-slate-400">Head of SEO, GrowthBox</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50">
              <div className="flex gap-1 text-primary mb-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-600 mb-6 italic text-sm">"The marketplace link quality is unparalleled. Every domain we've purchased from has high genuine traffic."</p>
              <div className="flex items-center gap-3">
                <img alt="Marcus Chen" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3l0xnhDn4zvZQ4VtG53ixATi9viyhuM-I2tMi9-29rA_x4wxYSeucQRI2lTOEvRhCf1Je_IwKskjlATY6qtr-nHmohXX5-jDsGdYo5l9FBPV5lTL_O2cBCxs3BBfzm1VBM-Jhlf9Zq9Zqj3vKVJm57oko2JkJg7pq0lDIfiJu4H_7ftLEnri1rrJtIZPftZun1t47KT2IUJLvNNE1UBipoOasQr2YUtAlGjzHz_Wf2ViFo4PjqtUe_67-WH6bTGbv9AYjhGD_yRmQ" />
                <div>
                  <h5 className="font-bold text-sm">Marcus Chen</h5>
                  <span className="text-xs text-slate-400">Digital Strategist, OmniMedia</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50">
              <div className="flex gap-1 text-primary mb-4">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-slate-600 mb-6 italic text-sm">"A critical tool for our enterprise clients. The authority growth projections are incredibly accurate."</p>
              <div className="flex items-center gap-3">
                <img alt="David Miller" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxviwPauZrlEC-f8oG0x7yq5lR7cpuwQOiBUMGaLYf5g7Cyj_zwMt25J3FN88z-zRuAVGrih7NUTlS8JeFkTIpGlmOSeFFSolci-5f3ovG-m_wPneV_wnHXXeYwzdY48HbRPRqLPBmMAPKzYcHceoEc6EPx72hMurTaXlie4Sbsp8omzAYGglElEpCA7oog6E3kSVd9DbB00wAqvbJUrGxMCAK0QSbq0eXcOYMb6QnvDHruodkzgaVWk3tetw0PPxspKCCbuLoKv9V" />
                <div>
                  <h5 className="font-bold text-sm">David Miller</h5>
                  <span className="text-xs text-slate-400">Senior Analyst, LinkLogic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-12">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Strategy</span>
                <h3 className="text-lg font-bold mt-2 mb-3">The 2024 Link Building Manifesto</h3>
                <p className="text-slate-500 text-sm mb-4">How the landscape of digital authority is changing with AI-generated content.</p>
                <Link to="#" className="text-primary text-sm font-bold flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-indigo-500/40 flex items-center justify-center">
                <LineChart className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Data Science</span>
                <h3 className="text-lg font-bold mt-2 mb-3">Understanding Toxic Links</h3>
                <p className="text-slate-500 text-sm mb-4">A deep dive into identifying links that might be hurting your rankings.</p>
                <Link to="#" className="text-primary text-sm font-bold flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="h-48 bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-500/40 flex items-center justify-center">
                <Network className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Product</span>
                <h3 className="text-lg font-bold mt-2 mb-3">New Marketplace Filters</h3>
                <p className="text-slate-500 text-sm mb-4">Filtering high-DA sites just got 10x faster with our latest UI update.</p>
                <Link to="#" className="text-primary text-sm font-bold flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
