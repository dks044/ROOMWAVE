import { fetchCommentByUser } from '@/apis'
import { ROOM } from '@/query/key'
import { useInfiniteQuery } from '@tanstack/react-query'

/**@info 사용자가 사용한 후기를 무한스크롤로 패치 */
const useUserCommentsScroll = (userId: string) => {
  const {
    data: comments,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ROOM.user_comments(userId),
    queryFn: fetchCommentByUser,
    getNextPageParam: (lastPage: any) =>
      lastPage.data?.length > 0 ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
    staleTime: 10000,
    refetchOnWindowFocus: false,
  })

  return {
    comments,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isError,
    isLoading,
    isSuccess,
  }
}

export default useUserCommentsScroll
