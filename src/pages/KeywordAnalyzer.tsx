import React, { useState } from 'react';
import { 
  BarChart2, 
  MousePointerClick, 
  Image as ImageIcon, 
  Video, 
  List, 
  HelpCircle, 
  Paperclip,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { TabNavigation, Tab } from '../components/ui/TabNavigation';

const TABS: Tab[] = [
  { id: 'similar', label: 'Similar Keywords' },
  { id: 'related', label: 'Related Keywords' },
  { id: 'question', label: 'Question Keywords' },
  { id: 'long-tail', label: 'Long Tail Keywords' },
];

const KEYWORD_DATA = [
  {
    keyword: 'marketing strategy tools',
    volume: '22.5k',
    difficulty: { level: 'Medium', score: 45 },
    cpc: '$4.12',
    intents: ['Informational', 'Commercial'],
    serpFeatures: ['ads', 'images', 'video'],
    competition: 78,
  },
  {
    keyword: 'best seo keyword research',
    volume: '18.2k',
    difficulty: { level: 'Hard', score: 82 },
    cpc: '$12.50',
    intents: ['Commercial'],
    serpFeatures: ['ads', 'list'],
    competition: 92,
  },
  {
    keyword: 'free keyword tool for bloggers',
    volume: '5.4k',
    difficulty: { level: 'Easy', score: 12 },
    cpc: '$0.85',
    intents: ['Informational'],
    serpFeatures: ['help'],
    competition: 25,
  },
  {
    keyword: 'content gap analysis template',
    volume: '3.1k',
    difficulty: { level: 'Medium', score: 34 },
    cpc: '$2.45',
    intents: ['Informational'],
    serpFeatures: ['attachment'],
    competition: 45,
  },
];

const KeywordAnalyzer = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const renderDifficulty = (difficulty: { level: string; score: number }) => {
    let colorClass = '';
    switch (difficulty.level) {
      case 'Easy':
        colorClass = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
        break;
      case 'Medium':
        colorClass = 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
        break;
      case 'Hard':
        colorClass = 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
        break;
      default:
        colorClass = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
    }

    return (
      <span className={`${colorClass} px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tight`}>
        {difficulty.level} ({difficulty.score})
      </span>
    );
  };

  const renderIntent = (intent: string) => {
    let colorClass = '';
    switch (intent) {
      case 'Informational':
        colorClass = 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400';
        break;
      case 'Commercial':
        colorClass = 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400';
        break;
      default:
        colorClass = 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400';
    }

    return (
      <span key={intent} className={`${colorClass} px-2 py-0.5 rounded text-[10px] font-medium`}>
        {intent}
      </span>
    );
  };

  const renderSerpFeature = (feature: string, index: number) => {
    switch (feature) {
      case 'ads':
        return <MousePointerClick key={index} className="w-[18px] h-[18px]" />;
      case 'images':
        return <ImageIcon key={index} className="w-[18px] h-[18px]" />;
      case 'video':
        return <Video key={index} className="w-[18px] h-[18px]" />;
      case 'list':
        return <List key={index} className="w-[18px] h-[18px]" />;
      case 'help':
        return <HelpCircle key={index} className="w-[18px] h-[18px]" />;
      case 'attachment':
        return <Paperclip key={index} className="w-[18px] h-[18px]" />;
      default:
        return null;
    }
  };

  return (
    <main className="w-full">
      <section className="max-w-[1440px] pt-8 px-6 mx-auto">
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Keywords Analyzer' }
            ]} 
          />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 pb-8 w-full">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight mb-2">
            Keywords Analyzer
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Analyze keyword metrics and discover new high-growth opportunities for your content.
          </p>
        </div>

        {/* Tab Navigation */}
        <TabNavigation 
          tabs={TABS} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {/* Main Search Form */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Keyword
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

        {/* Results Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Keyword
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                    Volume
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Difficulty
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                    CPC
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Intents
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    SERP Features
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Competition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {KEYWORD_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                      {row.keyword}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-slate-600 dark:text-slate-300">
                      {row.volume}
                    </td>
                    <td className="px-6 py-4">
                      {renderDifficulty(row.difficulty)}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-slate-600 dark:text-slate-300">
                      {row.cpc}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        {row.intents.map(renderIntent)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      <div className="flex gap-2">
                        {row.serpFeatures.map((feature, fIndex) => renderSerpFeature(feature, fIndex))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 max-w-[100px]">
                        <div 
                          className="bg-primary h-1.5 rounded-full" 
                          style={{ width: `${row.competition}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination-like Footer */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Showing 1 to 4 of 124 keywords</span>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-[18px] h-[18px]" />
              </button>
              <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KeywordAnalyzer;
