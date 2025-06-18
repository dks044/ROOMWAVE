import useFilterStore from '@/store/useFilterStroe'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

/**
 * useCalendarSection
 *
 * 예약 화면 내 체크인/체크아웃 달력 관리 전용 커스텀 훅입니다.
 *
 * - Zustand에서 `checkIn`, `checkOut`, `setFilterValue`를 가져와 날짜 상태를 관리합니다.
 * - 날짜 선택 시, 'YYYY-MM-DD' 형식으로 변환하여 상태에 반영합니다.
 * - `showCalender`는 달력이 클라이언트 사이드에서 렌더링된 이후에만 true가 되도록 처리합니다.
 *   이는 `react-calendar` 컴포넌트가 SSR 환경에서 hydration mismatch를 일으키는 것을 방지하기 위함입니다.
 *
 * @returns {{
 *   showCalender: boolean; // 달력을 렌더링할 수 있는지 여부
 *   checkIn: string | null; // 선택된 체크인 날짜
 *   checkOut: string | null; // 선택된 체크아웃 날짜
 *   onChangeCheckIn: (e: any) => void; // 체크인 날짜 변경 핸들러
 *   onChangeCheckOut: (e: any) => void; // 체크아웃 날짜 변경 핸들러
 * }}
 */
const useCalendarSection = () => {
  const [showCalender, setShowCalender] = useState<boolean>(false)
  const filterValue = useFilterStore((state) => state.filterValue)
  const setFilterValue = useFilterStore((state) => state.setFilterValue)
  const checkIn = useFilterStore((state) => state.filterValue.checkIn)
  const checkOut = useFilterStore((state) => state.filterValue.checkOut)

  const onChangeCheckIn = (e: any) => {
    setFilterValue({
      ...filterValue,
      checkIn: dayjs(e).format('YYYY-MM-DD'),
    })
  }
  const onChangeCheckOut = (e: any) => {
    setFilterValue({
      ...filterValue,
      checkOut: dayjs(e).format('YYYY-MM-DD'),
    })
  }
  useEffect(() => {
    setShowCalender(true)
  }, [])

  return { showCalender, checkIn, checkOut, onChangeCheckIn, onChangeCheckOut }
}

export default useCalendarSection
