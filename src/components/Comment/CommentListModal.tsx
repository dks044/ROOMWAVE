/* eslint-disable @next/next/no-img-element */

import { MOCK_COMMENTS } from '@/constants/mock'
import { Dialog, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface CommentListModalProps {
  isOpen: boolean
  closeModal: () => void
}

export default function CommentListModal({
  isOpen,
  closeModal,
}: CommentListModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
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
                <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute right-1 top-0 mb-4 rounded-full p-2 text-xl transition-all hover:bg-black/5"
                    onClick={closeModal}
                  >
                    <AiOutlineClose />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 md:text-2xl"
                  >
                    후기 전체보기
                  </Dialog.Title>
                  <h1 className="mb-2 mt-4 text-xl font-semibold">
                    후기 248개
                  </h1>
                  <div className="mx-auto mb-10 mt-8 flex max-w-lg flex-col gap-8">
                    {MOCK_COMMENTS?.slice(0, 6)?.map((comment) => (
                      <div key={comment?.id} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={comment?.imageUrl || '/images/avater.png'}
                            alt="profile img"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <h1 className="font-semibold">
                              {comment?.name ?? '-'}
                            </h1>
                            <div className="text-xs text-gray-500">
                              {comment?.createdAt}
                            </div>
                          </div>
                        </div>
                        <div className="max-w-lg text-gray-600">
                          {comment?.comment}
                        </div>
                      </div>
                    ))}
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
