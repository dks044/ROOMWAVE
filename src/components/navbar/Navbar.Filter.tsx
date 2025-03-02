import React from 'react'
import cn from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import useNavFilter from '@/hooks/useNavFilter'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import Calendar from 'react-calendar'
import useFilterStore from '@/store/useFilterStroe'
import { FILTER_TITLE, LOCATION_CITIES } from '@/const/filter'

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
    <div className="absolute top-[341] sm:top-[70px] border border-gray-200 px-8 py-6 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl left-0">
      <div className="text-sm font-semibold flex justify-between">
        {/* 필터 제목 */}
        {FILTER_TITLE[detailFilter as keyof typeof FILTER_TITLE]}
      </div>
      {/* 현재 상세 디테일이 '위치' 일 경우 */}
      {detailFilter === 'location' && (
        <div className="flex flex-wrap gap-4 mt-4">
          {LOCATION_CITIES.map((value) => (
            <button
              key={value}
              type="button"
              className={cn(
                'border rounded-lg px-5 py-2.5 hover:bg-gray-200 focus:bg-subBrand transition',
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
          className="mt-8 mx-auto"
          onChange={onChange}
          minDate={
            detailFilter === 'checkIn'
              ? dayjs().toDate()
              : dayjs(filterValue.checkIn).add(1, 'day').toDate()
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
          <div className="mt-4 border border-gray-200 rounded-md w-full flex justify-between py-2 pl-4 pr-6 relative">
            <div className="font-semibold text-sm">
              <div>가격(시간당) 설정</div>
              <div className="text-gray-500">가격을 입력해주세요</div>
            </div>
            <input
              value={filterValue.hourlyPrice}
              className="w-3 sm:w-auto text-right"
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
          <div className="mt-4 border border-gray-200 py-2 px-4 rounded-lg flex justify-between items-center ">
            <div className="font-semibold text-sm">
              게스트 수 추가{' '}
              <div className="text-gray-500 text-xs">
                참가 인원을 입력해주세요
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center">
              <button
                type="button"
                disabled={filterValue?.guest <= 0}
                className="rounded-full w-8 h-8 hover:border-black transition disabled:border-gray-200"
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
                className="rounded-full w-8 h-8 hover:border-black transition disabled:border-gray-200"
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
