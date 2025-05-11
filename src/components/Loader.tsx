import React from 'react'
import cn from 'classnames'

/**
 * @info 로딩중 컴포넌트
 */
const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-4 justify-center', className)}>
      <div className="w-3 h-3 rounded-full bg-gray-500 animate-ping" />
      <div className="w-3 h-3 rounded-full bg-gray-500 animate-ping" />
      <div className="w-3 h-3 rounded-full bg-gray-500 animate-ping" />
    </div>
  )
}

export default Loader
