import { Link, useLocation } from "react-router-dom";
import { Activity, ShoppingCart, Bell } from "lucide-react";

export function Header() {
  const location = useLocation();
  const isAuthPage = ['/login', '/register', '/forgot-password'].includes(location.pathname);
  const isPublicHome = location.pathname === '/';
  const isLoggedIn = !isAuthPage && !isPublicHome;

  return (
    <nav className="glass-nav sticky top-0 z-50 border-b border-primary/10">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="text-primary w-8 h-8 font-bold" />
          <span className="text-2xl font-black tracking-tight text-slate-900">ButterSwipe</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/analysis" className="text-sm font-semibold hover:text-primary transition-colors">Audit</Link>
          <Link to="/keyword-analyzer" className="text-sm font-semibold hover:text-primary transition-colors">Keywords</Link>
          <Link to="/ai-analyzer" className="text-sm font-semibold hover:text-primary transition-colors">AI Analyzer</Link>
        </div>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-6">
              <Link to="/cart" className="relative text-slate-400 hover:text-primary transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] font-bold text-white">4</span>
              </Link>
              <button className="relative text-slate-400 hover:text-primary transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[8px] font-bold text-white">3</span>
              </button>
              <div className="hidden sm:flex items-center gap-4 border-l border-slate-200 pl-6">
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-900">Alex Rivera</p>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Pro Plan</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-sm">
                  AR
                </div>
              </div>
            </div>
          ) : (
            location.pathname === '/login' ? (
              <Link
                to="/register"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
              >
                Sign Up
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
              >
                Sign In
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
