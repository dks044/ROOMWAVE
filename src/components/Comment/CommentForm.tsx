'use client'
import axiosInstance from '@/lib/axios'
import { RoomType } from '@/types'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'

const CommentForm = ({
  room,
  refetch,
}: {
  room: RoomType
  refetch: () => void
}) => {
  const [comment, setComment] = useState<string>('')
  const { status } = useSession()

  const handleSubmit = async () => {
    const response = await axiosInstance.post('/comments', {
      body: comment,
      roomId: room.id,
    })

    if (response.status === 200) {
      toast.success('댓글을 생성했습니다.')
      setComment('')
      refetch()
    } else {
      toast.error('다시 시도해주세요.')
    }
  }

  if (status !== 'authenticated') {
    return (
      <div className="mt-8 rounded-md border border-gray-300 bg-gray-100 px-4 py-6 text-sm text-gray-500">
        로그인한 사용자만 댓글을 작성할 수 있습니다.
      </div>
    )
  }

  return (
    <form className="mt-8">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={3}
        placeholder="후기를 작성해주세요..."
        required
        name="comment"
        className="block min-h-[7.5rem] w-full resize-none rounded-md border bg-transparent px-4 py-2.5 text-sm leading-6 outline-none placeholder:text-gray-400 focus:border-black"
      />
      <div className="mt-4 flex flex-row-reverse">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-md bg-brand px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-pressedBrand"
        >
          작성하기
        </button>
      </div>
    </form>
  )
}

export default CommentForm
