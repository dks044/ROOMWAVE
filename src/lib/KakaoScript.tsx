// KakaoScript.tsx

'use client'

import Script from 'next/script'

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SDK)
  }

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      async
      onLoad={onLoad}
    />
  )
}

export default KakaoScript
