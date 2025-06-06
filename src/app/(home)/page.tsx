'use client'
import React from 'react'
import CategoryList from '@/components/CategoryList'
import GridLayout from '@/components/GridLayout'
import IsError from '@/components/IsError'
import Loader from '@/components/Loader'
import RoomItem from '@/components/RoomList'
import SkeletonCards from '@/components/skeleton/SkeletonCards'
import { RoomType } from '@/types'
import useRoomsInfiniteScroll from './hooks/use-Rooms-Infinite-Scroll'
import MapButton from './components/MapButton'
import useRoomsScroll from '@/hooks/room/useRoomsScroll'
import RoomwaveSlider from './components/RoomImageSlicer'

const Home = () => {
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
      <CategoryList />
      <RoomwaveSlider />
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
      {(isFetching || hasNextPage || isFetchingNextPage) && <Loader />}
      <div className="mb-10 h-40 w-full touch-none" ref={ref} />
    </>
  )
}

export default Home
