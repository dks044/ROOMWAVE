'use client'
/* eslint-disable @next/next/no-img-element */
import { MOCK_COMMENTS } from '@/constants/mock'
import { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import CommentListModal from './CommentListModal'
import { CommentApiType, CommentType, RoomType } from '@/types'
import Loader from '../Loader'

const CommentList = ({
  comments,
  isLoading,
  roomId,
}: {
  comments: CommentApiType
  isLoading: boolean
  roomId: number
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <h1 className="mb-2 text-xl font-semibold">
        후기 {comments?.totalCount}개
      </h1>
      <div className="mt-8 grid gap-12 sm:grid-cols-2">
        {isLoading ? (
          <Loader className="md:col-span-2" />
        ) : (
          comments?.data?.slice(0, 6)?.map((comment) => (
            <div key={comment?.id} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  src={comment?.user?.image || '/images/avater.png'}
                  alt="profile img"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-semibold">
                    {comment?.user?.name ?? '-'}
                  </h1>
                  <div className="text-xs text-gray-500">
                    {comment?.createdAt}
                  </div>
                </div>
              </div>
              <div className="max-w-md text-gray-600">{comment?.body}</div>
              <button
                type="button"
                className="flex items-center justify-start gap-1 font-semibold underline"
                onClick={openModal}
              >
                더보기 <BiChevronRight className="text-xl" />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="mb-20 mt-8">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center gap-4 rounded-lg border border-gray-700 px-6 py-4 font-semibold transition-all hover:bg-black/5"
        >
          후기 {comments?.totalCount}개 모두 보기
        </button>
      </div>
      {isOpen && (
        <CommentListModal
          isOpen={isOpen}
          closeModal={closeModal}
          roomId={roomId}
        />
      )}
    </>
  )
}

export default CommentList
