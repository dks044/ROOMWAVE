/* eslint-disable @next/next/no-img-element */

import { deleteCommentByCommentId } from '@/apis'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'

interface CommentDeleteModalProps {
  isOpen: boolean
  closeModal: () => void
  commentId: number
  refetch: () => void
}

const CommentDeleteModal = ({
  isOpen,
  closeModal,
  commentId,
  refetch,
}: CommentDeleteModalProps) => {
  const handleDeleteComment = async () => {
    try {
      await deleteCommentByCommentId(commentId)
      toast.success('후기 삭제가 완료됐습니다.')
      closeModal()
      refetch()
    } catch (error) {
      console.log(error)
      toast.error('삭제중 오류가 발생했습니다.')
    }
  }

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
            <div className="flex min-h-full items-center justify-center p-1 text-center">
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
                    후기 삭제하기
                  </Dialog.Title>
                  <h3 className="text-gray-600">후기를 삭제하시겠습니까?</h3>
                  <button
                    type="button"
                    className="w-full flex-1 font-semibold transition-all hover:text-rose-500"
                    onClick={handleDeleteComment}
                  >
                    삭제하기
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CommentDeleteModal
