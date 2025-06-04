import { getRoomsForScroll } from '@/apis/room'
import { ROOM } from '@/query/key'
import { useInfiniteQuery } from '@tanstack/react-query'

/**@info 무한스크롤 룸 리스트 */
const useRoomsScroll = () => {
  const {
    data: rooms,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: [ROOM.all],
    queryFn: getRoomsForScroll,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 1
    },
    initialPageParam: 1,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  })

  return {
    rooms,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
    isSuccess,
  }
}

export default useRoomsScroll
