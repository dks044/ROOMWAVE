'use client'

/* eslint-disable @next/next/no-img-element */
import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import React from 'react'
import useUserCommentsScroll from '../hooks/use-User-Comments-Scroll'
import { CommentType } from '@/types'
import Loader from '@/components/Loader'
import SkeletonComments from './SkeletonComments '

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { BiChevronRight } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const CommentsInfiniteList = ({ userId }: { userId: string }) => {
  const router = useRouter()

  const {
    comments,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useUserCommentsScroll(userId)

  const { ref, isPageEnd, pageRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  })

  return (
    <>
      <section className="mx-auto mt-12 grid max-w-7xl gap-12 sm:grid-cols-2">
        {isLoading || isFetching ? (
          <SkeletonComments count={6} />
        ) : (
          comments?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page.data.map((comment: CommentType) => (
                <div key={comment.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={comment.user?.image || '/images/avater.png'}
                      alt="profile img"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold">
                        {comment.user?.name ?? '-'}
                      </h1>
                      <div className="text-xs text-gray-500">
                        {dayjs(comment?.createdAt).format(
                          'YYYY-MM-DD HH:MM:ss',
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="max-w-lg text-gray-600">{comment.body}</div>
                  <button
                    type="button"
                    onClick={() => router.push(`/rooms/${comment.roomId}`)}
                    className="flex items-center justify-start gap-1 font-semibold underline transition-all hover:text-gray-500"
                  >
                    공간 보기 <BiChevronRight className="text-xl" />
                  </button>
                </div>
              ))}
            </React.Fragment>
          ))
        )}
      </section>

      {isFetchingNextPage && (
        <div className="flex w-full justify-center">
          <Loader />
        </div>
      )}
      <div className="mb-10 h-10 w-full touch-none" ref={ref} />
    </>
  )
}

export default CommentsInfiniteList
