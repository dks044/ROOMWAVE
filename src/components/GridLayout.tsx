import React, { ReactNode } from 'react'

const GridLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-20 mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:px-4 md:grid-cols-3 md:px-8 lg:grid-cols-4 lg:px-16">
      {children}
    </div>
  )
}

export default GridLayout
