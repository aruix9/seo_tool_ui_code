import React from 'react'
import { UsersRound } from 'lucide-react'

import { AuthorityRoadmap } from '../(shared)/AuditAuthorityRoadmap'
import { sortedAuditResults } from '@/lib/utils'
import { GapSummary } from '../(shared)/GapSummary'

const Aside = ({ analyzedGap, competitors }) => {
    if (!analyzedGap) return

    const analysisGaps = sortedAuditResults(analyzedGap, 'totalRefdomains')
    const gaps = Object.values(analysisGaps)

    return (
        <aside className="w-full lg:w-80 space-y-6 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <UsersRound className="text-primary" />
                    <h3 className="font-bold text-lg">Competitor Gaps</h3>
                </div>
                <div className="space-y-4">
                    {Object.values(gaps).map((url, i) =>
                        <div key={i} className="p-4 rounded-xl border border-slate-200 bg-primary/5">
                            <div className="flex justify-between mb-2">
                                <p className="text-sm">
                                    <span className='font-bold text-slate-900'>{url.competitor}</span> <br />
                                    {i === 0 && <small className='uppercase text-slate-400'>master</small>}
                                </p>
                                <span className="text-xs font-black self-end text-primary leading-5">{url.missingPercentage}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-primary/5 border border-primary/10 rounded-full">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${url.missingPercentage}%` }}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <AuthorityRoadmap currentStep={3} />
            <GapSummary
                showLink={false}
                allUrls={competitors}
                noLinksRequired={`${gaps[gaps.length - 1]['missingRefdomains']}%`}
                competitorName={gaps[gaps.length - 1]['competitor']}
            />
        </aside>
    )
}

export default Aside
