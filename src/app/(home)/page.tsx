import { getRooms } from '@/apis/room'
import CategoryList from '@/components/CategoryList'
import GridLayout from '@/components/GridLayout'
import RoomItem from '@/components/room/RoomItem'
import { RoomType } from '@/types'
import React from 'react'

const Home = async () => {
  const data: RoomType[] = await getRooms()

  return (
    <>
      <CategoryList />
      <GridLayout>
        {data?.map((room) => <RoomItem room={room} key={room.id} />)}
      </GridLayout>
    </>
  )
}

export default Home
