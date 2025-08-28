import { getRooms } from '@/apis/room'
import { ROOM } from '@/query/key'
import { useQuery } from '@tanstack/react-query'

const useRoomsMap = () => {
  const { isSuccess, data: rooms } = useQuery({
    queryKey: ROOM.map,
    queryFn: getRooms,
    staleTime: 10000,
  })

  return { isSuccess, rooms }
}

export default useRoomsMap
