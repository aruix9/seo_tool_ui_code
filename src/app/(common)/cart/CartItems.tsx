import React from 'react'
import { CartItem } from '../../../../types/cart'
import { CloudUpload, X } from 'lucide-react'

const CartItems = ({ items }: {items: CartItem[]}) => {
    return (
        items.map((item, i) =>
        <div key={i} className="bg-white rounded-[12px] border border-slate-100 p-8 shadow-sm relative group hover:shadow-md transition-shadow">
            {/* <button className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-all z-10">
                <X absoluteStrokeWidth className="size-5" />
            </button> */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900">{item.linkUrl}</h4>
                    {/* <p className="text-sm font-medium text-slate-500 mt-1">12 competitor matches</p> */}
                </div>
                <div className="flex items-center gap-8">
                    {/* <button
                        className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                        <CloudUpload absoluteStrokeWidth />Attach Instructions
                    </button> */}
                    <div className="text-right min-w-[120px]">
                        <p className="text-2xl font-black text-slate-900">${item.price}</p>
                    </div>
                </div>
            </div>
        </div>)
    )
}

export default CartItems
