import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import CommentsInfiniteList from './components/CommentsInfiniteList'

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <>
      <h1 className="mx-auto max-w-7xl px-4 text-lg font-semibold sm:px-0 sm:text-2xl">
        나의 댓글 리스트
      </h1>
      <div className="mx-auto mt-2 max-w-7xl px-4 text-gray-500 sm:px-0">
        내가 쓴 댓글을 모아볼 수 있어요.
      </div>
      <CommentsInfiniteList userId={String(session?.user?.id)} />
    </>
  )
}

export default page
