export async function getRooms() {
  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_API_URL
      : `https://${process.env.VERCEL_URL}`

  const res = await fetch(`${apiUrl}/api/rooms`, {
    cache: 'force-cache',
  })
  if (!res.ok) {
    throw new Error('failed to fetch ssibal')
  }

  return res.json()
}
