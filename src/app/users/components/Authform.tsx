'use client'
import LoadingModal from '@/components/LoadingModal'
import useAuthHandle from '@/hooks/auth/useAuthHandle'
import { useSession } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { SiNaver } from 'react-icons/si'

const Authform = () => {
  const { handleClickGoogle, handleClickKakao, handleClickNaver, session } =
    useAuthHandle()

  if (session.status === 'loading') {
    return <LoadingModal show={true} />
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        role="button"
        className="relative w-full gap-4 rounded-md border border-gray-700 py-3 text-center font-semibold transition hover:bg-black/5"
        onClick={handleClickGoogle}
      >
        <FcGoogle className="absolute left-5 text-xl" />
        <div>구글로 로그인하기</div>
      </button>
      <button
        role="button"
        className="relative w-full gap-4 rounded-md border border-gray-700 py-3 text-center font-semibold transition hover:bg-black/5"
        onClick={handleClickKakao}
      >
        <RiKakaoTalkFill className="absolute left-5 text-xl" />
        <div>카카오로 로그인하기</div>
      </button>
      <button
        role="button"
        className="relative w-full gap-4 rounded-md border border-gray-700 py-3 text-center font-semibold transition hover:bg-black/5"
        onClick={handleClickNaver}
      >
        <SiNaver className="absolute left-5 text-xl text-[#05d686]" />
        <div>네이버로 로그인하기</div>
      </button>
    </div>
  )
}

export default Authform
