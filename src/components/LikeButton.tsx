import useFetchRoom from '@/hooks/room/useFetchRoom'
import axiosInstance from '@/lib/axios'
import { RoomType } from '@/types'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { toast } from 'react-toastify'

const LikeButton = ({ room }: { room: RoomType }) => {
  const { data: session } = useSession()
  const { roomData, refetch } = useFetchRoom(String(room.id))
  const toggleLike = async () => {
    //TODO: 찜 & 찜 취소 로직
    if (session?.user && room) {
      try {
        const like = await axiosInstance.post(`/likes`, {
          roomId: room.id,
        })
        if (like.status === 201) {
          toast.success('공간을 찜했습니다.')
        } else {
          toast.warn('찜을 취소했습니다.')
        }
        refetch()
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('❌ 서버 에러:', error)
        }
      }
    } else {
      toast.error('로그인 후 시도해주세요.')
    }
  }

  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-black/10"
      onClick={toggleLike}
    >
      {/* 로그인한 사용자가 좋아요를 누른 경우 */}
      {roomData?.likes?.length ? (
        <>
          <AiFillHeart className="text-red-500 hover:text-rose-600 focus:text-rose-600" />
          <span className="underline">취소</span>
        </>
      ) : (
        <>
          <AiOutlineHeart className="hover:text-rose-600 focus:text-rose-600" />
          <span className="underline">저장</span>
        </>
      )}
    </button>
  )
}

export default LikeButton
