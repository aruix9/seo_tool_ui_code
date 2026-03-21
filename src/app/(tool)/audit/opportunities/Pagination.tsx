import React from 'react'

const Pagination = () => {
    return (
        <div className="flex items-center justify-between  bg-slate-100/50 border-t border-slate-200 px-8 py-5">
            <p className="text-sm font-bold text-slate-400">Showing <span
                className="text-slate-900">1-10</span>
                of <span className="text-slate-900">154</span> domains</p>
            <div className="flex gap-3">
                <button
                    className="rounded-xl border border-slate-200 bg-primary/5 px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">Previous</button>
                <button
                    className="rounded-xl border border-slate-200 bg-primary/5 px-5 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">Next</button>
            </div>
        </div>
    )
}

export default Pagination
