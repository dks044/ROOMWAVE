import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import LikeRoomsInfiniteList from './components/LikeRoomsInfiniteList'

const UserLikes = async () => {
  const session = await getServerSession(authOptions)

  return (
    <>
      <h1 className="mx-auto max-w-7xl text-lg font-semibold sm:text-2xl">
        찜한 공간 리스트
      </h1>
      <div className="mx-auto mt-2 max-w-7xl text-gray-500">
        찜한 공간 리스트입니다.
      </div>
      <LikeRoomsInfiniteList userId={String(session?.user?.id)} />
    </>
  )
}

export default UserLikes
