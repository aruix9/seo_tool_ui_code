import { ArrowUpDown, ChevronDown } from 'lucide-react'
import React from 'react'

const Filters = () => {
    return (
        <div className="mb-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200">
            <button
                className="flex items-center gap-2 rounded-xl bg-primary/5 border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                Price Range <ChevronDown className="size-4" />
            </button>
            <button
                className="flex items-center gap-2 rounded-xl bg-primary/5 border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                Competitor Match <ChevronDown className="size-4" />
            </button>
            <div className="ml-auto flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sorted
                    by:</span>
                <button className="text-sm font-bold text-primary flex items-center gap-1">Relevance <ArrowUpDown className="size-4" /></button>
            </div>
        </div>
    )
}

export default Filters
