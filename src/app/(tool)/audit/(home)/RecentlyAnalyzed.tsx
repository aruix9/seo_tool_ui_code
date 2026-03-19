import React from 'react'

const RecentlyAnalyzed = () => {
    return (
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
    )
}

export default RecentlyAnalyzed
