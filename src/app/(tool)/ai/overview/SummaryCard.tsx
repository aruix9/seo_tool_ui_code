import { formatNumber } from '@/lib/utils'
import { Activity, ArrowDownIcon, ArrowUpIcon, Link, TrendingUp } from 'lucide-react'
import React from 'react'

type ItemProp = {
    current: number;
    previous: number;
    change_absolute: number;
    change_percent: number;
}

type SummaryProps = {
    ai_opportunity_traffic: ItemProp;
    average_position: ItemProp;
    link_presence: ItemProp;
}

const SummaryCard = ({ summary }: { summary: SummaryProps }) => {
    const ai_traffic = summary.ai_opportunity_traffic
    const avg_position = summary.average_position
    const link_presence = summary.link_presence
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col gap-4">
                <div className="flex items-center justify-between  dark:text-slate-400">
                    <span className="text-sm text-slate-500 font-medium">AI Opportunity Traffic</span>
                    <TrendingUp className='text-slate-500 ' />
                </div>
                <div className="flex items-end gap-3">
                    <h3 className="text-5xl font-bold text-slate-900 dark:text-slate-100">{formatNumber(ai_traffic.current)}</h3>
                    {(ai_traffic.current - ai_traffic.previous) > 0 ?
                        <div>
                            <span className="bg-emerald-50 text-emerald-500 size-fit shrink font-medium flex items-center px-2 py-0.5 rounded text-xs">
                                <ArrowUpIcon className='size-5 mr-1' />
                                {formatNumber(ai_traffic.change_percent)}%
                            </span>
                            <span className='text-slate-500 text-xs'>current position</span>
                        </div> :
                        <div>
                            {(ai_traffic.current - ai_traffic.previous) !== 0 ? <span className="bg-red-50 text-red-500 size-fit shrink font-medium flex items-center px-2 py-0.5 rounded text-xs">
                                <ArrowDownIcon className='size-4 mr-1' />
                                {formatNumber(ai_traffic.change_percent)}%
                            </span> : <></>}
                            <span className='text-slate-500 text-xs'>current position</span>
                        </div>}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                    {(ai_traffic.current - ai_traffic.previous) !== 0 ? `Your previous position was ${formatNumber(ai_traffic.previous)}` : 'Your position hasn\'t changed'}
                </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col gap-4">
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                    <span className="text-sm font-medium">Average AI Position</span>
                    <Activity />
                </div>
                <div className="flex items-end gap-3">
                    <h3 className="text-5xl font-bold text-slate-900 dark:text-slate-100">2.4</h3>
                    {(avg_position.current - avg_position.previous) > 0 ?
                        <div>
                            <span className="bg-emerald-50 text-emerald-500 size-fit shrink font-medium flex items-center px-2 py-0.5 rounded text-xs">
                                <ArrowUpIcon className='size-5 mr-1' />
                                {formatNumber(avg_position.change_percent)}%
                            </span>
                            <span className='text-slate-500 text-xs'>current position</span>
                        </div> :
                        <div>
                            {(avg_position.current - avg_position.previous) !== 0 ? <span className="bg-red-50 text-red-500 size-fit shrink font-medium flex items-center px-2 py-0.5 rounded text-xs">
                                <ArrowDownIcon className='size-4 mr-1' />
                                {formatNumber(avg_position.change_percent)}%
                            </span> : <></>}
                            <span className='text-slate-500 text-xs'>current position</span>
                        </div>}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                    {(avg_position.current - avg_position.previous) !== 0 ? `Your previous AI ranking within was ${formatNumber(ai_traffic.previous)}` : 'Your position hasn\'t changed'}
                </p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-primary/10 flex flex-col gap-4">
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                    <span className="text-sm font-medium">Link Presence</span>
                    <Link />
                </div>
                <div className="flex items-end gap-3">
                    <h3 className="text-5xl font-bold text-slate-900 dark:text-slate-100">{formatNumber(link_presence.current)}</h3>
                    {(link_presence.current - link_presence.previous) > 0 ?
                        <div>
                            <span className="bg-emerald-50 text-emerald-500 size-fit shrink font-medium flex items-center px-2 py-0.5 rounded text-xs">
                                <ArrowUpIcon className='size-5 mr-1' />
                                {formatNumber(link_presence.change_percent)}%
                            </span>
                            <span className='text-slate-500 text-xs'>current position</span>
                        </div> :
                        <div>
                            {(link_presence.current - link_presence.previous) !== 0 ? <span className="bg-red-50 text-red-500 size-fit shrink font-medium flex items-center px-2 py-0.5 rounded text-xs">
                                <ArrowDownIcon className='size-4 mr-1' />
                                {formatNumber(link_presence.change_percent)}%
                            </span> : <></>}
                            <span className='text-slate-500 text-xs'>current position</span>
                        </div>}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                    {(link_presence.current - link_presence.previous) !== 0 ? `Your previous position was ${formatNumber(link_presence.previous)}` : 'Your position hasn\'t changed'}
                </p>
            </div>
        </div>
    )
}

export default SummaryCard
