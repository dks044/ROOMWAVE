import { useRouter } from 'next/navigation'
import React from 'react'
import { LuMap } from 'react-icons/lu'

const MapButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/map')}
      className="sticky bottom-12 mx-auto flex items-center gap-2 rounded-full bg-black px-5 py-3.5 text-white shadow-sm hover:shadow-lg"
    >
      지도 표시하기
      <LuMap className="text-xs" />
    </button>
  )
}

export default MapButton
