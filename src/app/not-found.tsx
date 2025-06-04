'use client'

import dynamic from 'next/dynamic'
import { NOT_FOUND_ANIMATION } from '@/constants/lottie'
import { useRouter } from 'next/navigation'
import React from 'react'

const LottieAnimation = dynamic(() => import('@/components/LottieAnimation'), {
  ssr: false,
})

const NotFound = () => {
  const router = useRouter()
  return (
    <main className="mt-20 p-10 min-h-[80vh]">
      <div className="text-center h-[60vh] flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
          <LottieAnimation
            lottieAnimationRoute={NOT_FOUND_ANIMATION}
            className="w-64 h-48"
          />
          <p className="text-gray-500 mt-2">
            해당 경로에 맞는 페이지를 찾을 수 없습니다.
          </p>
        </div>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => router.replace('/')}
            className="bg-brand text-white rounded-xl px-4 py-2.5 hover:shadow-lg transition"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
