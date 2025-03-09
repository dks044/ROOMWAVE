import CategoryList from '@/components/CategoryList'
import GridLayout from '@/components/GridLayout'
import RoomItem from '@/components/RoomList'
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
async function getRooms() {
  const apiUrl =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_API_URL
      : process.env.VERCEL_URL

  const res = await fetch(`${apiUrl}/api/rooms`, {
    cache: 'force-cache',
  })
  if (!res.ok) {
    throw new Error('failed to fetch ssibal')
  }

  return res.json()
}
