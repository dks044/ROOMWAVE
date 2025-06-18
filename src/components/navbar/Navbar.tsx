'use client'

import cn from 'classnames'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'
import useNavigation from '@/hooks/useNavigation'
import NavbarFilter from './Navbar.Filter'
import useNav from '@/hooks/useNav'
import { formatNumber } from '@/util/util'
import useFilterModeStore from '@/store/useFilterModeStore'
import useFilterStore from '@/store/useFilterStroe'
import { WIX_FONT } from '@/constants'
import LottieAnimation from '../LottieAnimation'
import { WAVE_ANIMATION, WAVE_GRADIENT } from '@/constants/lottie'
import { useSession } from 'next-auth/react'

export default function Navbar() {
  const { status } = useSession()
  const session = useSession()
  const { showfilter, setShowfilter } = useFilterModeStore()
  const { menus, router } = useNavigation()
  const { showMenu, setShowMenu } = useNav()
  const { detailFilter, filterValue, setDetailFilter, isJustOneDay } =
    useFilterStore()

  return (
    <nav
      className={cn(
        'border-b-gray-20 fixed top-0 z-20 flex h-20 w-full items-center justify-between border bg-white p-4 align-middle shadow-sm sm:px-10',
        {
          '!h-44': showfilter === true,
          '!items-start': showfilter === true,
        },
      )}
    >
      <div
        className="hidden grow basis-0 cursor-pointer text-lg font-semibold text-brand sm:flex sm:gap-2 sm:text-xl"
        onClick={() => router.push('/')}
      >
        {/* <Logo size={55} className="hidden rounded-lg sm:flex" /> */}
        <div
          className={cn(
            'my-auto font-semibold transition hover:text-pressedBrand',
            WIX_FONT.className,
          )}
        >
          ROOMWAVE
        </div>
      </div>
      {showfilter === false ? (
        <div
          className="group relative w-full cursor-pointer sm:w-[300px]"
          onClick={() => setShowfilter(true)}
        >
          {/* 그라디언트 테두리 */}
          <div className="group-hover:duration-2000 absolute -inset-1 rounded-full bg-gradient-to-r from-[#36d1dc] to-[#5b86e5] opacity-25 blur-sm transition duration-300 group-hover:opacity-100" />

          {/* 내용 */}
          <div className="relative flex justify-between rounded-full bg-white py-1.5 pl-3 pr-2 shadow">
            <div className="flex justify-center gap-1">
              {/* <div className="my-auto text-sm font-semibold">어디든지</div>
              <RxDividerVertical className="my-auto text-2xl text-gray-200" />
              <div className="my-auto text-sm font-semibold">언제든</div>
              <RxDividerVertical className="my-auto text-2xl text-gray-200" />
              <div className="my-auto text-sm font-semibold">게스트</div> */}
              <LottieAnimation
                lottieAnimationRoute={WAVE_ANIMATION}
                className="my-auto h-14 w-14 sm:h-12 sm:w-14"
              />
              <span className="my-auto font-semibold sm:text-sm">
                나만의 공간을 찾고 있나요?
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowfilter(false)}
              className="my-auto h-8 w-8 rounded-full bg-brand text-white"
            >
              <AiOutlineSearch className="m-auto text-lg font-semibold" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full cursor-pointer sm:w-[340px]">
          <div className="flex h-14 items-center justify-center gap-7 text-center">
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
              className="text-gray-500 underline underline-offset-8 hover:text-black"
              onClick={() => setShowfilter(false)}
            >
              필터 닫기
            </button>
          </div>
          <div className="fixed inset-x-0 top-20 mx-auto flex w-[90%] cursor-pointer flex-col justify-between rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg sm:max-w-3xl sm:flex-row sm:rounded-full sm:py-0">
            <div className="relative grid w-full grid-cols-1 pl-2 sm:grid-cols-5">
              <button
                type="button"
                onClick={() => setDetailFilter('location')}
                className={cn(
                  'rounded-full px-6 py-3 text-left text-xs font-semibold transition hover:bg-gray-100',
                  {
                    'bg-white shadow': detailFilter === 'location',
                  },
                )}
              >
                위치
                <div className="mt-1 text-xs text-gray-500">
                  {filterValue?.location || '위치 검색'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkIn')}
                className={cn(
                  'rounded-full px-6 py-3 text-left text-xs font-semibold transition hover:bg-gray-100',
                  {
                    'bg-white shadow': detailFilter === 'checkIn',
                  },
                )}
              >
                체크인
                <div className="mt-1 text-xs text-gray-500">
                  {filterValue?.checkIn || '날짜 추가'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('checkOut')}
                className={cn(
                  'rounded-full px-6 py-3 text-left text-xs font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed',
                  {
                    'bg-white shadow': detailFilter === 'checkOut',
                  },
                )}
                disabled={isJustOneDay}
              >
                체크아웃
                <div className="mt-1 text-xs text-gray-500">
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
                  'rounded-full px-6 py-3 text-left text-xs font-semibold transition hover:bg-gray-100',
                  {
                    'bg-white shadow': detailFilter === 'hourlyPrice',
                  },
                )}
              >
                가격
                <div className="mt-1 text-xs text-gray-500">
                  {`${formatNumber(filterValue?.hourlyPrice)}원` || '가격 검색'}
                </div>
              </button>
              <button
                type="button"
                onClick={() => setDetailFilter('guest')}
                className={cn(
                  'rounded-full px-6 py-3 text-left text-xs font-semibold transition hover:bg-gray-100',
                  {
                    'bg-white shadow': detailFilter === 'guest',
                  },
                )}
              >
                참석자
                <div className="mt-1 text-xs text-gray-500">
                  {`${filterValue?.guest}명` || '게스트 추가'}
                </div>
              </button>
              {detailFilter && <NavbarFilter />}
            </div>
            <button
              type="button"
              role="button"
              className="mx-4 my-auto mb-2 flex h-10 justify-center gap-1 rounded-full bg-brand px-3 py-2 text-white transition hover:bg-blue-800 hover:shadow sm:w-24"
              aria-label="필터, 디테일필터 초기화"
              onClick={() => {
                setShowfilter(false)
                setDetailFilter(null)
              }}
            >
              <AiOutlineSearch className="my-auto text-xl font-semibold" />
              <div className="my-auto">검색</div>
            </button>
          </div>
        </div>
      )}

      <div className="relative hidden grow basis-0 justify-end gap-4 align-middle md:flex">
        {/* <button
          type="button"
          className="my-auto overflow-hidden truncate rounded-full px-4 py-3 text-sm font-semibold hover:bg-gray-50"
        >
          당신의 공간을 등록해주세요
        </button> */}
        <div
          className="relative my-auto h-10 w-40 overflow-hidden truncate rounded-full transition-all hover:text-lg hover:shadow-lg"
          role="button"
        >
          <LottieAnimation
            lottieAnimationRoute={WAVE_GRADIENT}
            className="inset-0 z-0"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-white">
            Share your space
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowMenu((val) => !val)}
          className="border-gray-20 my-auto flex gap-3 rounded-full border px-4 py-3 align-middle shadow-sm hover:shadow-lg"
        >
          <AiOutlineMenu />
          {status === 'authenticated' && session?.data?.user?.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={session?.data?.user?.image}
              alt="profile image"
              className="my-auto h-4 w-4 rounded-full"
            />
          ) : (
            <AiOutlineUser />
          )}
        </button>
        {showMenu && (
          <div className="absolute top-12 flex w-60 flex-col rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
            {menus?.map((menu) => (
              <button
                type="button"
                key={menu.id}
                className="h-10 pl-3 text-left text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  if (menu.action) {
                    menu.action()
                  } else if (menu.url) {
                    router.push(menu.url)
                  }
                }}
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
