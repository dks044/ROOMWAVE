'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { MAIN_SLIDES } from '@/constants'
import Image from 'next/image'

export default function RoomwaveSlider() {
  return (
    <Carousel className="mx-auto mt-20 w-full max-w-screen-xl cursor-pointer">
      <CarouselContent>
        {MAIN_SLIDES.map((slide, index) => (
          <CarouselItem
            key={index}
            className="relative px-4"
            onClick={() => alert('준비중입니다.')}
          >
            <div
              className={`flex h-[250px] flex-col items-center justify-between rounded-2xl p-8 text-white shadow-lg md:h-[300px] md:flex-row md:p-12 ${slide.bgColor}`}
            >
              <div className="space-y-3 text-center md:w-2/3 md:text-left">
                <h2 className="text-xl font-bold leading-tight md:text-3xl">
                  {slide.title}
                </h2>
                <p className="text-sm text-white/80 md:text-base">
                  {slide.description}
                </p>
              </div>
              <div className="mt-4">
                <Image
                  src={slide.image}
                  alt="슬라이드 이미지"
                  width={0}
                  height={0}
                  sizes="(min-width: 768px) 340px, 140px"
                  className="mx-auto h-[140px] w-[140px] object-contain md:h-[340px] md:w-[270px]"
                />
              </div>
              <div className="absolute bottom-4 right-6 text-sm text-white/60">
                {index + 1} / {MAIN_SLIDES.length}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-5" />
    </Carousel>
  )
}
