'use client'
import useUserForm from '@/hooks/user/useUserForm'
import React from 'react'
import UserEditFormSkletonUI from './UserEditFormSkletonUI'
import LoadingModal from '@/components/LoadingModal'

const UserEditForm = () => {
  const {
    name,
    email,
    phone,
    address,
    user,
    onChange,
    handleSubmit,
    isLoading,
  } = useUserForm()

  if (!user) return <UserEditFormSkletonUI />

  return (
    <>
      <form>
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <input id="id" value={user.id} className="hidden" readOnly />

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* 이름 */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  이름
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-2 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              {/* 전화번호 */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900"
                >
                  전화번호
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-2 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              {/* 이메일 (읽기 전용) */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  이메일
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    readOnly
                    className="block w-full cursor-not-allowed rounded-md bg-white px-2 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              {/* 주소 */}
              <div className="col-span-full">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-gray-900"
                >
                  주소
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={onChange}
                    id="address"
                    autoComplete="street-address"
                    className="block w-full rounded-md bg-white px-2 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="shadow-xs rounded-md bg-brand px-16 py-2 text-sm font-semibold text-white hover:bg-pressedBrand focus-visible:outline-2 focus-visible:outline-indigo-600"
          >
            수정하기
          </button>
        </div>
      </form>
      <LoadingModal show={isLoading} />
    </>
  )
}

export default UserEditForm
