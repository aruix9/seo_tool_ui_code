"use client"

import { formatNumber } from '@/lib/utils'
import Pagination from '../shared/Pagination'
import TableHead from '../shared/TableHead'

const Results = ({ data }) => {
    const getDifficulty = (num:number) => {
        if (Math.abs(num) <= 33.33) {
            return ["Easy", "emerald"];
        } else if (Math.abs(num) <= 66.67) {
            return ["Medium", "orange"];
        } else {
            return ["Hard", "red"];
        }
    }
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h2 className="text-slate-500"><strong className='text-slate-900'>{new Intl.NumberFormat("en-IN").format(Number(data.total))}</strong> total keywords found</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <TableHead />
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {data.keywords && data.keywords.map((keyword, i) => <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{keyword.keyword}</td>
                            <td className="px-6 py-4 text-sm text-right text-slate-600 dark:text-slate-300">{formatNumber(keyword.volume)}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`bg-${getDifficulty(keyword.difficulty)[1]}-100 text-${getDifficulty(keyword.difficulty)[1]}-700 dark:bg-${getDifficulty(keyword.difficulty)[1]}-900/30 dark:text-${getDifficulty(keyword.difficulty)[1]}-400 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tight`}>{getDifficulty(keyword.difficulty)[0]} ({keyword.difficulty})</span>
                            </td>
                            <td className="px-6 py-4 text-sm text-right text-slate-600 dark:text-slate-300">${keyword.cpc}</td>
                            <td className="px-6 py-4">
                                <div className="flex gap-1">
                                    {keyword.intents.map((el, i) => <span key={i}
                                        className="bg-slate-100 text-slate-600  px-2 py-0.5 rounded text-xs font-medium">{el}</span>)}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-400">
                                <div className="flex gap-2 text-xs text-wrap">
                                    {keyword.serp_features.join(', ').replaceAll("_", " ")}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 max-w-[100px]">
                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${keyword.competition * 100}%` }}></div>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <Pagination total={new Intl.NumberFormat("en-IN").format(Number(data.total))} />
        </div>
    )
}

export default Results
