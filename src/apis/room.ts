/**
 * @info 모든방을 다 가져옴
 */
export const getRooms = async () => {
  const data = await fetch('/api/rooms')

  return data.json()
}
