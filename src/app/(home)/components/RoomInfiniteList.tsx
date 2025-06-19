'use client'
import GridLayout from '@/components/GridLayout'
import SkeletonCards from '@/components/skeleton/SkeletonCards'
import React from 'react'
import MapButton from './MapButton'
import useRoomsScroll from '@/hooks/room/useRoomsScroll'
import useRoomsInfiniteScroll from '../hooks/use-Rooms-Infinite-Scroll'
import IsError from '@/components/IsError'
import { RoomType } from '@/types'
import RoomItem from '@/components/RoomList'
import Loader from '@/components/Loader'

const RoomInfiniteList = () => {
  const {
    rooms,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
  } = useRoomsScroll()

  const { ref, pageRef, isPageEnd } = useRoomsInfiniteScroll({
    hasNextPage,
    fetchNextPage,
  })

  if (isError) {
    return <IsError text="서버에서 데이터를 불러오는중 오류가 발생했습니다." />
  }

  return (
    <>
      <GridLayout>
        {isLoading || isFetching ? (
          <SkeletonCards />
        ) : (
          rooms?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page?.data?.map((room: RoomType) => (
                <RoomItem room={room} key={room.id} />
              ))}
            </React.Fragment>
          ))
        )}
      </GridLayout>
      <MapButton />
      {(isFetching || hasNextPage || isFetchingNextPage) && (
        <div className="flex w-full justify-center">
          <Loader />
        </div>
      )}
      <div className="mb-10 h-40 w-full touch-none" ref={ref} />
    </>
  )
}

export default RoomInfiniteList
