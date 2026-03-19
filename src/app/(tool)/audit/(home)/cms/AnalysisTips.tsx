import { Lightbulb } from 'lucide-react'

const AnalysisTips = () => {
    return (
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20 mt-6">
            <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="text-primary w-5 h-5" />
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Analysis Quick Tips</p>
            </div>
            <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-slate-600">
                    <span className="text-primary font-bold">•</span>
                    <span>Add at least <span className="text-slate-900 font-semibold">3 competitors</span> for a more accurate gap analysis.</span>
                </li>
                <li className="flex gap-2 text-sm text-slate-600">
                    <span className="text-primary font-bold">•</span>
                    <span>Verify your domain to unlock <span className="text-slate-900 font-semibold">deep crawl insights</span>.</span>
                </li>
            </ul>
        </div>
    )
}

export default AnalysisTips
