'use client'

import CategoryList from '@/components/CategoryList'
import GridLayout from '@/components/GridLayout'
import RoomItem from '@/components/RoomList'
import { SkeletonBox } from '@/components/skeleton'
import useRooms from '@/hooks/room/useRooms'
import { RoomType } from '@/types'
import React, { Fragment } from 'react'

const Home = () => {
  const { data, isLoading, isError } = useRooms()

  if (isLoading)
    return (
      <>
        <CategoryList />
        <GridLayout>
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="z-[-10] flex flex-col space-y-2" key={index}>
              <SkeletonBox classname="w-full h-52" />
              <SkeletonBox classname="w-full h-2" />
              <SkeletonBox classname="w-[60%] h-2" />
              <SkeletonBox classname="w-[40%] h-2" />
            </div>
          ))}
        </GridLayout>
      </>
    )

  return (
    <>
      <CategoryList />
      <GridLayout>
        {data?.map((room: RoomType) => <RoomItem room={room} key={room.id} />)}
      </GridLayout>
    </>
  )
}

export default Home
