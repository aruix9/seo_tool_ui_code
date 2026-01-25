import axios from 'axios'

export async function getAllLinks() {
  const response = await axios.get('/api/links/')
  return response.data
}
