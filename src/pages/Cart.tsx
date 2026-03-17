import React from 'react';
import { Link } from 'react-router-dom';
import { X, PlusCircle, CheckCircle, Lock } from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { AuthorityRoadmap } from '../components/widgets/AuthorityRoadmap';

const Cart = () => {
  return (
    <main>
      <section className="max-w-[1440px] pt-8 px-6 mx-auto">
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 flex items-center">Cart (3)</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Column 1: Left (25%) Authority Roadmap */}
          <aside className="w-full lg:w-1/4 space-y-6 flex-shrink-0">
            <AuthorityRoadmap currentStep={4} />
          </aside>

          {/* Column 2: Center (50%) Cart */}
          <div className="flex-1 w-full lg:w-1/2 space-y-6">
            <div className="space-y-6">
              {/* Cart Item 1 */}
              <div className="bg-white rounded-[12px] border border-slate-100 p-8 shadow-sm relative group hover:shadow-md transition-shadow">
                <button className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10">
                  <X className="w-4 h-4" />
                </button>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900">techcrunch.com</h4>
                    <p className="text-sm font-medium text-slate-500 mt-1">12 competitor matches</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <button className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                      <PlusCircle className="w-5 h-5" />
                      Attach Instructions
                    </button>
                    <div className="text-right min-w-[120px]">
                      <p className="text-2xl font-black text-slate-900">$1,200</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="bg-white rounded-[12px] border border-slate-100 p-8 shadow-sm relative group hover:shadow-md transition-shadow">
                <button className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10">
                  <X className="w-4 h-4" />
                </button>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900">forbes.com</h4>
                    <p className="text-sm font-medium text-slate-500 mt-1">8 competitor matches</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <button className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                      <PlusCircle className="w-5 h-5" />
                      Add Brief
                    </button>
                    <div className="text-right min-w-[120px]">
                      <p className="text-2xl font-black text-slate-900">$2,500</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Item 3 */}
              <div className="bg-white rounded-[12px] border border-slate-100 p-8 shadow-sm relative group hover:shadow-md transition-shadow">
                <button className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10">
                  <X className="w-4 h-4" />
                </button>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900">wired.com</h4>
                    <p className="text-sm font-medium text-slate-500 mt-1">5 competitor matches</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <button className="flex items-center gap-1.5 text-sm font-bold text-emerald-600 transition-colors">
                      <CheckCircle className="w-5 h-5" />
                      Brief Attached
                    </button>
                    <div className="text-right min-w-[120px]">
                      <p className="text-2xl font-black text-slate-900">$850</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Link to="/acquire-links" className="text-sm font-bold text-primary hover:underline">Add more links</Link>
            </div>
          </div>

          {/* Column 3: Right (25%) Order Summary */}
          <aside className="w-full lg:w-1/4 space-y-6 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-8">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm font-semibold text-slate-500">
                  <span>Subtotal</span>
                  <span className="text-slate-900">$4,550.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-slate-500">
                  <span>Platform Fee (5%)</span>
                  <span className="text-slate-900">$227.50</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Amount</p>
                    <p className="text-3xl font-black text-primary">$4,777.50</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl shadow-lg shadow-primary/25 transition-all text-lg mb-6">
                Complete Purchase
              </button>
              <div className="space-y-4">
                <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 uppercase font-black tracking-widest">
                  <Lock className="w-3 h-3" />
                  Secure Payment via Stripe
                </div>
                <div className="flex justify-center items-center gap-4 opacity-40 grayscale">
                  <div className="h-6 w-10 bg-slate-50 border border-slate-200 rounded flex items-center justify-center p-1">
                    <span className="text-[8px] font-black italic">VISA</span>
                  </div>
                  <div className="h-6 w-10 bg-slate-50 border border-slate-200 rounded flex items-center justify-center p-1">
                    <span className="text-[8px] font-black">MC</span>
                  </div>
                  <div className="h-6 w-10 bg-slate-50 border border-slate-200 rounded flex items-center justify-center p-1">
                    <span className="text-[8px] font-black">stripe</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Cart;
