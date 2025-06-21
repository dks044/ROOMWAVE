import { getUser, updateUser } from '@/apis'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

/**
 * 🧾 유저 정보 수정 폼을 위한 커스텀 훅
 * - 서버에서 유저 데이터를 패칭하고
 * - 폼 필드 상태(name, email, phone 등)를 관리함
 */
const useUserForm = () => {
  const router = useRouter()
  const { status } = useSession()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { data: user, isSuccess } = useQuery({
    queryKey: ['user-form'],
    queryFn: getUser,
    refetchOnMount: false,
    enabled: status === 'authenticated',
  })

  useEffect(() => {
    if (user && isSuccess) {
      setName(user?.name ?? '')
      setEmail(user?.email ?? '')
      setPhone(user?.phone ?? '')
      setAddress(user?.address ?? '')
    }
  }, [isSuccess, user])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'name') {
      setName(value)
    }
    if (name === 'email') {
      setEmail(value)
    }
    if (name === 'phone') {
      setPhone(value)
    }
    if (name === 'address') {
      setAddress(value)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      await updateUser({
        name: name,
        email: email,
        phone: phone,
        address: address,
      })
      toast.success('사용자 정보 수정에 성공했어요!')
      router.replace('/users/info')
    } catch (error) {
      console.log(error)
      toast.error('다시 시도해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    name,
    email,
    phone,
    address,
    user,
    onChange,
    handleSubmit,
    isLoading,
  }
}

export default useUserForm
