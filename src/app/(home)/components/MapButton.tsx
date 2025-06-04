import { useRouter } from 'next/navigation'
import React from 'react'
import { LuMap } from 'react-icons/lu'

const MapButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/map')}
      className="flex gap-2 items-center bg-black rounded-full text-white px-5 py-3.5 shadow-sm hover:shadow-lg mx-auto sticky bottom-12"
    >
      지도 표시하기
      <LuMap className="text-xs" />
    </button>
  )
}

export default MapButton
