'use client'
import { RoomType } from '@/types'
import React, { useState } from 'react'

import { GrShare } from 'react-icons/gr'
import { CiHeart } from 'react-icons/ci'
import { AiOutlineUnorderedList } from 'react-icons/ai'

import Image from 'next/image'
import { BLUR_DATA_URL } from '@/constants'
import ImageListModal from './ImageListModal'
import ShareButton from './ShareButton'
import LikeButton from '../LikeButton'

const HeaderSection = ({ room }: { room: RoomType }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <h1 className="px-4 text-lg font-medium md:text-3xl">{room?.title}</h1>
      <aside className="flex w-full items-center justify-between px-4">
        <div className="mt-2 text-xs underline md:text-sm">{room.address}</div>
        <div className="mt-2 flex gap-2 text-xs md:text-sm">
          <ShareButton room={room} />
          <LikeButton />
        </div>
      </aside>
      <section className="relative mt-6">
        <div className="grid h-[25rem] gap-2 overflow-hidden align-middle md:grid-cols-2 md:gap-4 md:rounded-lg">
          {room?.images?.slice(0, 2)?.map((img) => (
            <div key={img} className="relative w-full">
              <Image
                src={img}
                alt="roomImage"
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                fill
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="absolute bottom-8 right-6 flex items-center gap-2 rounded-md border bg-white px-4 py-1.5 text-sm text-black hover:shadow-lg"
        >
          <AiOutlineUnorderedList />
          <span>사진 모두 보기</span>
        </button>
      </section>
      <ImageListModal
        closeModal={() => setShowModal(false)}
        isOpen={showModal}
        room={room}
      />
    </>
  )
}

export default HeaderSection
