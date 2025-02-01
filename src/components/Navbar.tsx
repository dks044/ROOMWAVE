'use client'
import React, { useState } from 'react'
import { GiWaves } from 'react-icons/gi'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import useNavigation from '@/hooks/useNavigation'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { menus } = useNavigation()
  const router = useRouter()
  return (
    <nav className="h-20 border border-b-gray-200 w-full shadow-sm p-4 sm:px-10 flex justify-between items-center fixed top-0 bg-white">
      <div className="grow basis-0 hidden my-auto font-semibold text-lg sm:text-xl text-brand cursor-pointer sm:flex sm:gap-2">
        <GiWaves className="text-2xl my-auto" />
        <div className="my-auto">ROOMWAVE</div>
      </div>
      <div className="w-full h-10 sm:w-[290px] border border-gray-200 rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2">
        <div className="flex justify-center gap-1">
          <div className="my-auto font-semibold text-sm">어디든지</div>
          <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
          <div className="my-auto font-semibold text-sm">언제든</div>
          <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
          <div className="my-auto font-semibold text-sm">게스트</div>
        </div>
        <button
          type="button"
          className="bg-brand text-white rounded-full w-8 h-8 my-auto"
        >
          <AiOutlineSearch className="m-auto text-lg font-semibold" />
        </button>
      </div>
      {/*MEMO: sm보다 클떄는 보이게함 */}
      <div className="grow basis-0 hidden sm:flex gap-4 align-middle my-auto justify-end relative">
        <button
          type="button"
          className="font-semibold text-sm my-auto px-4 py-3 rounded-full hover:bg-gray-50"
        >
          당신의 공간을 등록해주세요
        </button>
        <button
          type="button"
          className="flex align-middle gap-3 rounded-full border border-gray-20 shadow-sm px-4 py-3 my-auto hover:shadow-lg"
          onClick={() => setShowMenu((val) => !val)}
        >
          <HiOutlineMenu />
          <AiOutlineUser />
        </button>
        {showMenu && (
          <div className="border border-gray-200 shadow-lg py-2 flex flex-col absolute top-12 bg-white w-60 rounded-lg">
            {menus?.map((menu) => (
              <button
                className="h-10 hover:bg-gray-50 text-sm text-gray-700 pl-3 text-left"
                type="button"
                key={menu.id}
                onClick={() => router.push(menu.url)}
              >
                {menu.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
