'use client'

import Lottie from 'lottie-react'
import cn from 'classnames'
/**
 * @info 로티 애니메이션 경로 받아서 틀어놓는 녀석
 */
export default function LottieAnimation({
  lottieAnimationRoute,
  className,
}: {
  lottieAnimationRoute: Object
  className?: string
}) {
  return (
    <Lottie
      className={cn(className)}
      animationData={lottieAnimationRoute}
      loop
      autoplay
    />
  )
}
