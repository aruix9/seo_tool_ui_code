'use client'

import LoadingSkeleton from '@/components/shared/layout/loadingSkeleton';
import { useState } from 'react';
import ModalAiBrief from '../shared/ModalAiBrief';
import TableHead from '../shared/TableHead';
import { formatNumber } from '@/lib/utils';
import { Link, ListChecks } from 'lucide-react';
import { dataProp, keywordProp, Snippet } from './page';

const Results = ({ data, isLoading }: { data: dataProp | null; isLoading: boolean }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState<Snippet>()

    const handleOpenModal = (snippet: Snippet) => {
        setModalContent(snippet)
        setIsModalOpen(true)
    }

    if (isLoading) return <LoadingSkeleton />

    if (!data) return;

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium">
                    <ListChecks />
                    <span>Total Keywords: <span className="text-slate-900 dark:text-slate-100 font-bold">{formatNumber(data.total)}</span></span>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/10 overflow-hidden mt-2">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <TableHead />
                        <tbody className="divide-y divide-primary/10 text-sm">
                            {data.keywords.map((keyword: keywordProp, i: number) => <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-900 dark:text-slate-100">{keyword.keyword}</td>
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{formatNumber(keyword.volume)}</td>
                                <td className="px-6 py-4 max-w-[300px] truncate text-slate-600 dark:text-slate-400">{keyword.snippet.text}</td>
                                <td className="px-6 py-4 text-center font-medium">4</td>
                                <td className="px-6 py-4">
                                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2.5 py-1 rounded text-xs font-medium">{keyword.type}</span>
                                </td>
                                <td className="px-6 py-4 text-right text-slate-500">{keyword.snippet.text.split(' ').length} words</td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => handleOpenModal(keyword.snippet)}
                                        className="text-primary cursor-pointer hover:text-primary/80 font-bold flex items-center gap-1 mx-auto transition-colors">
                                        <Link className='size-4' /> View Summary
                                    </button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <Pagination total={formatNumber(data.total)} /> */}

            {isModalOpen && <ModalAiBrief modalContent={modalContent} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
        </>
    )
}

export default Results
