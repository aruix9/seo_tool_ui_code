export interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name?: string
  description?: string
  image?: string
  order_id?: string
  callback_url?: string
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
  notes?: Record<string, string>
  theme?: {
    color?: string
  }
  handler?: (response: unknown) => void
}

export interface Razorpay {
  open(): void
  handler(event: string, callback: (response: unknown) => void): void
}
