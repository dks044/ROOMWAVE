import { SERVER_SIDE_API_URL } from '@/constants'
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
