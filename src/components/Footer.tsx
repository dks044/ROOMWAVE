import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-2">
      <div className="mx-auto w-full max-w-screen-xl border-b p-4 md:flex md:items-center md:justify-between">
        <div className="text-sm text-gray-800 sm:text-center">
          {' '}
          ⓒ 2025 <span className="hover:underline">WAVESTUDIO.</span> ALL Rights
          Reserverd.{' '}
        </div>
        <ul className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-800 sm:mt-0 md:gap-6">
          <li>
            <Link href="/users/login" className="hover:underline">
              로그인
            </Link>
          </li>
          <li>
            <Link href="/users/signIn" className="hover:underline">
              회원가입
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="hover:underline">
              FAQ
            </Link>
          </li>
          {/* <li>
            <a href="#" className="hover:underline">
              회사 세부정보
            </a>
          </li> */}
        </ul>
      </div>
      <div className="mx-auto max-w-screen-xl p-4 text-[10px] text-gray-400">
        웹사이트 제공자 : TEAM SYNTHWAVE | 이사: Ajn Jong Yun | 사업자 등록 번호
        : 없음 | 연락처: buzz781@gmail.com | TEAM SYNTHWAVE는 통신판매 중개자로
        Studywave 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의
        당사자가 아닙니다. ROOMWAVE 플랫폼을 통하여 예약된 파티룸, 스터디룸 등에
        관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
      </div>
    </footer>
  )
}

export default Footer
