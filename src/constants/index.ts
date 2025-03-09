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

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? `${process.env.NEXT_PUBLIC_API_URL}/api` // 로컬 개발 환경에서의 API URL
    : `${process.env.VERCEL_URL}/api` // Vercel 배포 환경에서의 API URL

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
export const CATEGORY = CATEGORY_DATA.map((item) => item.title)
