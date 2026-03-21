import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const OrderSummary = ({totalPrice}: {totalPrice: number}) => {
    return (
        <aside className="w-full lg:w-1/4 space-y-6 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-8">Order Summary</h3>
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm font-semibold text-slate-500">
                        <span>Subtotal</span>
                        <span className="text-slate-900">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-slate-500">
                        <span>Platform Fee (5%)</span>
                        <span className="text-slate-900">$10</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                        <div>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total
                                Amount</p>
                            <p className="text-3xl font-black text-primary">${totalPrice + 10}</p>
                        </div>
                    </div>
                </div>
                <Link href="/checkout" className="w-full block text-center cursor-pointer bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl shadow-lg shadow-primary/25 transition-all text-lg mb-6">
                    Complete Purchase
                </Link>
                <div className="space-y-4">
                    <div
                        className="flex items-center gap-2 justify-center text-[10px] text-slate-400 uppercase font-black tracking-widest">
                        <ShieldCheck absoluteStrokeWidth />Secure Payment via Stripe
                    </div>
                    <div className="flex justify-center items-center gap-4 opacity-40 grayscale">
                        <div
                            className="h-6 w-10 bg-slate-50 border border-slate-200 rounded flex items-center justify-center p-1">
                            <span className="text-[8px] font-black italic">VISA</span>
                        </div>
                        <div
                            className="h-6 w-10 bg-slate-50 border border-slate-200 rounded flex items-center justify-center p-1">
                            <span className="text-[8px] font-black">MC</span>
                        </div>
                        <div
                            className="h-6 w-10 bg-slate-50 border border-slate-200 rounded flex items-center justify-center p-1">
                            <span className="text-[8px] font-black">stripe</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default OrderSummary
