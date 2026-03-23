import Link from "next/link"

const tabItems = [
    { label: "AI Overview", href: "/overview" },
    { label: "AI Keyword by Target", href: "/target-keyword" },
    { label: "AI Keyword by Brand", href: "/brand-keyword" },
]

const TabNavigations = ({ activeTab = 1 }: { activeTab: number }) => {
    return (
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="flex gap-8">
                {tabItems.map((item, i) =>
                    <Link
                        key={i}
                        href={`/ai${item.href}`}
                        className={`flex cursor-pointer items-center border-b-2 pb-4 px-1 text-sm font-bold tracking-wide ${activeTab === i + 1 ? 'border-primary text-primary' : 'transition-all border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700'}`}>
                        {item.label}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default TabNavigations
