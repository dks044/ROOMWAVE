import { RoomType } from '@/types'
import React from 'react'
import BookingSection from './BookingSection'
import Image from 'next/image'
import {
  FeatureDesc,
  FeatureIcons,
  featureKeyMap,
  FeatureType,
} from '@/constants'
import { GiSadCrab } from 'react-icons/gi'
import CalendarSection from './CalendarSection'

const FeatureSection = ({ room }: { room: RoomType }) => {
  const activeFeatures = (Object.keys(featureKeyMap) as FeatureType[]).filter(
    (key) => room[featureKeyMap[key]],
  )
  return (
    <section className="relative mt-8 gap-8 md:grid md:grid-cols-3">
      <div className="col-span-2">
        <div className="flex items-center justify-between px-4">
          <div>
            <h1 className="text-lg md:text-xl">
              {room?.user?.name ?? '사용자 님이 호스팅하는 공간'}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {room?.user?.desc ?? '호스트 설명이 없습니다.'}
            </p>
          </div>
          <Image
            src={room?.user?.image || '/images/avater.png'}
            alt="user Image"
            width={50}
            height={50}
            className="rounded-full shadow"
          />
        </div>

        <div className="mt-4 flex flex-col gap-6 border-y border-gray-300 px-4 py-6">
          <h1 className="mb-2 text-xl font-semibold">룸 특징</h1>
          {activeFeatures.length > 0 ? (
            activeFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-6 px-4">
                {FeatureIcons[feature]}
                <div>
                  <div className="font-semibold">{FeatureDesc[feature]}</div>
                  <div className="text-sm text-gray-400">
                    {FeatureDesc[feature]}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center gap-6 px-4">
              <GiSadCrab size={24} />
              <div>
                <div className="font-semibold">등록된 공간 특징이 없습니다</div>
                <div className="text-sm text-gray-400">
                  호스트가 아직 공간의 특징을 등록하지 않았어요.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-b border-gray-300 px-4 py-8 leading-8 text-gray-800">
          <h1 className="mb-2 text-xl font-semibold">공간 설명</h1>
          {room?.desc ?? '설명이 없습니다'}
        </div>

        <div className="border-b border-gray-300 px-4 py-8 leading-8 text-gray-800">
          <h1 className="mb-2 text-xl font-semibold">숙박 여부</h1>
          {room?.bedroomDesc ?? '설명이 없습니다'}
        </div>

        <div className="border-b border-gray-300 px-4 py-8 leading-8 text-gray-800">
          <h1 className="mb-2 text-xl font-semibold">캘린더</h1>
          <CalendarSection />
        </div>

        {/* <div className="border-b border-gray-300 px-4 py-8 leading-8 text-gray-800">
          <h1 className="mb-2 text-xl font-semibold">후기</h1>
          <div className="mt-4 rounded-lg border border-gray-300 p-5">
            후기가 들어갑니다
          </div>
        </div> */}
      </div>
      <BookingSection room={room} />
    </section>
  )
}

export default FeatureSection
