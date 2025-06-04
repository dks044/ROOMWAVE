'use client'

import IsError from '@/components/IsError'
import React, { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error('에러 발생:', error)
  }, [error])

  return (
    <main>
      <IsError text={error.message} />
    </main>
  )
}

export default ErrorPage
