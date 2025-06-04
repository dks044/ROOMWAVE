'use client'
// 마커 이미지 설정
const imageSrc = '/images/marker.png'
const imageSize = new window.kakao.maps.Size(30, 30)
const imageOption = { offset: new window.kakao.maps.Point(16, 46) }

//마커 이미지를 생성합니다
export const MARKER_IMAGE = new window.kakao.maps.MarkerImage(
  imageSrc,
  imageSize,
  imageOption,
)
