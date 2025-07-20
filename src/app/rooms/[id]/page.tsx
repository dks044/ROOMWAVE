import { getRoomByid } from '@/apis/room'
import Comment from '@/components/Comment'
import FeatureSection from '@/components/room_detail/FeatureSection'
import HeaderSection from '@/components/room_detail/HeaderSection'
import MapSection from '@/components/room_detail/MapSection'
import { PageParams, RoomType } from '@/types'

const RoomPage = async ({ params }: { params: PageParams }) => {
  const { id } = await params
  const room: RoomType = await getRoomByid(id)

  return (
    <main className="mx-auto mb-20 mt-8 max-w-6xl">
      <HeaderSection room={room} />
      <FeatureSection room={room} />
      <Comment room={room} />
      <MapSection room={room} />
    </main>
  )
}

export default RoomPage
