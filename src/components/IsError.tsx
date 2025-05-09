import React from 'react'
import LottieAnimation from './LottieAnimation'
import { ERROR_ANIMATION } from '@/constants/lottie'

/**@info React Query중 또는 예외상황에  에러가 발생했을떄, 표시할 UI */
const IsError = () => {
  return (
    <main className="flex w-full h-full items-center justify-center px-10 py-20">
      <article className="flex-row justify-center items-center w-full">
        <LottieAnimation
          className="w-48 h-48 mx-auto"
          lottieAnimationRoute={ERROR_ANIMATION}
        />
        <div className="text-md sm:text-2xl animate-bounce text-center">
          서버에서 에러가 발생했습니다.
        </div>
      </article>
    </main>
  )
}

export default IsError
