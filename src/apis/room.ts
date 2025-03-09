import { API_URL } from '@/constants'

export async function getRooms() {
  const res = await fetch(`${API_URL}/rooms`, {
    cache: 'force-cache',
  })

  if (!res.ok) {
    const errorMessage = await res.text()
    console.error('Fetch error:', errorMessage)
    throw new Error('failed to fetch ssibal')
  }

  return res.json()
}
