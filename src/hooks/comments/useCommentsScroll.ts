import { fetchCommentInfiniteScroll } from '@/apis'
import { ROOM } from '@/query/key'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'
import useIntersectionObserver from '../useIntersectionObserver'

const useCommentsScroll = (roomId: string | number) => {
  const infiniteRef = useRef<HTMLDivElement | null>(null)
  const pageRef = useIntersectionObserver(infiniteRef, {
    rootMargin: '10%',
    enableObserver: !!infiniteRef.current,
  })
  const isPageEnd = !!pageRef?.isIntersecting

  const {
    data: comments,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ROOM.comments_infinite(roomId),
    queryFn: ({ pageParam = 1 }) =>
      fetchCommentInfiniteScroll(roomId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage?.data?.length > 0 ? lastPage.page! + 1 : undefined,
  })

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined

    if (isPageEnd && hasNextPage) {
      timerId = setTimeout(() => {
        fetchNextPage()
      }, 500)
    }

    return () => clearTimeout(timerId)
  }, [isPageEnd, hasNextPage, fetchNextPage])

  return {
    comments,
    isFetching,
    hasNextPage,
    infiniteRef,
  }
}

export default useCommentsScroll
