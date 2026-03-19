import { formatNumber } from "@/lib/utils"

const metrics = ['backlinks', 'dofollow_backlinks', 'domain_inlink_rank', 'refdomains', 'subnets', 'ips', 'nofollow_backlinks', 'edu_backlinks', 'gov_backlinks']

const CardDomainTable = ({ data, mainUrl, allUrls }) => {
    console.log(Object.values(data))
    return (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg">Detailed Domain Comparison</h3>
                    <p className="text-sm text-slate-500">Metric-by-metric breakdown of your market standing.</p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50">
                            <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Metrics</th>
                            {Object.keys(data).map((url, i) => <th key={i} className={`px-8 py-4 text-xs font-bold uppercase tracking-wider ${url === mainUrl ? 'text-primary' : ''}`}>{url}</th>)}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {metrics.map((metric, idx) =>
                            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-8 py-4 font-semibold text-sm text-slate-700 capitalize">{metric.replaceAll("_", " ")}</td>
                                {Object.values(data).map((urlData, i) =>
                                    <td key={i} className={`px-8 py-4 font-semibold text-sm capitalize ${urlData.target === mainUrl ? 'text-primary' : 'text-slate-700'}`}>{formatNumber(urlData[metric])}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CardDomainTable
