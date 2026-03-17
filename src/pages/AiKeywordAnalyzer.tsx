import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  List, 
  Eye, 
  X, 
  Sparkles, 
  Link as LinkIcon, 
  Copy 
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { TabNavigation, Tab } from '../components/ui/TabNavigation';

export const AI_TABS: Tab[] = [
  { id: '/ai-analyzer', label: 'AI Overview' },
  { id: '/ai-keyword-analyzer', label: 'AI Keywords by Target' },
  { id: '/ai-keyword-analyzer?type=brand', label: 'AI Keywords by Brand' },
];

const KEYWORD_DATA = [
  {
    keyword: 'seo strategies',
    volume: '12,500',
    description: 'A comprehensive guide on improving search rankings through technical optimization and content.',
    links: 4,
    linkType: 'Citations',
    snippetLength: '450 words',
  },
  {
    keyword: 'best content marketing tools',
    volume: '8,200',
    description: 'List of top content marketing software and platforms including CRM and automation tools.',
    links: 6,
    linkType: 'Resource',
    snippetLength: '320 words',
  },
  {
    keyword: 'link building techniques',
    volume: '5,400',
    description: 'Detailed overview of modern link building techniques like guest posting and HARO.',
    links: 2,
    linkType: 'References',
    snippetLength: '280 words',
  },
  {
    keyword: 'local seo optimization',
    volume: '9,100',
    description: 'How to optimize your business for local search including GMB and local citations.',
    links: 5,
    linkType: 'Citations',
    snippetLength: '410 words',
  },
  {
    keyword: 'ai in digital marketing',
    volume: '15,300',
    description: 'Impact of artificial intelligence on marketing strategies and future trends.',
    links: 8,
    linkType: 'Resource',
    snippetLength: '600 words',
  },
  {
    keyword: 'website audit checklist',
    volume: '6,800',
    description: 'Step-by-step checklist for a technical SEO audit including site speed and mobility.',
    links: 3,
    linkType: 'Citations',
    snippetLength: '350 words',
  },
];

const AiKeywordAnalyzer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeyword, setSelectedKeyword] = useState('');

  const activeTab = location.pathname + location.search;

  const handleTabChange = (id: string) => {
    navigate(id);
  };

  const openModal = (keyword: string) => {
    setSelectedKeyword(keyword);
    setIsModalOpen(true);
  };

  const renderLinkType = (type: string) => {
    let colorClass = '';
    switch (type) {
      case 'Citations':
        colorClass = 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
        break;
      case 'Resource':
        colorClass = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
        break;
      case 'References':
        colorClass = 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
        break;
      default:
        colorClass = 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
    }

    return (
      <span className={`${colorClass} px-2.5 py-1 rounded text-xs font-medium`}>
        {type}
      </span>
    );
  };

  return (
    <main className="w-full relative">
      {/* Breadcrumb */}
      <section className="max-w-[1440px] pt-8 px-6 mx-auto">
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'AI Overview' }
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

        {/* Total Keywords */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
            <List className="w-5 h-5" />
            <span>Total Keywords: <span className="text-slate-900 dark:text-slate-100 font-bold">1,248</span></span>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/10 overflow-hidden mt-2">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-background-light dark:bg-slate-900 border-b border-primary/10 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider">
                  <th className="px-6 py-4">Keywords</th>
                  <th className="px-6 py-4">Volume</th>
                  <th className="px-6 py-4">AI Description</th>
                  <th className="px-6 py-4 text-center">Links</th>
                  <th className="px-6 py-4">Link Type</th>
                  <th className="px-6 py-4 text-right">Snippet Length</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10 text-sm">
                {KEYWORD_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-slate-100">{row.keyword}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.volume}</td>
                    <td className="px-6 py-4 max-w-[300px] truncate text-slate-600 dark:text-slate-400" title={row.description}>
                      {row.description}
                    </td>
                    <td className="px-6 py-4 text-center font-medium">{row.links}</td>
                    <td className="px-6 py-4">
                      {renderLinkType(row.linkType)}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-500">{row.snippetLength}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => openModal(row.keyword)}
                        className="text-primary hover:text-primary/80 font-bold flex items-center gap-1 mx-auto transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View Summary
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 px-2">
          <p className="text-sm font-medium text-slate-500">
            Showing <span className="font-medium text-slate-900 dark:text-slate-100">1</span> to <span className="font-medium text-slate-900 dark:text-slate-100">10</span> of <span className="font-medium text-slate-900 dark:text-slate-100">1,248</span> keywords
          </p>
          <div className="flex gap-3">
            <button className="rounded-xl border border-slate-200 bg-primary/5 px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              Previous
            </button>
            <button className="rounded-xl border border-slate-200 bg-primary/5 px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Modal for AI Summary */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-primary/20">
            <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between bg-background-light dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Full AI Summary: {selectedKeyword}
                </h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Generated Overview</h4>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-base space-y-4">
                  <p>
                    Search Engine Optimization (SEO) strategies are fundamental to improving a website's
                    visibility on search engine results pages (SERPs). Effective approaches involve a
                    combination of technical optimization, keyword research, content creation, and authority
                    building.
                  </p>
                  <p>Key pillars include:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>On-Page SEO:</strong> Optimizing individual pages for target keywords through meta tags, headers, and high-quality content.</li>
                    <li><strong>Technical SEO:</strong> Ensuring search engines can crawl and index the site efficiently by optimizing site speed, mobile-friendliness, and site architecture.</li>
                    <li><strong>Off-Page SEO:</strong> Increasing the site's authority through high-quality backlink acquisition from reputable sources.</li>
                  </ul>
                  <p>
                    In the era of AI-driven search, focusing on topical authority and user intent is more
                    critical than ever, as search engines move towards understanding context over simple keyword
                    matching.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Referenced Sources (4)</h4>
                <div className="grid gap-3">
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                    <LinkIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">The Ultimate Guide to SEO Strategies 2024</p>
                      <p className="text-xs text-slate-500 truncate">marketing-authority.com/seo-guide</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                    <LinkIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">Technical SEO Checklist for Modern Web</p>
                      <p className="text-xs text-slate-500 truncate">dev-search-blog.io/technical-seo</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                    <LinkIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">Understanding Search Intent</p>
                      <p className="text-xs text-slate-500 truncate">content-strategy.net/intent-basics</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group">
                    <LinkIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">Advanced Link Building Tactics</p>
                      <p className="text-xs text-slate-500 truncate">seo-experts-journal.com/backlinks</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-primary/10 bg-background-light dark:bg-slate-900 flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 text-slate-600 dark:text-slate-400 font-bold hover:text-primary transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
                <Copy className="w-4 h-4" />
                Copy Text
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AiKeywordAnalyzer;
