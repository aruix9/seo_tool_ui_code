import { Link } from "react-router-dom"

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <section className="max-w-[1440px] pt-8 px-6 mx-auto">
      <div className="mb-8">
        <nav className="flex items-center gap-2 mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link className="hover:text-primary transition-colors" to={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-600">{item.label}</span>
              )}
              {index < items.length - 1 && <span className="text-slate-300">/</span>}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
