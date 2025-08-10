'use client'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import { useEffect, useRef } from 'react'

interface useInfiniteScrollProps {
  hasNextPage: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>
}

/**
 * useIntersectionObserver로 **뷰포트 하단 감시 요소**가 보일 때
 * `fetchNextPage()`를 호출해 **무한 스크롤**을 구현하는 커스텀 훅.
 *
 * - 스크롤이 바닥(`ref`가 화면에 노출)까지 내려가면 다음 페이지 패칭
 * - 과도한 호출을 막기 위해 **간단한 throttle(1초)** 적용
 * - 데이터 페칭 로직은 전적으로 **react-query(useInfiniteQuery)**에 위임
 *
 * @param {useInfiniteScrollProps} params
 * @param {boolean} params.hasNextPage - 더 가져올 페이지가 있는지 여부
 * @param {Function} params.fetchNextPage - 다음 페이지 요청 트리거(react-query 제공 함수)
 *
 * @returns {{
 *   ref: React.MutableRefObject<HTMLDivElement | null>,
 *   pageRef: IntersectionObserverEntry | null,
 *   isPageEnd: boolean
 * }}
 * - `ref`: 하단 센티넬로 사용할 DOM 요소에 달아줄 ref
 * - `pageRef`: 내부 `useIntersectionObserver`가 반환하는 엔트리 (디버깅/확장용)
 * - `isPageEnd`: 센티넬이 뷰포트에 **교차 중인지** 여부
 *
 * @example
 * ```tsx
 * // 컴포넌트 예시
 * const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({...})
 * const { ref } = useInfiniteScrollScroll({ hasNextPage, fetchNextPage })
 *
 * return (
 *   <>
 *     {data?.pages?.map(...)}
 *     <div ref={ref} style={{ height: 80 }} />
 *   </>
 * )
 * ```
 *
 * @remarks
 * - `useIntersectionObserver(ref, {})`의 두 번째 인자에 `rootMargin`/`threshold` 등을
 *   넘겨 스크롤 트리거 타이밍을 조정할 수 있다.
 * - 서버 렌더링 시엔 동작하지 않으니, **클라이언트 컴포넌트**에서만 사용.
 */
const useInfiniteScroll = ({
  hasNextPage,
  fetchNextPage,
}: useInfiniteScrollProps) => {
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

export default useInfiniteScroll
