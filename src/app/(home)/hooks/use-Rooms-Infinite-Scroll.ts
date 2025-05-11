'use client'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import { useEffect, useRef } from 'react'

interface useRoomsInfiniteScrollProps {
  hasNextPage: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>
}
/**
 * @info useIntersectionObserver을 사용하여 현재 스크롤이 아래인지 활용하여 데이터 패칭하는 훅
 */
const useRoomsInfiniteScroll = ({
  hasNextPage,
  fetchNextPage,
}: useRoomsInfiniteScrollProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const pageRef = useIntersectionObserver(ref, {})
  const isPageEnd = !!pageRef?.isIntersecting

  const throttleRef = useRef(false)

  useEffect(() => {
    if (!isPageEnd || !hasNextPage || throttleRef.current) return

    throttleRef.current = true
    fetchNextPage().finally(() => {
      setTimeout(() => {
        throttleRef.current = false
      }, 1000)
    })
  }, [isPageEnd, hasNextPage, fetchNextPage])

  return { ref, pageRef, isPageEnd }
}

export default useRoomsInfiniteScroll
