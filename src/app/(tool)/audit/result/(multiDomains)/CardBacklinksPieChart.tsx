import { formatNumber, sortedAuditResults } from '@/lib/utils';
import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const colors = ['#7C3AED', '#94A3B8', '#1e293b', '#cbd5e1']

const CardBacklinksPieChart = ({ mainUrl, allUrls, auditData }: { mainUrl: string; allUrls: string[] }) => {
    const [pieData, setPieData] = useState(null)
    const [totalBacklinks, setTotalBacklinks] = useState(0)
    const data = sortedAuditResults(auditData, 'backlinks')

    useEffect(() => {
        let pieData = []
        Object.entries(data).map((el, i) => {
            pieData.push({ name: el[1].target, value: el[1].backlinks, color: colors[i] })
        })
        const totalBacklinks = pieData.reduce((sum, item) => sum + item.value, 0)
        pieData = pieData.map((el) => {
            el.value = Number(((el.value / totalBacklinks) * 100).toFixed(2))
            return el
        })
        setPieData(pieData)
        setTotalBacklinks(Number(totalBacklinks))
    }, [])

    if (!pieData) return

    return (
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-lg">Backlinks Comparison</h3>
                <Info className="w-5 h-5 text-slate-400 cursor-help" title="Proportion of backlinks across all tracked domains" />
            </div>
            <div className="h-64 flex items-center justify-center relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            paddingAngle={2}
                            dataKey="value"
                            stroke="none"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-2xl font-black text-primary">{formatNumber(totalBacklinks)}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Total Links</p>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
                {Object.keys(data).map((url, i) =>
                    <div key={i} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i] }}></div>
                        <span className="text-xs font-medium text-slate-600">{`${url} (${((data[url].backlinks / totalBacklinks)*100).toFixed(2)}%)`}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CardBacklinksPieChart
