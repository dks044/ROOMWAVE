'use client'
import IsError from '@/components/IsError'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  return (
    <main>
      <IsError text={error.message} />
    </main>
  )
}

export default ErrorPage
