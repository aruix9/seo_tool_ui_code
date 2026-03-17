import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  TrendingUp, 
  ArrowUp, 
  ListOrdered, 
  Link as LinkIcon, 
  ArrowDown 
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { TabNavigation } from '../components/ui/TabNavigation';
import { AI_TABS } from './AiKeywordAnalyzer';

const AiAnalyzer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname + location.search;

  const handleTabChange = (id: string) => {
    navigate(id);
  };

  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <section className="max-w-[1440px] pt-8 px-6 mx-auto">
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'AI Keywords' }
            ]} 
          />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight mb-2">
            AI Overview Analyzer
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Analyze SEO and AI overviews for domains and keywords.
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation 
          tabs={AI_TABS} 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />

        {/* Main Search Form */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Target
              </label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all"
                placeholder="e.g. digital marketing"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Source (Country)
              </label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all">
                <option>United States (EN)</option>
                <option>United Kingdom (EN)</option>
                <option>Germany (DE)</option>
                <option>France (FR)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Sort By
              </label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all">
                <option>Volume (High to Low)</option>
                <option>Difficulty (Low to High)</option>
                <option>CPC (High to Low)</option>
              </select>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
              <BarChart2 className="w-5 h-5" />
              Analyze
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col gap-2">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-sm font-medium">AI Opportunity Traffic</span>
                <TrendingUp className="w-5 h-5 text-primary/60" />
              </div>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">45.2K</h3>
                <span className="text-emerald-500 text-sm font-medium flex items-center mb-1 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded text-xs">
                  <ArrowUp className="w-3.5 h-3.5 mr-1" /> 12.5%
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Estimated monthly traffic from AI overviews</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col gap-2">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-sm font-medium">Average AI Position</span>
                <ListOrdered className="w-5 h-5 text-primary/60" />
              </div>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">2.4</h3>
                <span className="text-emerald-500 text-sm font-medium flex items-center mb-1 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded text-xs">
                  <ArrowUp className="w-3.5 h-3.5 mr-1" /> 0.3
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Average ranking within AI generated responses</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col gap-2">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-sm font-medium">Link Presence</span>
                <LinkIcon className="w-5 h-5 text-primary/60" />
              </div>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">68%</h3>
                <span className="text-rose-500 text-sm font-medium flex items-center mb-1 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded text-xs">
                  <ArrowDown className="w-3.5 h-3.5 mr-1" /> 2.1%
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Percentage of AI overviews with direct links</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Performance Over Time</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20">
                  AIO Traffic
                </button>
                <button className="px-3 py-1 text-xs font-medium bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  Avg Position
                </button>
                <button className="px-3 py-1 text-xs font-medium bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  Link Presence
                </button>
                <button className="px-3 py-1 text-xs font-medium bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  Organic Traffic
                </button>
              </div>
            </div>
            <div className="w-full h-80 rounded-lg bg-background-light dark:bg-background-dark flex flex-col justify-end p-4 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute left-4 top-4 bottom-8 flex flex-col justify-between text-xs text-slate-400 z-10">
                <span>50k</span>
                <span>40k</span>
                <span>30k</span>
                <span>20k</span>
                <span>10k</span>
                <span>0</span>
              </div>
              <div className="absolute inset-x-12 top-4 bottom-8 flex flex-col justify-between z-0">
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
              </div>
              <svg className="absolute inset-x-12 top-4 bottom-8 w-[calc(100%-3rem)] h-[calc(100%-3rem)] z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7c3bed" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="#7c3bed" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path className="opacity-80" d="M0,80 Q10,75 20,60 T40,50 T60,30 T80,20 T100,10" fill="none" stroke="#7c3bed" strokeWidth="2"></path>
                <path className="opacity-20" d="M0,80 Q10,75 20,60 T40,50 T60,30 T80,20 T100,10 L100,100 L0,100 Z" fill="url(#grad)"></path>
              </svg>
              <div className="flex justify-between items-end w-[calc(100%-3rem)] ml-12 text-xs text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700 z-10">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col">
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Traffic Dynamics</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/20">
                    AIO Traffic
                  </button>
                  <button className="px-3 py-1 text-xs font-medium bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    Organic Traffic
                  </button>
                  <button className="px-3 py-1 text-xs font-medium bg-primary/5 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    Overall Traffic
                  </button>
                </div>
              </div>
              <div className="w-full h-48 mt-auto rounded-lg bg-background-light dark:bg-background-dark flex flex-col justify-end p-4 border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                <div className="absolute left-4 top-4 bottom-6 flex flex-col justify-between text-[10px] text-slate-400 z-10">
                  <span>100k</span>
                  <span>50k</span>
                  <span>0</span>
                </div>
                <div className="absolute inset-x-12 top-4 bottom-6 flex flex-col justify-between z-0">
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-700/50"></div>
                </div>
                <svg className="absolute inset-x-12 top-4 bottom-6 w-[calc(100%-3rem)] h-[calc(100%-2.5rem)] z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path className="opacity-50" d="M0,20 Q20,15 40,30 T80,10 T100,5" fill="none" stroke="#94a3b8" strokeWidth="2"></path>
                  <path className="opacity-70" d="M0,50 Q20,45 40,60 T80,40 T100,30" fill="none" stroke="#3b82f6" strokeWidth="2"></path>
                  <path className="opacity-90" d="M0,80 Q20,75 40,90 T80,70 T100,60" fill="none" stroke="#7c3bed" strokeWidth="2"></path>
                </svg>
                <div className="flex justify-between items-end w-[calc(100%-3rem)] ml-12 text-[10px] text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700 z-10">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiAnalyzer;
