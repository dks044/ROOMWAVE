import React from 'react'

const UserInfoSkletonUI = () => {
  return (
    <main className="mx-auto mt-10 max-w-3xl animate-pulse px-4">
      <div className="flex justify-between gap-4">
        <h1 className="text-3xl font-semibold">개인정보</h1>
        <button
          type="button"
          className="rounded-sm px-4 py-1.5 text-sm font-semibold underline transition-all hover:bg-black/5"
          disabled
        >
          수정하기
        </button>
      </div>

      <div className="mb-28 mt-10 flex flex-col gap-10">
        {/* 이름 */}
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <div className="h-4 w-16 rounded bg-gray-300" />
          <div className="h-4 w-32 rounded bg-gray-100" />
        </div>

        {/* 이메일 */}
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <div className="h-4 w-16 rounded bg-gray-300" />
          <div className="h-4 w-64 rounded bg-gray-100" />
        </div>

        {/* 이미지 */}
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <div className="h-4 w-16 rounded bg-gray-300" />
          <div className="h-[50px] w-[50px] rounded-full bg-gray-200" />
        </div>

        {/* 주소 */}
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <div className="h-4 w-16 rounded bg-gray-300" />
          <div className="h-4 w-40 rounded bg-gray-100" />
        </div>

        {/* 전화번호 */}
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <div className="h-4 w-16 rounded bg-gray-300" />
          <div className="h-4 w-28 rounded bg-gray-100" />
        </div>

        {/* SNS 로그인 */}
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <div className="h-4 w-24 rounded bg-gray-300" />
          <div className="h-4 w-20 rounded bg-gray-100" />
        </div>

        {/* 로그아웃 */}
        <div className="flex flex-col gap-2 border-b border-b-gray-200 py-2.5">
          <div className="h-4 w-24 rounded bg-gray-300" />
          <div className="h-4 w-20 rounded bg-gray-100" />
        </div>
      </div>
    </main>
  )
}

export default UserInfoSkletonUI
