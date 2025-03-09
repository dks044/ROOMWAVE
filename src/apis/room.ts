export async function getRooms() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`, {
    cache: 'force-cache',
  })

  if (!res.ok) {
    throw new Error('failed to fetch')
  }

  return res.json()
}
