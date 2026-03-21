import axios from "axios";
import { toast } from "sonner";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function getUserCart(userId: string | undefined) {
  const response = await axios.post(API_BASE + "/api/v1/cart", {
    userId,
  });
  return response.data;
}

export async function addLinkToCart(
  linkId: string,
  userId: string | undefined,
) {
  console.log(linkId, userId)
  const response = await axios.post(API_BASE + "/api/v1/cart/addtocart", {
    linkId,
    userId,
  });

  if (!response.data.success) {
    toast.error("Add to cart failed", {
      description: response.data.message,
      className: "bg-red-200 text-red-900",
    });
  }
  if (response.data.success) {
    toast.success("Link added to cart", {
      description: response.data.message,
    });
  }
  return response.data;
}
