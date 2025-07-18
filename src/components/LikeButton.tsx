import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { toast } from 'react-toastify'

const LikeButton = () => {
  const toggleLike = () => {
    // TODO: '/api/like' POST 요청 보내는 로직 추가
    toast.success('찜 목록 추가했습니다.')
  }

  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-black/10"
      onClick={toggleLike}
    >
      <CiHeart />
      <span className="underline">저장</span>
    </button>
  )
}

export default LikeButton
