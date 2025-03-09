import IsJustOneDayCheckBox from '@/components/Navber/Is-Just-One-Day-CheckBox'

/**@INFO 필터 제목 */
export const FILTER_TITLE = {
  location: '지역으로 검색하기',
  checkIn: (
    <>
      <div>체크인 날짜 설정하기</div>
      <div className="flex flex-row gap-4">
        <div className="text-xs text-gray-500 my-auto">
          당일만 예약하시나요?
        </div>
        <IsJustOneDayCheckBox />
      </div>
    </>
  ),
  checkOut: '체크아웃 날짜 설정하기',
  hourlyPrice: '가격(시간당)으로 알아보기',
  guest: '게스트 추가하기',
}

export const LOCATION_CITIES = [
  '서울',
  '부산',
  '대구',
  '인천',
  '울산',
  '광주',
  '대전',
]
