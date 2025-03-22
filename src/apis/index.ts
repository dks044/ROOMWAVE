import { API_URL } from '@/constants'

/**
 * @info 모든FAQ를 다 가져옴
 */
export const getFaqs = async () => {
  const res = await fetch(`${API_URL}/faqs`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('failed to fetch')
  }
  return res.json()
}
