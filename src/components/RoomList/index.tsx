import { RoomType } from '@/types'
import React from 'react'

export default function RoomItem({ room }: { room: RoomType }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={room?.images?.[0]}
        alt={room.title}
        className="rounded-md w-full h-auto object-cover"
      />
      <div className="mt-2 font-semibold text-sm">{room.title}</div>
      <span className="text-xs px-2 py-1 rounded-full bg-black text-white mt-1">
        {room.category}
      </span>
      <div className="mt-1 text-gray-400 text-sm">{room.address}</div>
      <div className="mt-1 text-sm">
        {room?.price?.toLocaleString()}원{' '}
        <span className="text-gray-500"> /시간</span>
      </div>
    </div>
  )
}
