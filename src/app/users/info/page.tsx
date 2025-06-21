/* eslint-disable @next/next/no-img-element */
'use client'

import useCurrentUser from '@/hooks/user/useCurrentUser'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import UserInfoSkletonUI from './components/UserInfoSkletonUI'

const UserInfoPage = () => {
  const router = useRouter()
  const { user, isError, isSuccess, isLoading } = useCurrentUser()

  if (!user) return <UserInfoSkletonUI />

  return (
    <main className="mx-auto mt-10 max-w-3xl px-4">
      <div className="flex justify-between gap-4">
        <h1 className="text-3xl font-semibold">개인정보</h1>
        <button
          type="button"
          className="rounded-sm px-4 py-1.5 text-sm font-semibold underline transition-all hover:bg-black/5"
          onClick={() => router.push('/users/edit')}
        >
          수정하기
        </button>
      </div>

      {/* ✅ 모든 항목을 하나로 묶은 블록 */}
      <div className="mb-28 mt-10 flex flex-col gap-10">
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <h1 className="font-semibold">이름</h1>
          <div className="text-sm text-gray-500">{user?.name ?? '-'}</div>
        </div>

        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <h1 className="font-semibold">이메일</h1>
          <div className="text-sm text-gray-500">
            {user?.email ?? '이메일이 없는 사용자입니다.'}
          </div>
        </div>

        <div className="flex flex-col border-b border-b-gray-200 py-2.5">
          <h1 className="font-semibold">이미지</h1>
          <img
            src={user?.image ?? '/images/avater.png'}
            width={50}
            height={50}
            alt="user img"
            className="rounded-full shadow"
          />
        </div>

        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <h1 className="font-semibold">주소</h1>
          <div className="text-sm text-gray-500">{user?.address ?? '-'}</div>
        </div>

        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <h1 className="font-semibold">전화번호</h1>
          <div className="text-sm text-gray-500">{user?.phone ?? '-'}</div>
        </div>

        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <h1 className="font-semibold">로그인한 SNS</h1>
          <div className="text-sm text-gray-500">
            {user?.accounts?.[0].provider ?? '-'}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <h1 className="font-semibold">로그아웃</h1>
          <button
            type="button"
            className="inline-block text-left text-sm text-gray-500 underline transition-all hover:text-gray-700"
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            로그아웃하기
          </button>
        </div>
      </div>
    </main>
  )
}

export default UserInfoPage
