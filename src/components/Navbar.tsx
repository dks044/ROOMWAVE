'use client'
import React, { useState } from 'react'
import { GiWaves } from 'react-icons/gi'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import useNavigation from '@/hooks/useNavigation'
import cn from 'classnames'

// 필터
export type DetailFilterType =
  | 'location'
  | 'checkIn'
  | 'checkOut'
  | 'hourlyPrice'
  | 'guest'
export interface FilterProps {
  location: string //위치
  checkIn: string //체크인
  checkOut: string //체크아웃
  hourlyPrice: number //시간당 가격
  guest: number //참석자(게스트)
}

const Navbar = () => {
  const { menus, router } = useNavigation()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [detailFilter, setDetailFilter] = useState<DetailFilterType | null>(
    null,
  )
  const [filterValue, setFilterValue] = useState<FilterProps>({
    location: '',
    checkIn: '',
    checkOut: '',
    hourlyPrice: 0,
    guest: 0,
  })

  return (
    <nav
      className={cn(
        'transition-all h-20 border border-b-gray-200 w-full shadow-sm p-4 sm:px-10 flex justify-between items-center align-middle fixed top-0 bg-white',
        {
          '!h-44': showFilter === true,
          '!items-start': showFilter === true,
        },
      )}
    >
      <div className="grow basis-0 hidden font-semibold text-lg sm:text-xl text-brand cursor-pointer md:flex sm:gap-2">
        <GiWaves className="text-2xl" />
        <div className="">ROOMWAVE</div>
      </div>
      {!showFilter ? (
        <div className="w-full h-10 md:w-[290px] border border-gray-200 rounded-full shadow transition hover:shadow-lg cursor-pointer flex justify-between pl-12 pr-2 sm:pl-6 sm:pr-2">
          <div
            // STUDY: 이 속성은 해당 요소가 단순한 프레젠테이션 용도로 사용된다는 것을 나타낸다
            role="presentation"
            className="flex justify-center gap-1 cursor-pointer"
            onClick={() => setShowFilter(true)}
          >
            <div className="my-auto font-semibold text-sm">어디든지</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">언제든</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">게스트</div>
          </div>
          <button
            type="button"
            onClick={() => setShowFilter(true)}
            className="bg-brand text-white rounded-full w-8 h-8 my-auto"
          >
            <AiOutlineSearch className="m-auto text-lg font-semibold" />
          </button>
        </div>
      ) : (
        <>
          <div className="sm:w-[340px] cursor-pointer w-full relative">
            <div className="flex justify-center gap-7 h-14 text-center items-center">
              <button
                type="button"
                className="font-semibold underline underline-offset-8 sm:flex-row flex-col hover:text-gray-400 transition"
              >
                공간
              </button>
              <button
                type="button"
                className="text-gray-700 hover:text-gray-400 transition"
                onClick={() => window.alert('서비스 준비중입니다.')}
              >
                체험
              </button>
              <button
                type="button"
                className="text-gray-700 hover:text-gray-400 transition"
              >
                온라인 체험
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-black transition underline underline-offset-8"
                onClick={() => setShowFilter(false)}
              >
                필터 닫기
              </button>
            </div>
            <div className="w-[90%] h-20 sm:h-14 sm:max-w-3xl flex flex-col sm:flex-row border border-gray-200 rounded-lg py-4 sm:py-0 xs:rounded-full shadow-sm bg-white hover:shadow-lg cursor-pointer justify-between fixed top-20 inset-0 mx-auto overflow-hidden overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 w-full relative sm:pl-2">
                <button
                  type="button"
                  onClick={() => setDetailFilter('location')}
                  className={cn(
                    'text-lg rounded-lg hover:bg-gray-100 py-1 px-3 text-left relative',
                    {
                      'shadow bg-white': detailFilter === 'location',
                    },
                  )}
                >
                  위치
                  <div className="text-gray-500 text-xs">
                    {filterValue?.location || '위치 검색'}
                  </div>
                  <button
                    role="저는 버튼 옆에 검색버튼입니다."
                    type="button"
                    className="flex bg-brand text-white rounded-full h-10 mx-4 sm:w-24 my-auto md:hidden justify-center gap-1 px-3 py-2 hover:bg-subBrand transition absolute right-0 top-1"
                  >
                    <AiOutlineSearch className="font-semibold text-xl my-auto" />
                    <div className="my-auto">검색</div>
                  </button>
                </button>
                <button
                  type="button"
                  onClick={() => setDetailFilter('checkIn')}
                  className={cn(
                    'text-xl rounded-lg hover:bg-gray-100 py-1 px-3 text-left relative',
                    {
                      'shadow bg-white': detailFilter === 'checkIn',
                    },
                  )}
                >
                  체크인
                  <div className="text-gray-500 text-xs">
                    {filterValue?.checkIn || '체크인'}
                  </div>
                  <button
                    role="저는 버튼 옆에 검색버튼입니다."
                    type="button"
                    className="flex bg-brand text-white rounded-full h-10 mx-4 sm:w-24 my-auto md:hidden justify-center gap-1 px-3 py-2 hover:bg-subBrand transition absolute right-0 top-1"
                  >
                    <AiOutlineSearch className="font-semibold text-xl my-auto" />
                    <div className="my-auto">검색</div>
                  </button>
                </button>
                <button
                  type="button"
                  onClick={() => setDetailFilter('checkOut')}
                  className={cn(
                    'text-xl rounded-lg hover:bg-gray-100 py-1 px-3 text-left relative',
                    {
                      'shadow bg-white': detailFilter === 'checkOut',
                    },
                  )}
                >
                  체크아웃
                  <div className="text-gray-500 text-xs">
                    {filterValue?.checkOut || '체크아웃'}
                  </div>
                  <button
                    role="저는 버튼 옆에 검색버튼입니다."
                    type="button"
                    className="flex bg-brand text-white rounded-full h-10 mx-4 sm:w-24 my-auto md:hidden justify-center gap-1 px-3 py-2 hover:bg-subBrand transition absolute right-0 top-1"
                  >
                    <AiOutlineSearch className="font-semibold text-xl my-auto" />
                    <div className="my-auto">검색</div>
                  </button>
                </button>
                <button
                  type="button"
                  onClick={() => setDetailFilter('hourlyPrice')}
                  className={cn(
                    'text-xl rounded-lg hover:bg-gray-100 py-1 px-3 text-left relative',
                    {
                      'shadow bg-white': detailFilter === 'hourlyPrice',
                    },
                  )}
                >
                  가격
                  <div className="text-gray-500 text-xs">
                    {filterValue?.hourlyPrice || '가격'}
                  </div>
                  <button
                    role="저는 버튼 옆에 검색버튼입니다."
                    type="button"
                    className="flex bg-brand text-white rounded-full h-10 mx-4 sm:w-24 my-auto md:hidden justify-center gap-1 px-3 py-2 hover:bg-subBrand transition absolute right-0 top-1"
                  >
                    <AiOutlineSearch className="font-semibold text-xl my-auto" />
                    <div className="my-auto">검색</div>
                  </button>
                </button>
                <button
                  type="button"
                  onClick={() => setDetailFilter('guest')}
                  className={cn(
                    'text-xl rounded-lg hover:bg-gray-100 py-1 px-3 text-left relative',
                    {
                      'shadow bg-white': detailFilter === 'guest',
                    },
                  )}
                >
                  참석자
                  <div className="text-gray-500 text-xs">
                    {filterValue?.guest || '참석자'}
                  </div>
                  <button
                    role="저는 버튼 옆에 검색버튼입니다."
                    type="button"
                    className="flex bg-brand text-white rounded-full h-10 mx-4 sm:w-24 my-auto md:hidden justify-center gap-1 px-3 py-2 hover:bg-subBrand transition absolute right-0 top-1"
                  >
                    <AiOutlineSearch className="font-semibold text-xl my-auto" />
                    <div className="my-auto">검색</div>
                  </button>
                </button>
              </div>
              <button
                type="button"
                className="hidden bg-brand text-white rounded-full h-10 mx-4 sm:w-24 my-auto md:flex justify-center gap-1 px-3 py-2 hover:bg-subBrand transition"
              >
                <AiOutlineSearch className="font-semibold text-xl my-auto" />
                <div className="my-auto">검색</div>
              </button>
            </div>
          </div>
          {/* <button
            type="button"
            className="flex bg-brand text-white rounded-full h-10 mx-4 sm:w-24 my-auto sm:hidden justify-center gap-1 px-3 py-2 hover:bg-subBrand transition fixed top-24 right-6"
          >
            <AiOutlineSearch className="font-semibold text-xl my-auto" />
          </button> */}
        </>
      )}

      {/*MEMO: sm보다 클떄는 보이게함 */}
      <div className="grow basis-0 hidden md:flex gap-4 align-middle justify-end relative">
        <button
          type="button"
          className="font-semibold text-sm px-4 py-3 rounded-full hover:bg-gray-50 transition"
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
          <div className="border border-gray-200 shadow-lg py-2 flex flex-col absolute top-12 bg-white w-60 rounded-lg transition">
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
