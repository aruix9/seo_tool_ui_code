"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Breadcrumbs from "@/components/shared/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import { addLinkToCart, getUserCart } from "@/lib/actions/cartActions";
import { Cart } from "../../../../../../types/cart";

const LinkOpportunity = () => {
  const { data: session } = useSession();
  const user: User = session?.user;
  const searchParams = useSearchParams();
  const [comparedData, setComparedData] = useState();
  const targets = searchParams.get("targets");
  const targetsArray = targets?.split(",");

  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchCartData = async () => {
      const userId = user?.id;
      const cartData = await getUserCart(userId);
      getCartLinkId(cartData);
    };
    if (user) fetchCartData();
  }, [user]);

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
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      const analysisDataRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/v1/audit/compare-refdomains-analysis?targets=${targets}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const analysisData = await analysisDataRes.json();
      setComparedData({
        gap: data,
        analysis: analysisData,
      });
    };

    fetchComparedData();
  }, []);

  if (!comparedData && !targetsArray) {
    return;
  }

  return (
    <div className="max-w-[1440px] w-full px-6 mx-auto grow flex flex-col">
      <h1 className="my-8 text-xl">
        <span className="font-bold">{comparedData?.analysis.primary}</span>{" "}
        Oppoturnity Score
      </h1>
      <div className="flex gap-6">
        {comparedData?.analysis?.comparison?.map(
          (target, i) =>
            i > 0 && (
              <Card key={i} className="text-center gap-0 grow">
                <CardHeader className="items-center">
                  <CardTitle className="flex gap-8">
                    {target.competitor}
                  </CardTitle>
                  <CardDescription>
                    Competitive Opportunity Score
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-3xl font-bold py-2">
                  {target.missingRefdomains} %
                </CardContent>
              </Card>
            ),
        )}
      </div>

      <h2 className="mt-8 text-xl">
        <strong>{comparedData?.gap.gap.length}</strong> Link Opportunities found
      </h2>
      <div className="flex gap-6 mt-4 flex-wrap">
        {comparedData?.gap.gap.map((target, i) => (
          <Card key={i} className="w-full flex-row">
            <CardHeader className="w-1/3">
              <CardTitle>{target._id}</CardTitle>
              <CardDescription>
                Available in <strong>{target.targets.join(", ")}</strong> domain
              </CardDescription>
            </CardHeader>
            <CardContent className="w-2/3">
              <div className="flex gap-6">
                {target.records.map((link, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold">{link.target}</h3>
                    <div className="text-sm">
                      <p>No. of backlinks: {link.backlinks}</p>
                      <p>Inlink Rank: {link.domain_inlink_rank}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="w-1/3 justify-end">
              <Button
                className="cursor-pointer"
                disabled={cartItems.includes(target._id)}
                onClick={() => handleAddToCart(target._id)}
              >
                Add to Card
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LinkOpportunity;
