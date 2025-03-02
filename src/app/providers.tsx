'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import useFilterModeStore from '@/store/useFilterModeStore'
import React, { useEffect, useRef } from 'react'

interface Props {
  children?: React.ReactNode
}

const NextLayout = ({ children }: Props) => {
  const { setShowfilter } = useFilterModeStore()
  const navbarRef = useRef<HTMLDivElement>(null) // Navbar를 감싸는 ref 생성

  /**
   * @info 다른곳 클릭하면 필터(showFilter) 해제
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setShowfilter(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div ref={navbarRef}>
        <Navbar />
      </div>
      <div className="mt-20 p-10 min-h-[80vh]">{children}</div>
      <Footer />
    </>
  )
}

export default NextLayout
