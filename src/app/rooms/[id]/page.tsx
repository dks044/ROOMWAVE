import { getRoomByid } from '@/apis/room'
import FeatureSection from '@/components/room_detail/FeatureSection'
import HeaderSection from '@/components/room_detail/HeaderSection'
import { PageParams, RoomType } from '@/types'

const RoomPage = async ({ params }: { params: PageParams }) => {
  const { id } = await params
  const room: RoomType = await getRoomByid(id)

  return (
    <main className="mx-auto mb-20 mt-8 max-w-6xl">
      <HeaderSection room={room} />
      <FeatureSection room={room} />
    </main>
  )
}

export default RoomPage
