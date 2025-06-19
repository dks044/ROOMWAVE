import { BLUR_DATA_URL, CATEGORY_COLOR_MAP, CATEGORY_DATA } from '@/constants'
import { RoomType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RoomItem({ room }: { room: RoomType }) {
  const categoryMeta = CATEGORY_DATA.find(
    (item) => item.title === room.category,
  )
  const Icon = categoryMeta?.Icon
  const badgeColor = CATEGORY_COLOR_MAP[room.category] ?? 'bg-black'

  return (
    <div>
      <Link href={`/rooms/${room.id}`}>
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

        <span
          className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-white ${badgeColor}`}
        >
          {Icon && <Icon className="h-4 w-4" />}
          {room.category}
        </span>

        <div className="mt-1 text-sm text-gray-400">{room.address}</div>
        <div className="mt-1 text-sm">
          {room?.price?.toLocaleString()}원{' '}
          <span className="text-gray-500"> /시간</span>
        </div>
      </Link>
    </div>
  )
}
