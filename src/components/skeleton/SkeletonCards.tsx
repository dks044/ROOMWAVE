import React from 'react'
import { SkeletonBox } from './SkeletonBox'

interface SkeletonCardsProps {
  count?: number
}

const SkeletonCards = ({ count = 12 }: SkeletonCardsProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="z-[-10] flex flex-col space-y-2">
          <SkeletonBox classname="w-full h-52" />
          <SkeletonBox classname="w-full h-2" />
          <SkeletonBox classname="w-[60%] h-2" />
          <SkeletonBox classname="w-[40%] h-2" />
        </div>
      ))}
    </>
  )
}

export default SkeletonCards
