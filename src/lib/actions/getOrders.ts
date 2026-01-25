import axios from 'axios'

export async function getOrders() {
  const response = await axios.get('/api/orders/')
  return response.data.orders
}

export async function getOrderById(id: string) {
  const response = await axios.get(`/api/orders/${id}`)
  return response.data.order
}
