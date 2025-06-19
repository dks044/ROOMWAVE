import { LuPartyPopper } from 'react-icons/lu'
import { GiMusicalNotes } from 'react-icons/gi' // 연습실
import { AiOutlineCamera } from 'react-icons/ai' // 촬영스튜디오
import { FaBookOpen } from 'react-icons/fa' // 스터디룸
import { BiMusic } from 'react-icons/bi' // 공연장
import { FaUtensils } from 'react-icons/fa' // 공유주방
import { SiBytedance } from 'react-icons/si' // 댄스연습실
import { BiFilm } from 'react-icons/bi' // 렌탈스튜디오
import { AiOutlineFileProtect } from 'react-icons/ai' // 회의실
import { MdLiveTv } from 'react-icons/md' // 라이브방송
import { GiMicrophone } from 'react-icons/gi' // 보컬연습실
import { BsFillClipboardDataFill } from 'react-icons/bs' // 세미나실
import { FaRegHandshake } from 'react-icons/fa' // 컨퍼런스
import { GiLovers } from 'react-icons/gi' // 스몰웨딩
import { PiGuitarFill } from 'react-icons/pi' // 악기연습실
import { RiCamera2Line } from 'react-icons/ri' // 실외촬영
import { AiOutlineLaptop } from 'react-icons/ai' // 강의실
import { FaDumbbell } from 'react-icons/fa' // 운동시설
import { RiGalleryView } from 'react-icons/ri' // 갤러리
import { AiOutlineAudio } from 'react-icons/ai' // 녹음실
import { FaHome } from 'react-icons/fa' // 독립오피스
import { MdHouse } from 'react-icons/md' // 가정집
import { RoomType } from '@/types'

import { Wix_Madefor_Display } from 'next/font/google'

import { FaParking } from 'react-icons/fa'
import { FaShower } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { LuAirVent } from 'react-icons/lu'
import { LuWifi } from 'react-icons/lu'
import { MdOutlineMeetingRoom } from 'react-icons/md'

export const DOMAIN_URL = 'https://roomwave.vercel.app'

export const MAIN_SLIDES = [
  {
    title: '파티룸 찾을 땐 쿠폰 할인 받으세요!',
    description: '쿠폰 제공 파티룸 바로가기',

    bgColor: 'bg-blue-500',
    image: '/images/coupon.png',
  },
  {
    title: '친구들과 함께하는 스터디룸 예약!',
    description: '시간 단위로 합리적으로 이용해보세요',
    bgColor: 'bg-orange-500',
    image: '/images/studyroom.png',
  },
  {
    title: '장기 거주도 OK, 원룸쉐어 특가!',
    description: '1개월 이상 거주자에게 특별 할인',
    bgColor: 'bg-green-500',
    image: '/images/longstay.png',
  },
]

export const SERVER_SIDE_API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URL!
    : 'http://localhost:3000/api'

export const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL!
    : 'http://localhost:3000/api'

export const WIX_FONT = Wix_Madefor_Display({
  weight: ['400', '700'], // 원하는 굵기만 preload
  subsets: ['latin'], // 또는 ['latin', 'korean']
  display: 'swap', // 권장 설정
})

export const CATEGORY_DATA = [
  { title: '파티룸', Icon: LuPartyPopper },
  { title: '연습실', Icon: GiMusicalNotes },
  { title: '촬영스튜디오', Icon: AiOutlineCamera },
  { title: '스터디룸', Icon: FaBookOpen },
  { title: '공연장', Icon: BiMusic },
  { title: '공유주방', Icon: FaUtensils },
  { title: '댄스연습실', Icon: SiBytedance },
  { title: '렌탈스튜디오', Icon: BiFilm },
  { title: '회의실', Icon: AiOutlineFileProtect },
  { title: '라이브방송', Icon: MdLiveTv },
  { title: '보컬연습실', Icon: GiMicrophone },
  { title: '세미나실', Icon: BsFillClipboardDataFill },
  { title: '컨퍼런스', Icon: FaRegHandshake },
  { title: '스몰웨딩', Icon: GiLovers },
  { title: '악기연습실', Icon: PiGuitarFill },
  { title: '실외촬영', Icon: RiCamera2Line },
  { title: '강의실', Icon: AiOutlineLaptop },
  { title: '운동시설', Icon: FaDumbbell },
  { title: '갤러리', Icon: RiGalleryView },
  { title: '녹음실', Icon: AiOutlineAudio },
  { title: '독립오피스', Icon: FaHome },
  { title: '가정집', Icon: MdHouse },
]

