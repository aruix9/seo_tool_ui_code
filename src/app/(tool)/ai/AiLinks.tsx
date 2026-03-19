import { usePathname } from 'next/navigation';

import Link from 'next/link'

const AiLinks = () => {
  const pathname = usePathname();

  const activeKey = pathname.split("/").pop(); // keyword-target

  const links = [
    { key: "overview", label: "AI Overview" },
    { key: "keyword-target", label: "AI Keywords by Target" },
    { key: "keyword-brand", label: "AI Keywords by Brand" }
  ];

  return (
    <div className="flex gap-6 mb-8 mt-12">
        {links.map((link) => (
        <Link
            key={link.key}
            href={`/ai/${link.key}`}
            className={activeKey === link.key ? "border-b-3 border-primary text-primary font-medium" : "text-muted-foreground font-light"}
        >
            {link.label}
        </Link>
        ))}
    </div>
  )
}

export default AiLinks
