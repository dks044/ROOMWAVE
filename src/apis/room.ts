import axiosInstance from '@/lib/axios'

/**
 * @info 모든방을 다 가져옴
 */
export const getRooms = async ({ pageParam = 1 }) => {
  const response = await axiosInstance('/rooms', {
    params: {
      limit: 12,
      page: pageParam,
    },
  })

  if (!response) throw new Error('Failed to fetch rooms')

  return response.data
}
