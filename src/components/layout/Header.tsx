import { Link } from "react-router-dom";
import { Activity } from "lucide-react";

export function Header() {
  return (
    <nav className="glass-nav sticky top-0 z-50 border-b border-primary/10">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="text-primary w-8 h-8 font-bold" />
          <span className="text-2xl font-black tracking-tight text-slate-900">ButterSwipe</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">Audit</Link>
          <Link to="#" className="text-sm font-semibold hover:text-primary transition-colors">Keywords</Link>
          <Link to="#" className="text-sm font-semibold hover:text-primary transition-colors">AI Analyzer</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/register"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
