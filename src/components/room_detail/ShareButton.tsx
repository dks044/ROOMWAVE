'use client'
import { BLUR_DATA_URL } from '@/constants'
import { RoomType } from '@/types'
import { handleKakaoShare } from '@/util/kakaoShare'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { GrShare } from 'react-icons/gr'
import { MdOutlineEmail } from 'react-icons/md'
import { RiKakaoTalkFill } from 'react-icons/ri'

const ShareButton = ({ room }: { room: RoomType }) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-black/10"
        onClick={openModal}
      >
        <GrShare />
        <span className="underline">공유하기</span>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4">
                    <button
                      type="button"
                      className="absolute right-0 top-0 mb-4 rounded-full p-4 transition-all hover:bg-black/5"
                      onClick={closeModal}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    숙소 공유하기
                  </Dialog.Title>
                  <div className="mt-5 flex items-start gap-4">
                    <Image
                      src={room?.images?.[0]}
                      blurDataURL={BLUR_DATA_URL}
                      alt="room img"
                      width={60}
                      height={60}
                      placeholder="blur"
                      className="flex-shrink-0 rounded-md"
                    />
                    <div className="flex flex-col overflow-hidden">
                      <div className="truncate text-sm font-semibold text-gray-900">
                        {room?.title}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-1 text-xs text-gray-600">
                        <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-800">
                          {room?.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="truncate">{room?.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-4 font-semibold transition-all hover:bg-black/5"
                    >
                      <AiOutlineCopy className="my-auto" />
                      링크복사
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-4 font-semibold transition-all hover:bg-black/5"
                    >
                      <MdOutlineEmail className="my-auto" />
                      이메일
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-4 font-semibold transition-all hover:bg-black/5"
                    >
                      <FaInstagram className="my-auto" />
                      인스타그램
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-4 font-semibold transition-all hover:bg-black/5"
                      onClick={() => handleKakaoShare(room)}
                    >
                      <RiKakaoTalkFill className="my-auto" />
                      카카오톡
                    </button>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 h-7 w-full bg-brand text-center text-white transition-all hover:bg-pressedBrand hover:font-semibold sm:hidden"
                    role="button"
                  >
                    <div className="my-auto">닫기</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ShareButton
