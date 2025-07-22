import { fetchComment } from '@/apis'
import { ROOM } from '@/query/key'
import { useQuery } from '@tanstack/react-query'

const useFetchComments = (roomId: string | number) => {
  const {
    data: comments,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ROOM.comments(roomId),
    queryFn: () => fetchComment(roomId),
    enabled: !!roomId,
  })
  return { comments, refetch, isLoading }
}

export default useFetchComments
