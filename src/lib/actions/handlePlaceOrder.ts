import { CheckoutSchema } from '@/schemas/zodCheckoutSchema'
import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { toast } from 'sonner'
import { z } from 'zod'

export const handlePlaceOrder = async (
  values: z.infer<typeof CheckoutSchema>,
  router: AppRouterInstance
) => {
  const response = await axios.post('/api/checkout/placeorder', values)

  toast.success('Order placed successfully', {
    description: response.data.message,
  })

  router.replace('/order-confirmed')
}
