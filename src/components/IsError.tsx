import React from 'react'
import LottieAnimation from './LottieAnimation'
import { ERROR_ANIMATION } from '@/constants/lottie'

/**@info React Query중 또는 예외상황에  에러가 발생했을떄, 표시할 UI */
interface IsError {
  text?: string
}
const IsError = ({ text = '예상치 못한 에러가 발생했습니다' }: IsError) => {
  return (
    <main className="mt-20 p-10 min-h-[80vh] flex w-full h-full items-center justify-center px-10 py-20">
      <article className="flex-row justify-center items-center w-full">
        <LottieAnimation
          className="w-48 h-48 mx-auto"
          lottieAnimationRoute={ERROR_ANIMATION}
        />
        <div className="text-md sm:text-2xl animate-bounce text-center">
          예상치 못한 에러가 발생했습니다
        </div>
        <div className="text-xs text-center text-gray-400 px-16">{text}</div>
      </article>
    </main>
  )
}

export default IsError
