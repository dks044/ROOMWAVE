import { API_URL } from '@/constants'
import axiosInstance from '@/lib/axios'
import { RoomType } from '@/types'
import axios from 'axios'

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

export const getLikesRoomsForScroll = async ({ pageParam = 1 }) => {
  const response = await axiosInstance('/likes', {
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

/**
 * @info id를 매개로 room 데이터 요청 (CSR 적용) => 바로 피드백
 */

export const fetchRoomByID = async (id: string) => {
  try {
    const { data } = await axiosInstance(`${API_URL}/rooms?id=${id}`)
    return data as RoomType
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('❌ 서버 에러:', error.message)
    } else {
      console.error('❌ 알 수 없는 에러:', error)
    }
  }
}
