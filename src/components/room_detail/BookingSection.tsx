'use client'
import useFilterStore from '@/store/useFilterStroe'
import { RoomType } from '@/types'
import React, { useEffect, useState } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

const BookingSection = ({ room }: { room: RoomType }) => {
  const { filterValue, setFilterValue } = useFilterStore()

  const onChangeCheckIn = (e: any) => {
    setFilterValue({ ...filterValue, checkIn: e?.target.value })
  }

  const onChangeCheckOut = (e: any) => {
    setFilterValue({ ...filterValue, checkOut: e?.target.value })
  }

  const onChangeGuest = (e: any) => {
    setFilterValue({ ...filterValue, guest: e?.target.value })
  }
  const [today, setToday] = useState('')

  useEffect(() => {
    setToday(dayjs().format('YYYY-MM-DD'))
  }, [])

  return (
    <div className="w-full">
      <div className="sticky mt-8 rounded-lg border border-gray-300 px-6 py-8 shadow-lg md:top-20">
        <div className="flex items-center justify-between text-gray-600">
          <div>
            <span className="text-lg font-semibold text-black md:text-xl">
              {room?.price?.toLocaleString()} 원
            </span>{' '}
            /시간
          </div>
          <div className="text-xs">후기 15개</div>
        </div>
        <form className="mt-2">
          <div className="mt-2">
            <label className="text-xs font-semibold">체크인</label>
            <input
              type="date"
              min={today}
              max={
                filterValue.checkOut
                  ? dayjs(filterValue.checkOut)
                      .subtract(1, 'day')
                      .format('YYYY-MM-DD')
                  : undefined
              }
              className="mt-1 w-full rounded-md border border-gray-400 px-4 py-3 text-xs"
              onChange={onChangeCheckIn}
              value={filterValue.checkIn}
            />
          </div>
          <div className="mt-2">
            <label className="text-xs font-semibold">체크아웃</label>
            <input
              type="date"
              min={filterValue.checkIn || today}
              className="mt-1 w-full rounded-md border border-gray-400 px-4 py-3 text-xs"
              onChange={onChangeCheckOut}
              value={filterValue.checkOut}
            />
          </div>
          <div className="mt-2">
            <label className="text-xs font-semibold">인원</label>
            <select
              className="mt-1 w-full rounded-md border border-gray-400 px-4 py-3 text-xs"
              onChange={onChangeGuest}
              value={filterValue.guest}
            >
              {[...Array(20)]?.map((_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="w-full rounded-md bg-brand px-2 py-1 text-white transition-all hover:bg-pressedBrand"
            >
              예약하기
            </button>
            <p className="mt-4 text-center text-xs text-gray-600 md:text-sm">
              예약 확정 전에는 요금이 청구되지 않습니다.
            </p>
          </div>
        </form>

        <div className="mt-4 flex flex-col gap-2 border-b border-b-gray-300 pb-4 text-xs md:text-sm">
          <div className="flex justify-between">
            <div className="text-gray-600 underline underline-offset-4">
              {room?.price?.toLocaleString()} x 5시간
            </div>
            <div className="text-gray-500">₩171,440</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-600 underline underline-offset-4">
              <div>ROOMWAVE 수수료</div>
            </div>
            <div className="text-gray-500">₩0</div>
          </div>
          <div className="mt-6 flex justify-between">
            <div>총 합계</div>
            <div className="text-gray-500">₩171,440</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSection
