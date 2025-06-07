import React from 'react'
import cn from 'classnames'

/**
 * @info 로딩중 컴포넌트
 */
const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex justify-center gap-4', className)}>
      <div className="h-3 w-3 animate-ping rounded-full bg-gray-500" />
      <div className="h-3 w-3 animate-ping rounded-full bg-gray-500" />
      <div className="h-3 w-3 animate-ping rounded-full bg-gray-500" />
    </div>
  )
}

export default Loader
