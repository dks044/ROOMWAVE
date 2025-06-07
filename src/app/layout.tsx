import type { Metadata } from 'next'
import './globals.css'
import NextLayout, { NextProvider } from './providers'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: '룸웨이브 - 룸을 찾아요',
  description:
    '스터디룸, 파티룸, 공유주방 등 친절한 서비스로 호스트에게 대여할 수 있는 곳.',
}

const aritaDotum = localFont({
  src: '../../public/fonts/AritaDotumKR-Medium.ttf',
  display: 'swap',
  variable: '--font-aritaDotum',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={aritaDotum.className}>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  )
}
