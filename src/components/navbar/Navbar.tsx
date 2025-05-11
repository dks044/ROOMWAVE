'use client'

import cn from 'classnames'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import useNavigation from '@/hooks/useNavigation'
import NavbarFilter from './Navbar.Filter'
import useNav from '@/hooks/useNav'
import { formatNumber } from '@/util/util'
import useFilterModeStore from '@/store/useFilterModeStore'
import useFilterStore from '@/store/useFilterStroe'
import Logo from '../common/Logo'

export default function Navbar() {
  const { showfilter, setShowfilter } = useFilterModeStore()
  const { menus, router } = useNavigation()
  const { showMenu, setShowMenu } = useNav()
  const { detailFilter, filterValue, setDetailFilter, isJustOneDay } =
    useFilterStore()

  return (
    <nav
      className={cn(
        'h-20 z-10 border border-b-gray-20 w-full shadow-sm p-4 sm:px-10 flex justify-between items-center align-middle fixed top-0 bg-white',
        {
          '!h-44': showfilter === true,
          '!items-start': showfilter === true,
        },
      )}
    >
      <div
        className="grow basis-0 hidden font-semibold text-lg sm:text-xl text-brand cursor-pointer sm:flex sm:gap-2 "
        onClick={() => router.push('/')}
      >
        <Logo size={55} className="hidden sm:flex" />
        <div className="my-auto hover:text-pressedBrand transition">
          ROOMWAVE
        </div>
      </div>
      {showfilter === false ? (
        <div className="w-full sm:w-[280px] border py-1.5 border-gray-200 rounded-full shadow hover:shadow-lg cursor-pointer flex justify-between pl-6 pr-2 transition">
          <div
            className="flex justify-center gap-1"
            onClick={() => setShowfilter(true)}
          >
            <div className="my-auto font-semibold text-sm">어디든지</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">언제든</div>
            <RxDividerVertical className="text-gray-200 my-auto text-2xl" />
            <div className="my-auto font-semibold text-sm">게스트</div>
          </div>
          <button
            type="button"
            onClick={() => setShowfilter(false)}
            className="bg-brand text-white rounded-full w-8 h-8 my-auto"
          >
            <AiOutlineSearch className="text-lg m-auto font-semibold" />
          </button>
        </div>
      ) : (
        <div className="sm:w-[340px] cursor-pointer w-full relative">
          <div className="flex justify-center gap-7 h-14 text-center items-center">
            <button
              type="button"
              className="font-semibold underline underline-offset-8"
            >
              공간
            </button>
            <button
              type="button"
              className="text-gray-700"
              onClick={() => window.alert('준비중 입니다.')}
            >
              체험
            </button>
            <button
              type="button"
              className="text-gray-700"
              onClick={() => window.alert('준비중 입니다.')}
            >
              온라인 체험
            </button>
            <button
              type="button"
              className="underline underline-offset-8 text-gray-500 hover:text-black"
              onClick={() => setShowfilter(false)}
            >
              필터 닫기
            </button>
          </div>
          <div
            className="w-[90%] sm:max-w-3xl flex flex-col sm:flex-row border
           border-gray-200 rounded-lg sm:py-0 sm:rounded-full shadow-sm bg-white hover:shadow-lg cursor-pointer
           justify-between fixed top-20 inset-x-0 mx-auto transition"
          >
            <div className="grid grid-cols-1 sm:grid-cols-5 w-full relative pl-2">
              <button
                type="button"
                onClick={() => setDetailFilter('location')}
                className={cn(
                  'font-semibold text-xs rounded-full transition hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'location',
                  },
                )}
              >
                위치
                <div className="text-gray-500 text-xs mt-1">
                  {filterValue?.location || '위치 검색'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkIn')}
                className={cn(
                  'font-semibold text-xs rounded-full transition hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'checkIn',
                  },
                )}
              >
                체크인
                <div className="text-gray-500 text-xs mt-1">
                  {filterValue?.checkIn || '날짜 추가'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkOut')}
                className={cn(
                  'font-semibold text-xs rounded-full transition hover:bg-gray-100 py-3 px-6 text-left disabled:cursor-not-allowed',
                  {
                    'shadow bg-white': detailFilter === 'checkOut',
                  },
                )}
                disabled={isJustOneDay}
              >
                체크아웃
                <div className="text-gray-500 text-xs mt-1">
                  {isJustOneDay
                    ? '당일'
                    : filterValue?.checkOut
                      ? filterValue.checkOut
                      : '날짜 추가'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('hourlyPrice')}
                className={cn(
                  'font-semibold text-xs rounded-full transition hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'hourlyPrice',
                  },
                )}
              >
                가격
                <div className="text-gray-500 text-xs mt-1">
                  {`${formatNumber(filterValue?.hourlyPrice)}원` || '가격 검색'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('guest')}
                className={cn(
                  'font-semibold text-xs rounded-full transition hover:bg-gray-100 py-3 px-6 text-left',
                  {
                    'shadow bg-white': detailFilter === 'guest',
                  },
                )}
              >
                참석자
                <div className="text-gray-500 text-xs mt-1">
                  {`${filterValue?.guest}명` || '게스트 추가'}
                </div>
              </button>
              {detailFilter && <NavbarFilter />}
            </div>
            <button
              type="button"
              role="button"
              className="bg-brand mb-2 text-white rounded-full h-10 mx-4 sm:w-24 my-auto flex justify-center gap-1 px-3 py-2
              hover:shadow hover:bg-blue-800 transition"
              aria-label="필터, 디테일필터 초기화"
              onClick={() => {
                setShowfilter(false)
                setDetailFilter(null)
              }}
            >
              <AiOutlineSearch className="font-semibold text-xl my-auto" />
              <div className="my-auto">검색</div>
            </button>
          </div>
        </div>
      )}

      <div className="grow basis-0 hidden md:flex gap-4 align-middle justify-end relative">
        <button
          type="button"
          className="font-semibold text-sm my-auto px-4 py-3 rounded-full hover:bg-gray-50 truncate overflow-hidden "
        >
          당신의 공간을 등록해주세요
        </button>
        <button
          type="button"
          onClick={() => setShowMenu((val) => !val)}
          className="flex align-middle gap-3 rounded-full border border-gray-20 shadow-sm px-4 py-3 my-auto hover:shadow-lg"
        >
          <AiOutlineMenu />
          <AiOutlineUser />
        </button>
        {showMenu && (
          <div className="border border-gray-200 shadow-lg py-2 flex flex-col absolute top-12 bg-white w-60 rounded-lg">
            {menus?.map((menu) => (
              <button
                type="button"
                key={menu.id}
                className="h-10 hover:bg-gray-50 pl-3 text-sm text-gray-700 text-left"
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