export const CATEGORY_COLOR_MAP: Record<string, string> = {
  파티룸: 'bg-pink-500',
  연습실: 'bg-indigo-500',
  촬영스튜디오: 'bg-yellow-500',
  스터디룸: 'bg-green-500',
  공연장: 'bg-red-500',
  공유주방: 'bg-orange-500',
  댄스연습실: 'bg-rose-500',
  렌탈스튜디오: 'bg-cyan-500',
  회의실: 'bg-blue-500',
  라이브방송: 'bg-purple-500',
  보컬연습실: 'bg-lime-500',
  세미나실: 'bg-teal-500',
  컨퍼런스: 'bg-emerald-500',
  스몰웨딩: 'bg-fuchsia-500',
  악기연습실: 'bg-violet-500',
  실외촬영: 'bg-amber-500',
  강의실: 'bg-sky-500',
  운동시설: 'bg-gray-700',
  갤러리: 'bg-zinc-500',
  녹음실: 'bg-neutral-500',
  독립오피스: 'bg-stone-500',
  가정집: 'bg-slate-500',
}
export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctHpRPQAGVgJwRKJeuAAAAABJRU5ErkJggg=='

export const CATEGORY = CATEGORY_DATA.map((item) => item.title)

export const DEFAULT_LAT = 37.5665
export const DEFAULT_LNG = 126.978

export const ZOOM_LEVEL = 6

export const FEATURE_TYPE = {
  FREE_CANCEL: 'FREE_CANCEL',
  OFFICE_SPACE: 'OFFICE_SPACE',
  HAS_SHOWER: 'HAS_SHOWER',
  HAS_AIR_CONDITION: 'HAS_AIR_CONDITION',
  HAS_WIFI: 'HAS_WIFI',
  HAS_FREE_PARKING: 'HAS_FREE_PARKING',
} as const

export const featureKeyMap: Record<FeatureType, keyof RoomType> = {
  [FEATURE_TYPE.FREE_CANCEL]: 'freeCancel',
  [FEATURE_TYPE.OFFICE_SPACE]: 'officeSpace',
  [FEATURE_TYPE.HAS_SHOWER]: 'hasShower',
  [FEATURE_TYPE.HAS_AIR_CONDITION]: 'hasAirCondition',
  [FEATURE_TYPE.HAS_WIFI]: 'hasWifi',
  [FEATURE_TYPE.HAS_FREE_PARKING]: 'hasFreeParking',
}

export type FeatureType = (typeof FEATURE_TYPE)[keyof typeof FEATURE_TYPE]

export const FeatureDesc: Record<FeatureType, string> = {
  [FEATURE_TYPE.FREE_CANCEL]: '무료 취소 가능합니다',
  [FEATURE_TYPE.OFFICE_SPACE]: '사무 공간이 제공됩니다',
  [FEATURE_TYPE.HAS_SHOWER]: '샴푸 및 욕실 용품이 구비되어 있습니다',
  [FEATURE_TYPE.HAS_AIR_CONDITION]: '에어컨이 제공됩니다',
  [FEATURE_TYPE.HAS_WIFI]: '와이파이를 이용할 수 있습니다',
  [FEATURE_TYPE.HAS_FREE_PARKING]: '무료 주차가 가능합니다',
}

export const FeatureIcons: Record<FeatureType, React.ReactNode> = {
  [FEATURE_TYPE.FREE_CANCEL]: <MdOutlineCancel size={24} />,
  [FEATURE_TYPE.OFFICE_SPACE]: <MdOutlineMeetingRoom size={24} />,
  [FEATURE_TYPE.HAS_SHOWER]: <FaShower size={24} />,
  [FEATURE_TYPE.HAS_AIR_CONDITION]: <LuAirVent size={24} />,
  [FEATURE_TYPE.HAS_WIFI]: <LuWifi size={24} />,
  [FEATURE_TYPE.HAS_FREE_PARKING]: <FaParking size={24} />,
}
