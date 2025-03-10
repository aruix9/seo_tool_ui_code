import axios from 'axios'

export async function getOrders() {
  const response = await axios.get('/api/orders/')
  return response.data.orders
}
