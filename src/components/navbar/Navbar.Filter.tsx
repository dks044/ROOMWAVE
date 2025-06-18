import React from 'react'
import cn from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import useNavFilter from '@/hooks/useNavFilter'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import Calendar from 'react-calendar'
import useFilterStore from '@/store/useFilterStroe'
import { FILTER_TITLE, LOCATION_CITIES } from '@/constants/filter'

/**
 * @info Navbar 필터 (ROOM 검색용도)
 */
const NavbarFilter = () => {
  const { setFilterValue, setDetailFilter, filterValue, detailFilter } =
    useFilterStore()
  const { isCheckIn } = useNavFilter()

  /**
   * @info 캘린더 상태할당 함수(onChange)
   */
  const onChange = (e: any) => {
    setFilterValue({
      ...filterValue,
      [isCheckIn ? 'checkIn' : 'checkOut']: dayjs(e).format('YYYY-MM-DD'),
    })
    setDetailFilter(isCheckIn ? 'checkIn' : 'checkOut')
  }

  return (
    <div className="absolute inset-x-0 left-0 top-[21.913rem] z-20 mx-auto flex w-full flex-col rounded-xl border border-gray-200 bg-white px-8 py-6 sm:top-[4.375rem] sm:w-[780px] sm:max-w-3xl">
      <div className="flex justify-between text-sm font-semibold">
        {/* 필터 제목 */}
        {FILTER_TITLE[detailFilter as keyof typeof FILTER_TITLE]}
      </div>
      {/* 현재 상세 디테일이 '위치' 일 경우 */}
      {detailFilter === 'location' && (
        <div className="mt-4 flex flex-wrap gap-4">
          {LOCATION_CITIES.map((value) => (
            <button
              key={value}
              type="button"
              className={cn(
                'rounded-lg border px-5 py-2.5 transition hover:bg-gray-200 focus:bg-subBrand',
                {
                  'bg-brand text-white': filterValue.location === value,
                },
              )}
              onClick={() => {
                setFilterValue({
                  ...filterValue,
                  location: value,
                })
                setDetailFilter('checkIn')
              }}
            >
              {value}
            </button>
          ))}
        </div>
      )}
      {/* 현재 상세 디테일이 '체크인' 이거나 '체크아웃' 일 경우 */}
      {(detailFilter === 'checkIn' || detailFilter === 'checkOut') && (
        <Calendar
          next2Label={null}
          prev2Label={null}
          className="mx-auto mt-8"
          onChange={onChange}
          minDate={
            detailFilter === 'checkIn'
              ? dayjs().toDate()
              : dayjs(filterValue.checkIn).add(1, 'day').toDate()
          }
          maxDate={
            detailFilter === 'checkIn'
              ? dayjs(filterValue.checkOut).add(-1, 'day').toDate()
              : undefined
          }
          defaultValue={
            isCheckIn
              ? filterValue.checkIn
              : !isCheckIn
                ? filterValue.checkOut
                : null
          }
          formatDay={(locale, date) => dayjs(date).format('DD')}
        />
      )}
      {/* 현재 상세 디테일이 가격 일 경우 */}
      {detailFilter === 'hourlyPrice' && (
        <>
          <div className="relative mt-4 flex w-full justify-between rounded-md border border-gray-200 py-2 pl-4 pr-6">
            <div className="text-sm font-semibold">
              <div>가격(시간당) 설정</div>
              <div className="text-gray-500">가격을 입력해주세요</div>
            </div>
            <input
              value={filterValue.hourlyPrice}
              className="w-3 text-right sm:w-auto"
              type="text"
              placeholder="ex) 30,000"
              onChange={(e) => {
                setFilterValue({
                  ...filterValue,
                  hourlyPrice: Number(e.target.value),
                })
              }}
            />
            <div className="absolute right-1 top-4 text-gray-500">원</div>
          </div>
        </>
      )}
      {/* 현재 상세 디테일이 게스트일 경우 */}
      {detailFilter === 'guest' && (
        <>
          <div className="mt-4 flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2">
            <div className="text-sm font-semibold">
              게스트 수 추가{' '}
              <div className="text-xs text-gray-500">
                참가 인원을 입력해주세요
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                disabled={filterValue?.guest <= 0}
                className="h-8 w-8 rounded-full transition hover:border-black disabled:border-gray-200"
                onClick={() => {
                  setFilterValue({
                    ...filterValue,
                    guest: filterValue.guest - 1,
                  })
                }}
              >
                <AiOutlineMinusCircle
                  className={cn('m-auto', {
                    'text-gray-200': filterValue?.guest <= 0,
                  })}
                />
              </button>
              <div>{filterValue?.guest}</div>
              <button
                type="button"
                disabled={filterValue?.guest >= 20}
                className="h-8 w-8 rounded-full transition hover:border-black disabled:border-gray-200"
                onClick={() => {
                  setFilterValue({
                    ...filterValue,
                    guest: filterValue.guest + 1,
                  })
                }}
              >
                <AiOutlinePlusCircle
                  className={cn('m-auto', {
                    'text-gray-200': filterValue.guest >= 20,
                  })}
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default NavbarFilter
