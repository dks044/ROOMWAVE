import { SERVER_SIDE_API_URL } from '@/constants'

/**
 * @info 모든FAQ를 다 가져옴
 */
export const getFaqs = async () => {
  const res = await fetch(`${SERVER_SIDE_API_URL}/faqs`, {
    next: { revalidate: 600 },
  })
  if (!res.ok) {
    throw new Error('failed to fetch')
  }
  return res.json()
}
