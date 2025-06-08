'use client'

import { DEFAULT_LAT, DEFAULT_LNG, ZOOM_LEVEL } from '@/constants'
import { MARKER_IMAGE } from '@/constants/map'
import useRoomsMap from '@/hooks/room/useRoomsMap'
import { RoomType } from '@/types'

import Script from 'next/script'
import { SetStateAction } from 'react'
import LottieAnimation from '../LottieAnimation'
import { AIRPLANE_LOADING, WAVE_LOADING_ANIMATION } from '@/constants/lottie'

interface MapProps {
  setSelectedRoom: React.Dispatch<SetStateAction<RoomType | null>>
}
export default function Map({ setSelectedRoom }: MapProps) {
  const { rooms, isSuccess } = useRoomsMap()

  // @see - https://apis.map.kakao.com/web/documentation/#load
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      var container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG), //지도의 중심좌표.
        level: ZOOM_LEVEL, //지도의 레벨(확대, 축소 정도)
      }

      const map = new window.kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
      // @see - https://apis.map.kakao.com/web/sample/basicMarker/
      rooms?.map((room) => {
        console.log(room)
        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          Number(room.lat),
          Number(room.lng),
        )

        // 마커 이미지 설정
        const imageSrc = '/images/marker.png'
        const imageSize = new window.kakao.maps.Size(30, 30)
        const imageOption = { offset: new window.kakao.maps.Point(16, 46) }

        //마커 이미지를 생성합니다
        const marker_image = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        )

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: marker_image,
        })

        // custom overlay를 설정해줍니다
        const content = `<div class="custom_overlay">${room.price?.toLocaleString()}원</div>`

        // custom overlay를 생성합니다
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
        })

        // 마커에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(marker, 'click', function () {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          setSelectedRoom(room)
        })
        window.kakao.maps.event.addListener(map, 'click', function () {
          setSelectedRoom(null)
        })

        // 커스텀오버레이가 지도 위에 표시되도록 설정합니다
        customOverlay.setMap(map)

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map)
      })
    })
  }

  return (
    <>
      {isSuccess ? (
        <Script
          strategy="afterInteractive"
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
          onReady={loadKakaoMap}
        />
      ) : (
        <main className="mt-20 flex h-[50vh] w-full items-center justify-center">
          <LottieAnimation
            className="h-52 w-52"
            lottieAnimationRoute={WAVE_LOADING_ANIMATION}
          />
        </main>
      )}
      <div id="map" className="h-screen w-full" />
    </>
  )
}
