import React, { ReactNode } from 'react'

const GridLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 sm:px-4 md:px-8 lg:px-16">
      {children}
    </div>
  )
}

export default GridLayout
