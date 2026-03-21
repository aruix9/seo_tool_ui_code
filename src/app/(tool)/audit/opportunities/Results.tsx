'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

import Aside from './Aside';
import TableHead from './TableHead';
import HeroTitle from './cms/HeroTitle';
import { ShoppingCart } from 'lucide-react';
import LoadingSkeleton from '@/components/shared/layout/loadingSkeleton';
import { formatNumber } from '@/lib/utils';
import { User } from 'next-auth';
import { addLinkToCart, getUserCart } from '@/lib/actions/cartActions';
import { useSession } from 'next-auth/react';
import { Cart } from '../../../../../types/cart';

const Results = () => {
    const { data: session } = useSession();
    const user: User = session?.user;

    const [isLoading, setIsLoading] = useState(true);
    const [comparedData, setComparedData] = useState(null);
    const [cartItems, setCartItems] = useState<string[]>([]);

    const searchParams = useSearchParams();
    const targets = searchParams.get("targets");

    const handleAddToCart = async (linkId: string) => {
        const userId = user.id;
        const response = await addLinkToCart(linkId, userId);
        const cart = response.cart;
        getCartLinkId(cart);
    };

    const getCartLinkId = (cart: Cart | null) => {
        if (cart && cart.items) {
            const links: string[] = cart.items.map((item) => item.linkUrl);
            setCartItems(links);
        }
    };

    useEffect(() => {
        const fetchComparedData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/audit/compare-refdomains?targets=${targets}`,
                {
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                },
            );
            const data = await response.json();
            const analysisDataRes = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/audit/compare-refdomains-analysis?targets=${targets}`,
                {
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                },
            );
            const analysisData = await analysisDataRes.json();
            setComparedData({
                gap: data,
                analysis: analysisData,
            });
            setIsLoading(false)
        };
        const fetchCartData = async () => {
            const userId = user?.id;
            const cartData = await getUserCart(userId);
            getCartLinkId(cartData);
        };

        fetchComparedData();
        if (user) fetchCartData();
    }, [targets, user]);

    if (isLoading && !comparedData) return <LoadingSkeleton />

    const gaps = comparedData.gap.gap
    const competitors = comparedData.gap.competitors

    return (
        <section className="mx-auto flex max-w-[1440px] px-6 gap-8">
            <div className="flex-1 min-w-0">
                <HeroTitle />
                <div className="flex flex-col lg:flex-row pb-12 gap-8 items-start">
                    <div className="flex-1 min-w-0">
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200">
                            <div className="min-w-full divide-y divide-slate-200">
                                <TableHead gaps={gaps} />
                                {gaps.map((target, i) =>
                                    <div key={i} className="grid grid-cols-12 items-center gap-4 px-8 py-6 odd:bg-slate-100/50 hover:bg-slate-50/30 transition-colors">
                                        <div className="col-span-8">
                                            <p className="truncate font-bold text-slate-900 text-base">{target._id}</p>
                                            {/* <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tech &amp; News</p> */}
                                        </div>
                                        <div className="col-span-2 text-lg font-black text-slate-900">$1,200</div>
                                        <div className="col-span-2 text-right">
                                            <button
                                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all whitespace-nowrap cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-400"
                                                disabled={cartItems.includes(target._id)}
                                                onClick={() => handleAddToCart(target._id)}
                                            >
                                                <ShoppingCart className="size-6" /> Acquire Now
                                            </button>
                                        </div>
                                        <div className="col-span-full inline-flex flex-wrap gap-2">
                                            {target.records.map((link, idx) => (
                                                <Fragment key={idx}>
                                                    <div className="flex gap-3 items-center justify-between px-3 py-1.5 bg-primary/5 rounded-lg border border-slate-200">
                                                        <span className="text-[10px] font-bold text-slate-500">{link.target}</span>
                                                        <span className="text-[10px] font-bold text-slate-900">{formatNumber(link.backlinks)} Backlink(s) • {link.domain_inlink_rank} Inline Rank</span>
                                                    </div>
                                                </Fragment>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* <Pagination /> */}
                        </div>
                    </div>

                    <Aside analyzedGap={comparedData?.analysis.comparison} competitors={competitors} />
                </div>
            </div>
        </section>
    )
}

export default Results
