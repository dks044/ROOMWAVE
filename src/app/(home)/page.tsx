'use client'

import CategoryList from '@/components/CategoryList'
import GridLayout from '@/components/GridLayout'
import RoomItem from '@/components/RoomList'
import { SkeletonBox } from '@/components/skeleton'
import { API_URL } from '@/constants'
import useRooms from '@/hooks/room/useRooms'
import { RoomType } from '@/types'
import React from 'react'

const Home = () => {
  const { data, isLoading, isError } = useRooms()

  if (isLoading)
    return (
      <>
        <CategoryList />
        <GridLayout>
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonBox key={index} />
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
