import { API_URL } from '@/constants'

/**
 * @info 모든방을 다 가져옴
 */
export const getRooms = async () => {
  const data = await fetch(`${API_URL}/rooms`)

  return data.json()
}
