import axios from 'axios'
import { toast } from 'sonner'

export async function getUserCart() {
  const response = await axios.get('/api/cart/')
  return response.data
}

export async function addLinkToCart(
  linkId: string,
  userId: string | undefined
) {
  const response = await axios.post('/api/cart/', { linkId, userId })

  if (!response.data.success) {
    toast.error('Add to cart failed', {
      description: response.data.message,
      className: 'bg-red-200 text-red-900',
    })
  }
  if (response.data.success) {
    toast.success('Link added to cart', {
      description: response.data.message,
    })
  }
  return response.data
}
