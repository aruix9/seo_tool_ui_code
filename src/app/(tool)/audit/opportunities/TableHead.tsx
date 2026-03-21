import React from 'react'

const TableHead = ({gaps}) => {
    return (
        <div className="grid grid-cols-12 gap-4 bg-slate-100/50 border-b border-slate-200 px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-400">
            <div className="col-span-4">Source Domain ({gaps.length} Opportunities)</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2 text-right">Action</div>
        </div>
    )
}

export default TableHead
