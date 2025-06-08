import LottieAnimation from '@/components/LottieAnimation'
import { WAVE_LOADING_ANIMATION } from '@/constants/lottie'
import React from 'react'

const Loading = () => {
  return (
    <main className="mt-20 flex min-h-[80vh] justify-center p-10">
      <LottieAnimation
        className="mt-20 h-52 w-52"
        lottieAnimationRoute={WAVE_LOADING_ANIMATION}
      />
    </main>
  )
}

export default Loading
