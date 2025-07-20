'use client'
/* eslint-disable @next/next/no-img-element */
import { MOCK_COMMENTS } from '@/constants/mock'
import { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import CommentListModal from './CommentListModal'

const CommentList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <h1 className="mb-2 text-xl font-semibold">후기 248개</h1>
      <div className="mt-8 grid gap-12 sm:grid-cols-2">
        {MOCK_COMMENTS?.slice(0, 6)?.map((comment) => (
          <div key={comment?.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img
                src={comment?.imageUrl || '/images/avater.png'}
                alt="profile img"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="font-semibold">{comment?.name ?? '-'}</h1>
                <div className="text-xs text-gray-500">
                  {comment?.createdAt}
                </div>
              </div>
            </div>
            <div className="max-w-md text-gray-600">{comment?.comment}</div>
            <button
              type="button"
              className="flex items-center justify-start gap-1 font-semibold underline"
              onClick={openModal}
            >
              더보기 <BiChevronRight className="text-xl" />
            </button>
          </div>
        ))}
      </div>
      <div className="mb-20 mt-8">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center gap-4 rounded-lg border border-gray-700 px-6 py-4 font-semibold transition-all hover:bg-black/5"
        >
          후기 248개 모두 보기
        </button>
      </div>
      <CommentListModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default CommentList
