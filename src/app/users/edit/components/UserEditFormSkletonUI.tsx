import React from 'react'

const UserEditFormSkletonUI = () => {
  return (
    <div className="mx-auto max-w-3xl animate-pulse space-y-12 px-4 sm:px-0">
      <div className="border-b border-gray-200 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* 이름 */}
          <div className="sm:col-span-3">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="mt-2 h-10 w-full rounded-md bg-gray-100" />
          </div>

          {/* 전화번호 */}
          <div className="sm:col-span-3">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="mt-2 h-10 w-full rounded-md bg-gray-100" />
          </div>

          {/* 이메일 */}
          <div className="sm:col-span-4">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="mt-2 h-10 w-full rounded-md bg-gray-100" />
          </div>

          {/* 주소 */}
          <div className="col-span-full">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="mt-2 h-10 w-full rounded-md bg-gray-100" />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-x-6">
        <div className="h-10 w-24 rounded-md bg-gray-300" />
        <div className="h-10 w-36 rounded-md bg-gray-300" />
      </div>
    </div>
  )
}

export default UserEditFormSkletonUI
