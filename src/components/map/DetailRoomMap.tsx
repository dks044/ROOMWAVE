'use client'

import { DEFAULT_LAT, DEFAULT_LNG, ZOOM_LEVEL } from '@/constants'
import { RoomType } from '@/types'

import Script from 'next/script'
import LottieAnimation from '../LottieAnimation'
import { WAVE_LOADING_ANIMATION } from '@/constants/lottie'

interface DetailRoomMapProps {
  room: RoomType
}
export default function DetailRoomMap({ room }: DetailRoomMapProps) {
  // @see - https://apis.map.kakao.com/web/documentation/#load
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      var container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        center: new window.kakao.maps.LatLng(room.lat, room.lng),
        level: 5, //지도의 레벨(확대, 축소 정도)
      }

      const map = new window.kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
      // @see - https://apis.map.kakao.com/web/sample/basicMarker/
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

      // // 마커에 마우스오버 이벤트를 등록합니다
      // window.kakao.maps.event.addListener(marker, 'click', function () {
      //   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
      //   setSelectedRoom(room)
      // })
      // window.kakao.maps.event.addListener(map, 'click', function () {
      //   setSelectedRoom(null)
      // })

      // 커스텀오버레이가 지도 위에 표시되도록 설정합니다
      customOverlay.setMap(map)

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map)

      // @see - https://apis.map.kakao.com/web/sample/addMapControl/

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      const mapTypeControl = new window.kakao.maps.MapTypeControl()

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT)

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      const zoomControl = new window.kakao.maps.ZoomControl()
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)
    })
  }

  return (
    <>
      {room ? (
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
      <div id="map" className="h-[31.25rem] w-full border border-gray-300" />
    </>
  )
}
