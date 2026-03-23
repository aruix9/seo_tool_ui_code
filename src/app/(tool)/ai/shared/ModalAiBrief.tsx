import { ExternalLink, Sparkles, X } from "lucide-react"
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Snippet } from "../keyword-target/page"
import Link from "next/link";

const ModalAiBrief = ({modalContent, isModalOpen, setIsModalOpen}: {modalContent: Snippet}) => {
    return (
        <div className={`modal-overlay fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm items-center justify-center p-4 ${isModalOpen ? 'active' : ''}`}
            id="ai-modal">
            <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-primary/20">
                <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between bg-background-light dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                        <Sparkles className="text-primary" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">AI Summary</h3>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors">
                        <X />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto space-y-6">
                    <div>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{modalContent.text.replaceAll('*', "\n-")}</ReactMarkdown>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Referenced Sources ({modalContent.links.length})</h4>
                        {modalContent.links.map((link, i) => <div key={i} className="grid gap-3 mb-4">
                            <Link className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors group"
                                href={link}>
                                <ExternalLink className="text-primary" />
                                <div className="flex-1 text-wrap break-all">
                                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{link}</span>
                                </div>
                            </Link>
                        </div>)}
                    </div>
                </div>
                <div
                    className="px-6 py-4 border-t border-primary/10 bg-background-light dark:bg-slate-900 flex justify-end gap-3">
                    <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="px-6 py-2 text-slate-600 dark:text-slate-400 font-bold hover:text-primary transition-colors"
                    >Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalAiBrief
