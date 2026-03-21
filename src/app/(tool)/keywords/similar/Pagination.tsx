const Pagination = ({total}) => {
    return (
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Showing {total} keywords</span>
            {/* <div className="flex gap-2">
                <button
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50">
                    <ChevronLeft />
                </button>
                <button
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50">
                    <ChevronRight />
                </button>
            </div> */}
        </div>
    )
}

export default Pagination
