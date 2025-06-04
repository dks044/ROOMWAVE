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
