export interface CartItem {
  linkId: string;
  linkUrl: string;
  attachmentId?: string;
  attachmentUrl?: string;
  website: string;
  url: string;
  keywords: string;
  quantity: number;
  price: number;
}

export interface Cart {
  _id: string;
  items: CartItem[];
  totalPrice: number;
}
