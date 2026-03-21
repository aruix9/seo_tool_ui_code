import React from 'react'

const TabNavigations = () => {
    return (
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex gap-8">
                <button className="flex cursor-pointer items-center border-b-2 pb-4 px-1 text-sm font-bold tracking-wide border-primary text-primary">Similar Keywords</button>
                <button className="flex cursor-pointer items-center border-b-2 pb-4 px-1 text-sm font-bold tracking-wide transition-all border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700">Related Keywords</button>
                <button className="flex cursor-pointer items-center border-b-2 pb-4 px-1 text-sm font-bold tracking-wide transition-all border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700">Question Keywords</button>
                <button className="flex cursor-pointer items-center border-b-2 pb-4 px-1 text-sm font-bold tracking-wide transition-all border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700">Long Tail Keywords</button>
            </div>
        </div>
    )
}

export default TabNavigations
