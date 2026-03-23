import React from 'react'

const TableHead = () => {
    return (
        <thead>
            <tr
                className="bg-background-light dark:bg-slate-900 border-b border-primary/10 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider">
                <th className="px-6 py-4">Keywords</th>
                <th className="px-6 py-4">Volume</th>
                <th className="px-6 py-4">AI Description</th>
                <th className="px-6 py-4 text-center">Links</th>
                <th className="px-6 py-4">Link Type</th>
                <th className="px-6 py-4 text-right">Snippet Length</th>
                <th className="px-6 py-4 text-center">Action</th>
            </tr>
        </thead>
    )
}

export default TableHead
