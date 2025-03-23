import { getRooms } from '@/apis/room'
import { ROOM } from '@/query/key'
import { useQuery } from '@tanstack/react-query'

const useRooms = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [ROOM.all],
    queryFn: getRooms,
    staleTime: 10000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return { data, isLoading, isError }
}

export default useRooms
