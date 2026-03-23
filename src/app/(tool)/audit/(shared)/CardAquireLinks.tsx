import Link from "next/link";
import { ArrowRight, Rocket, ShoppingCart } from "lucide-react";

const CardAquireLinks = ({ noLinksRequired, allUrls }) => {
  return (
    <Link
      href={`/audit/opportunities?targets=${allUrls.join(",")}`}
      className="block bg-primary hover:bg-primary/95 transition-all rounded-xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden group"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="w-6 h-6 text-white" />
          <h4 className="font-black text-xl tracking-tight">Acquire Links</h4>
        </div>
        <p className="text-white/80 text-sm mb-6 leading-relaxed">
          Bridge your domain gap instantly. Access our curated marketplace of
          high-authority niche placements.
        </p>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/20 w-fit px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          {noLinksRequired} New Opportunities Today
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white font-black text-lg">Browse Catalog</span>
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 opacity-10">
        <Rocket className="w-40 h-40" />
      </div>
    </Link>
  );
};

export default CardAquireLinks;
