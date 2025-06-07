import { API_URL } from '@/constants'
import axiosInstance from '@/lib/axios'
import { RoomType } from '@/types'

/**
 * @info 모든방을 다 가져옴 by 무한스크롤
 */
export const getRoomsForScroll = async ({ pageParam = 1 }) => {
  const response = await axiosInstance('/rooms', {
    params: {
      limit: 12,
      page: pageParam,
    },
  })

  if (!response) throw new Error('Failed to fetch rooms')

  return response.data
}

export const getRooms = async () => {
  const response = await await axiosInstance('/rooms')
  return response.data as RoomType[]
}

/**
 * @info id를 매개로 room 데이터 요청 (ISR 적용)
 */
export const getRoomByid = async (id: string) => {
  const res = await fetch(`${API_URL}/rooms?id=${id}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  if (!res.ok) {
    throw new Error('Falied to fetch data')
  }
  return res.json()
}
