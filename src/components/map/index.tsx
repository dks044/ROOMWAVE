'use client'

import { DEFAULT_LAT, DEFAULT_LNG, ZOOM_LEVEL } from '@/constants'
import useRoomsMap from '@/hooks/room/useRoomsMap'

import Script from 'next/script'

export default function Map() {
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

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map)
      })
    })
  }

  return (
    <>
      {isSuccess && (
        <Script
          strategy="afterInteractive"
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
          onReady={loadKakaoMap}
        />
      )}
      <div id="map" className="w-full h-screen" />
    </>
  )
}
