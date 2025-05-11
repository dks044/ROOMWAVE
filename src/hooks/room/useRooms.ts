import { getRooms } from '@/apis/room'
import { ROOM } from '@/query/key'
import { useInfiniteQuery } from '@tanstack/react-query'

const useRooms = () => {
  const {
    data: rooms,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [ROOM.all],
    queryFn: getRooms,
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
  }
}

export default useRooms
