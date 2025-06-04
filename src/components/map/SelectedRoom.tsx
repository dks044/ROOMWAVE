'use client'

import { BLUR_DATA_URL } from '@/constants'
import { RoomType } from '@/types'
import Image from 'next/image'
import { RiCloseCircleLine } from 'react-icons/ri'

export default function SelectedRoom({
  selectedRoom,
  setSelectedRoom,
}: {
  selectedRoom: RoomType | null
  setSelectedRoom: React.Dispatch<React.SetStateAction<RoomType | null>>
}) {
  return (
    <div className="fixed inset-x-0 bottom-20 z-10 mx-auto w-full max-w-xs rounded-lg bg-white shadow md:max-w-sm">
      {selectedRoom && (
        <div className="relative flex flex-col">
          <button
            type="button"
            onClick={() => setSelectedRoom(null)}
            className="absolute right-2 top-2 rounded-full bg-black/20 text-2xl text-white"
          >
            <RiCloseCircleLine />
          </button>
          <div className="h-[200px] overflow-hidden rounded-t-lg">
            <Image
              src={selectedRoom?.images?.[0]}
              width={383}
              height={383}
              alt="room image"
              className="rounded-t-lg"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          <div className="rounded-b-lg bg-white p-4 font-semibold">
            <div className="mt-2">{selectedRoom.title}</div>
            <div className="mt-1 text-gray-400">{selectedRoom.address}</div>
            <div className="mt-1">{selectedRoom.price?.toLocaleString()}원</div>
          </div>
        </div>
      )}
    </div>
  )
}
