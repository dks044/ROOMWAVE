import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

const useAuthHandle = () => {
  const { status } = useSession()
  const router = useRouter()

  const handleClickGoogle = () => {
    try {
      signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.log(error)
      toast.error('다시 시도해주세요.')
    }
  }

  const handleClickKakao = () => {
    try {
      signIn('kakao', { callbackUrl: '/' })
    } catch (error) {
      console.log(error)
      toast.error('다시 시도해주세요.')
    }
  }

  const handleClickNaver = () => {
    try {
      signIn('naver', { callbackUrl: '/' })
    } catch (error) {
      console.log(error)
      toast.error('다시 시도해주세요.')
    }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      toast.error('접근할 수 없습니다.')
      router.replace('/')
    }
  }, [router, status])

  return { handleClickGoogle, handleClickKakao, handleClickNaver }
}

export default useAuthHandle
