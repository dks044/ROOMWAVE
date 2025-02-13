import { DetailFilterType, FilterProps } from '@/types/filter'
import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import useNavFilter from '@/hooks/useNavFilter'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import PrevNavbar from './Deprecated.Navbar'
import { formatNumber } from '@/util/util'

interface FilterComponentProps {
  detailFilter: DetailFilterType
  filterValue: FilterProps
  setFilterValue: React.Dispatch<React.SetStateAction<FilterProps>>
  setDetailFilter: React.Dispatch<React.SetStateAction<DetailFilterType | null>>
}
/**
 * @info Navbar 필터 (ROOM 검색용도)
 * @param detailFilter   : 필터의 상태(ex: 지역, 게스트, ...)
 * @param filterValue    : 필터(Object)의 값
 * @param setFilterValue
 * @param setDetailFilter
 *
 */
const NavbarFilter = ({
  detailFilter,
  filterValue,
  setFilterValue,
  setDetailFilter,
}: FilterComponentProps) => {
  const { isCheckIn, counter, setCounter } = useNavFilter(
    detailFilter,
    filterValue,
  )

  return (
    <div className="absolute top-80 sm:top-[70px] border border-gray-200 px-8 py-10 flex flex-col bg-white w-full mx-auto inset-x-0 sm:max-w-3xl sm:w-[780px] rounded-xl left-0">
      <div className="text-sm font-semibold">
        {detailFilter === 'location' && '지역으로 검색하기'}
        {detailFilter === 'checkIn' && '체크인 날짜 설정하기'}
        {detailFilter === 'checkOut' && '체크아웃 날짜 설정하기'}
        {detailFilter === 'hourlyPrice' && '가격(시간당)으로 알아보기'}
        {detailFilter === 'guest' && '게스트 추가하기'}
      </div>
      {detailFilter === 'location' && (
        <div className="flex flex-wrap gap-4 mt-4">
          {['서울', '부산', '대구', '인천', '울산', '광주', '대전']?.map(
            (value) => (
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
            ),
          )}
        </div>
      )}
      {(detailFilter === 'checkIn' || detailFilter === 'checkOut') && (
        <input
          type="date"
          className="mt-4 border border-gray-200 py-3 px-2.5 rounded-lg"
          defaultValue={isCheckIn ? filterValue.checkIn : filterValue.checkOut}
          //체크인일 경우, 최솟값은 현재날짜 | 체크아웃의 최솟값은 체크인값
          min={
            detailFilter === 'checkIn'
              ? dayjs().format('YYYY-MM-DD')
              : dayjs(filterValue.checkIn).add(1, 'day').format('YYYY-MM-DD')
          }
          onChange={(e) => {
            setFilterValue({
              ...filterValue,
              [isCheckIn ? 'checkIn' : 'checkOut']: e.target.value,
            })
            setDetailFilter(isCheckIn ? 'checkIn' : 'checkOut')
          }}
        />
      )}
      {detailFilter === 'hourlyPrice' && (
        <>
          <div className="mt-4 border border-gray-200 rounded-md w-full flex justify-between py-2 pl-4 pr-6 relative">
            <div className="font-semibold text-sm">
              <div>가격(시간당) 설정</div>
              <div className="text-gray-500">가격을 입력해주세요</div>
            </div>
            <input
              value={filterValue.hourlyPrice}
              className="text-right"
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
      {detailFilter === 'guest' && (
        <>
          <div className="mt-4 border border-gray-200 py-2 px-4 rounded-lg flex justify-between items-center ">
            <div className="font-semibold text-sm">
              게스트 수 추가{' '}
              <div className="text-gray-500 text-sm">
                참가 인원을 입력해주세요
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center">
              <button
                type="button"
                disabled={counter <= 0}
                className="rounded-full  w-8 h-8 hover:border-black transition disabled:border-gray-200"
                onClick={(e) => {
                  setCounter((val) => val - 1)
                  setFilterValue({ ...filterValue, guest: counter + 1 })
                }}
              >
                <AiOutlineMinusCircle
                  className={cn('m-auto', { 'text-gray-200': counter <= 0 })}
                />
              </button>
              <div>{counter}</div>
              <button
                type="button"
                disabled={counter >= 20}
                className="rounded-full  w-8 h-8 hover:border-black transition disabled:border-gray-200"
                onClick={() => {
                  setCounter((val) => val + 1)
                }}
              >
                <AiOutlinePlusCircle
                  className={cn('m-auto', { 'text-gray-200': counter >= 20 })}
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
