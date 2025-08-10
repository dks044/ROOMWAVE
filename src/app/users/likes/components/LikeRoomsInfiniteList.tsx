'use client'

import useInfiniteScroll from '@/hooks/useInfiniteScroll'
import useLikesRoomsScroll from '../hooks/use-Likes-Rooms-Scroll'
import IsError from '@/components/IsError'
import GridLayout from '@/components/GridLayout'
import SkeletonCards from '@/components/skeleton/SkeletonCards'
import React from 'react'
import RoomItem from '@/components/RoomList'
import { LikeType, RoomType } from '@/types'
import MapButton from '@/app/(home)/components/MapButton'
import Loader from '@/components/Loader'

const LikeRoomsInfiniteList = ({ userId }: { userId: string }) => {
  const {
    fetchNextPage,
    hasNextPage,
    isError,
    isFetching,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    likeRooms,
  } = useLikesRoomsScroll(userId)

  const { ref, isPageEnd, pageRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  })

  if (isError) {
    return <IsError text="서버에서 데이터를 불러오는중 오류가 발생했습니다." />
  }

  return (
    <section className="px-4">
      <GridLayout>
        {isLoading || isFetching ? (
          <SkeletonCards count={6} />
        ) : (
          likeRooms?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page?.data?.map((likeRoom: LikeType) => (
                <RoomItem room={likeRoom.room} key={likeRoom.id} />
              ))}
            </React.Fragment>
          ))
        )}
      </GridLayout>
      {isFetchingNextPage && (
        <div className="flex w-full justify-center">
          <Loader />
        </div>
      )}
      <div className="mb-10 h-40 w-full touch-none" ref={ref} />
    </section>
  )
}

export default LikeRoomsInfiniteList
