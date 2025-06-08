import { RoomType } from '@/types'
import React from 'react'
import DetailRoomMap from '../map/DetailRoomMap'

const MapSection = ({ room }: { room: RoomType }) => {
  return (
    <div className="border-b border-gray-300 px-4 py-8 leading-8 text-gray-800">
      <h1 className="mb-2 text-xl font-semibold">호스팅 지역</h1>
      <div className="mt-4">
        <DetailRoomMap room={room} />
      </div>
      <div className="mt-8 font-semibold">{room?.address}</div>
      <div className="mt-3 text-gray-600">{room?.desc}</div>
    </div>
  )
}

export default MapSection
