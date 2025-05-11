'use client'

import cn from 'classnames'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
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
