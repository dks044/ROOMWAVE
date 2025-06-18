'use client'
import useCalendarSection from '@/hooks/room/useCalendarSection'
import dayjs from 'dayjs'
import Calendar from 'react-calendar'

const CalendarSection = () => {
  const { checkIn, checkOut, onChangeCheckIn, onChangeCheckOut, showCalender } =
    useCalendarSection()

  return (
    <section className="mt-4 flex flex-col gap-4">
      <div className="text-sm text-gray-500">
        {checkIn && checkOut
          ? `${checkIn} ~ ${checkOut}`
          : '체크인/체크아웃을 날짜를 입력 해주세요.'}
      </div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        {showCalender && (
          <>
            <Calendar
              next2Label={null}
              prev2Label={null}
              className="mx-auto mt-8"
              onChange={onChangeCheckIn}
              minDate={dayjs().toDate()}
              maxDate={checkOut ? dayjs(checkOut).toDate() : undefined}
              defaultValue={checkIn ?? null}
              formatDay={(locale, date) => dayjs(date).format('DD')}
            />
            <Calendar
              next2Label={null}
              prev2Label={null}
              className="mx-auto mt-8"
              onChange={onChangeCheckOut}
              minDate={dayjs().toDate()}
              defaultValue={checkOut ?? null}
              formatDay={(locale, date) => dayjs(date).format('DD')}
            />
          </>
        )}
      </div>
    </section>
  )
}

export default CalendarSection
