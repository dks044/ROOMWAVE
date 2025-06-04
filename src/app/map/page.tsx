'use client'
import Map from '@/components/map'
import SelectedRoom from '@/components/map/SelectedRoom'
import { RoomType } from '@/types'
import React, { useState } from 'react'

const MapPage = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null)
  return (
    <>
      <Map setSelectedRoom={setSelectedRoom} />
      <SelectedRoom
        setSelectedRoom={setSelectedRoom}
        selectedRoom={selectedRoom}
      />
    </>
  )
}

export default MapPage
