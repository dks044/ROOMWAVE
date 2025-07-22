'use client'
import { RoomType } from '@/types'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import useFetchComments from '@/hooks/comments/useFetchComments'

const Comment = ({ room }: { room: RoomType }) => {
  const { comments, isLoading, refetch } = useFetchComments(room.id)

  return (
    <div className="border-b border-gray-300 px-4 py-8">
      {comments && (
        <CommentList
          comments={comments}
          isLoading={isLoading}
          roomId={room.id}
        />
      )}
      <CommentForm room={room} refetch={refetch} />
    </div>
  )
}

export default Comment
