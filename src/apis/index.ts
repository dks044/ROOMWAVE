import { SERVER_SIDE_API_URL } from '@/constants'
import axiosInstance from '@/lib/axios'
import { CommentApiType, RoomType, UserType } from '@/types'
/**
 * @info 모든FAQ를 다 가져옴
 */
export const getFaqs = async () => {
  const res = await fetch(`${SERVER_SIDE_API_URL}/faqs`, {
    cache: 'force-cache',
  })

  //빌드 테스트
  // const res = await fetch(`http://localhost:3000/api/faqs`, {
  //   cache: 'force-cache',
  // })

  if (!res.ok) {
    throw new Error('failed to fetch')
  }
  return res.json()
}

export const getUser = async (): Promise<UserType | undefined> => {
  try {
    const response = await axiosInstance.get<UserType>('/users')
    return response.data
  } catch (error) {
    console.error('❌ getUser error:', error)
  }
}

export const updateUser = async (
  data: Partial<UserType>,
): Promise<UserType | undefined> => {
  try {
    const response = await axiosInstance.put<UserType>('/users', data)
    return response.data
  } catch (error) {
    console.error('❌ updateUser error:', error)
  }
}

export const fetchComment = async (roomId: string | number) => {
  const { data } = await axiosInstance.get(`/comments?roomId=${roomId}&limit=6`)
  return data as CommentApiType
}

export const fetchCommentInfiniteScroll = async (
  roomId: string | number,
  pageParam = 1,
) => {
  const { data } = await axiosInstance.get(
    `/comments?roomId=${roomId}&page=${pageParam}&limit=12`,
  )

  return data as CommentApiType
}
