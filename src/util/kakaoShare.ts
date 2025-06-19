import { DOMAIN_URL } from '@/constants'
import { RoomType } from '@/types'

export const handleKakaoShare = (room: RoomType) => {
  if (!window.Kakao || !window.Kakao.isInitialized()) {
    console.warn('❌ Kakao SDK not initialized')
    return
  }

  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: room.title,
      description: `${room.price?.toLocaleString()}원 · ${room.category}`,
      imageUrl:
        room.images?.[0] ||
        'https://cdn.pixabay.com/photo/2017/06/17/10/58/furniture-2411853_1280.jpg',
      link: {
        mobileWebUrl: `${DOMAIN_URL}/rooms/${room.id}`,
        webUrl: `${DOMAIN_URL}/rooms/${room.id}`,
      },
    },
    buttons: [
      {
        title: '숙소 보러가기',
        link: {
          mobileWebUrl: `${DOMAIN_URL}/rooms/${room.id}`,
          webUrl: `${DOMAIN_URL}/rooms/${room.id}`,
        },
      },
    ],
  })
}
