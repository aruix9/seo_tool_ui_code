export interface CartItem {
  linkId: string
  website: string
  url: string
  keywords: string
  quantity: number
  price: number
}

export interface Cart {
  _id: string
  items: CartItem[]
  totalPrice: number
}
