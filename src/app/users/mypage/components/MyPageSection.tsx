'use client'
import Link from 'next/link'
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineCalendar,
} from 'react-icons/ai'

const MyPageSection = () => {
  return (
    <section className="mb-20 mt-12 grid gap-4 sm:grid-cols-3">
      <Link
        href="/users/info"
        className="flex flex-col justify-between gap-12 rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
      >
        <AiOutlineUser className="text-xl sm:text-3xl" />
        <div>
          <h1 className="font-semibold">개인정보</h1>
          <h2 className="text-sm text-gray-500">개인정보 및 연락처</h2>
        </div>
      </Link>

      <Link
        href="/users/space/register"
        className="flex flex-col justify-between gap-12 rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
      >
        <AiOutlineHome className="text-xl sm:text-3xl" />
        <div>
          <h1 className="font-semibold">공간 등록</h1>
          <h2 className="text-sm text-gray-500">나의 공간 등록하기</h2>
        </div>
      </Link>

      <Link
        href="/users/space/manage"
        className="flex flex-col justify-between gap-12 rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
      >
        <AiOutlineTool className="text-xl sm:text-3xl" />
        <div>
          <h1 className="font-semibold">공간 관리</h1>
          <h2 className="text-sm text-gray-500">나의 공간 관리하기</h2>
        </div>
      </Link>

      <Link
        href="/users/likes"
        className="flex flex-col justify-between gap-12 rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
      >
        <AiOutlineHeart className="text-xl sm:text-3xl" />
        <div>
          <h1 className="font-semibold">찜한 공간</h1>
          <h2 className="text-sm text-gray-500">찜한 공간 알아보기</h2>
        </div>
      </Link>

      <Link
        href="/users/comments"
        className="flex flex-col justify-between gap-12 rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
      >
        <AiOutlineComment className="text-xl sm:text-3xl" />
        <div>
          <h1 className="font-semibold">나의 댓글</h1>
          <h2 className="text-sm text-gray-500">나의 댓글 모아보기</h2>
        </div>
      </Link>

      <Link
        href="/users/reservations"
        className="flex flex-col justify-between gap-12 rounded-lg p-4 shadow-lg transition-all hover:shadow-xl"
      >
        <AiOutlineCalendar className="text-xl sm:text-3xl" />
        <div>
          <h1 className="font-semibold">나의 예약</h1>
          <h2 className="text-sm text-gray-500">나의 예약 모아보기</h2>
        </div>
      </Link>
    </section>
  )
}

export default MyPageSection
