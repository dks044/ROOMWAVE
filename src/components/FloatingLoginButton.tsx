'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'

const FloatingLoginButton = () => {
  const { status } = useSession()
  const router = useRouter()

  // 로그인된 상태면 안 보이게
  if (status === 'authenticated') return null

  return (
    <button
      onClick={() => router.push('/users/login')}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:bg-gray-800 sm:hidden"
    >
      <FaUserCircle size={24} />
    </button>
  )
}

export default FloatingLoginButton
