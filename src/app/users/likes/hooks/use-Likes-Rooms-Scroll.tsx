import { getLikesRoomsForScroll } from '@/apis/room'
import { ROOM } from '@/query/key'
import { useInfiniteQuery } from '@tanstack/react-query'

/**@info 무한스크롤 찜한 룸 fetch하는 커스텀훅 */
const useLikesRoomsScroll = (userId: string) => {
  const {
    data: likeRooms,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ROOM.user_likes(userId),
    queryFn: getLikesRoomsForScroll,
    getNextPageParam: (lastPage, allPages) => {
      //return lastPage.length === 0 ? undefined : allPages.length + 1
      return lastPage?.meta?.hasNext ? lastPage.meta.nextPage : undefined
    },
    initialPageParam: 1,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  })

  return {
    likeRooms,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
    isSuccess,
  }
}

export default useLikesRoomsScroll
