"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { getUserCart } from "@/lib/actions/cartActions";
import { Cart } from "../../../../types/cart";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import { toast } from "sonner";

import { Breadcrumb } from "@/components/Layout/Breadcrumb";
import { AuthorityRoadmap } from "@/app/(tool)/audit/(shared)/AuditAuthorityRoadmap";
import OrderSummary from "./OrderSummary";
import LoadingSkeleton from "@/components/shared/layout/loadingSkeleton";
import CartItems from "./CartItems";
import axios from "axios";

const CartPage = () => {
  const { data: session } = useSession();
  const user: User = session?.user;

  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<Cart | null>(null);

  const fetchCartData = async () => {
    const cartData = await getUserCart(user.id);
    setCart(cartData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) fetchCartData();
  }, [user]);

  if (isLoading && !cart) return <LoadingSkeleton />

  console.log(cart)

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    linkId: string,
  ) => {
    e.preventDefault();
    if (!e.target.files || e.target.files.length === 0) return;
    const userId = user.id;
    if (!userId || !cart?._id) {
      toast.error("Failed to upload the file.");
      return;
    }

    const formData = new FormData();
    formData.append("attachment", e.target.files[0]);
    formData.append("userId", userId);
    formData.append("linkId", linkId);

    const response = await axios.post("/api/cart/uploadAttachment", formData);
    if (response.data.success) {
      fetchCartData();
      toast.success("File uploaded successfully.");
    } else {
      toast.error("Failed to upload the file.");
    }
  };

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Cart" }
      ]} />
      <main>
        <section className="max-w-[1440px] mx-auto px-6 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 flex items-center">Cart ({cart?.items.length})</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <aside className="w-full lg:w-1/4 space-y-6 flex-shrink-0">
              <AuthorityRoadmap currentStep={4} />
            </aside>

            <div className="flex-1 w-full lg:w-1/2 space-y-6">
              <div className="space-y-6">
                <div className="uppercase text-sm px-6 text-slate-400 flex justify-between gap-6">
                  <div className="flex-1">Source Domain</div>
                  <div className="flex items-center gap-8">
                    <div className="text-right min-w-[120px]">Price</div>
                  </div>
                </div>
                {cart && cart.items ? <CartItems items={cart.items} />
                  : <h2 className="h2-bold text-rose-400 text-center">No cart found</h2>}
              </div>
              {/* <div className="text-right">
                <Link href="/audit/opportunities" className="text-sm font-bold text-primary hover:underline">Add more links</Link>
              </div> */}
            </div>

            <OrderSummary totalPrice={cart?.totalPrice} />
          </div>
        </section>
      </main>
    </>
  );
};

export default CartPage;
