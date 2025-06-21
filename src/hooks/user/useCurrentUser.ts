import { getUser } from '@/apis'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

const useCurrentUser = () => {
  const { status } = useSession()

  const {
    data: user,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: status === 'authenticated',
  })

  return { user, isError, isSuccess, isLoading }
}
export default useCurrentUser
