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
  category: string //카테고리
}
