import React from 'react'
import LottieAnimation from './LottieAnimation'
import { ERROR_ANIMATION } from '@/constants/lottie'

/**@info React Query중 또는 예외상황에  에러가 발생했을떄, 표시할 UI */
interface IsError {
  text?: string
}
const IsError = ({ text = '예상치 못한 에러가 발생했습니다' }: IsError) => {
  return (
    <main className="mt-20 flex h-full min-h-[80vh] w-full items-center justify-center p-10 px-10 py-20">
      <article className="w-full flex-row items-center justify-center">
        <LottieAnimation
          className="mx-auto h-48 w-48"
          lottieAnimationRoute={ERROR_ANIMATION}
        />
        <div className="text-md animate-bounce text-center sm:text-2xl">
          예상치 못한 에러가 발생했습니다
        </div>
        <div className="px-16 text-center text-xs text-gray-400">{text}</div>
      </article>
    </main>
  )
}

export default IsError
