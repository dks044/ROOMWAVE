'use client'
import FloatingLoginButton from '@/components/FloatingLoginButton'
import Footer from '@/components/Footer'
import Navbar from '@/components/navbar/Navbar'
import useFilterModeStore from '@/store/useFilterModeStore'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useEffect, useRef } from 'react'
import { ToastContainer } from 'react-toastify'

interface Props {
  children?: ReactNode
}

const queryClient = new QueryClient()

export function NextProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  )
}

const NextLayout = ({ children }: Props) => {
  const { setShowfilter } = useFilterModeStore()
  const navbarRef = useRef<HTMLDivElement>(null) // Navbar를 감싸는 ref 생성

  /**
   * @info 다른곳 클릭하면 필터(showFilter) 해제
   */
  const handleClickOutside = (event: MouseEvent) => {
    if (typeof document !== 'undefined') {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setShowfilter(false)
      }
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
      {children}
      <Footer />
      <FloatingLoginButton />
    </>
  )
}

export default NextLayout
