import { fetchRoomByID } from '@/apis/room'
import { ROOM } from '@/query/key'
import { useQuery } from '@tanstack/react-query'

const useFetchRoom = (roomId: string) => {
  const { data: roomData, refetch } = useQuery({
    queryKey: ROOM.detail(roomId),
    queryFn: () => fetchRoomByID(roomId),
    enabled: !!roomId,
    refetchOnWindowFocus: false,
  })
  return { roomData, refetch }
}
export default useFetchRoom
