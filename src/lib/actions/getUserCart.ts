import axios from 'axios'

export async function getUserCart() {
  const response = await axios.get('/api/cart/')
  return response.data
}
