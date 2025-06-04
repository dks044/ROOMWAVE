import LottieAnimation from '@/components/LottieAnimation'
import { AIRPLANE_LOADING } from '@/constants/lottie'
import React from 'react'

const Loading = () => {
  return (
    <main className="mt-20 flex w-full h-[50vh] items-center justify-center">
      <LottieAnimation
        className="w-52 h-52"
        lottieAnimationRoute={AIRPLANE_LOADING}
      />
    </main>
  )
}

export default Loading
