import { BLUR_DATA_URL } from '@/constants'
import { RoomType } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function RoomItem({ room }: { room: RoomType }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={room?.images?.[0]}
        alt={room.title}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="h-auto w-full rounded-md object-cover"
      />
      <div className="mt-2 text-sm font-semibold">{room.title}</div>
      <span className="mt-1 rounded-full bg-black px-2 py-1 text-xs text-white">
        {room.category}
      </span>
      <div className="mt-1 text-sm text-gray-400">{room.address}</div>
      <div className="mt-1 text-sm">
        {room?.price?.toLocaleString()}원{' '}
        <span className="text-gray-500"> /시간</span>
      </div>
    </div>
  )
}
