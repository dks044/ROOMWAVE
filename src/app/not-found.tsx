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
    <main className="mt-20 min-h-[80vh] p-10">
      <div className="flex h-[60vh] flex-col justify-center text-center">
        <div className="flex flex-col items-center justify-center">
          <LottieAnimation
            lottieAnimationRoute={NOT_FOUND_ANIMATION}
            className="h-48 w-64"
          />
          <p className="mt-2 text-gray-500">
            해당 경로에 맞는 페이지를 찾을 수 없습니다.
          </p>
        </div>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => router.replace('/')}
            className="rounded-xl bg-brand px-4 py-2.5 text-white transition hover:shadow-lg"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
