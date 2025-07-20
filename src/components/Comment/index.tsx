import { RoomType } from '@/types'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Comment = ({ room }: { room: RoomType }) => {
  return (
    <div className="border-b border-gray-300 px-4 py-8">
      <CommentList />
      <CommentForm />
    </div>
  )
}

export default Comment
