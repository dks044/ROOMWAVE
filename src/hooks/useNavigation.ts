import { NavMenuItem } from '@/types'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const useNavigation = () => {
  const router = useRouter()
  const session = useSession()

  const menus: NavMenuItem[] =
    session.status === 'unauthenticated'
      ? [
          { id: 1, title: '로그인', url: '/users/login' },
          { id: 2, title: '회원가입', url: '/users/login' },
          { id: 3, title: 'FAQ', url: '/faqs' },
        ]
      : [
          { id: 1, title: '마이페이지', url: '/users/mypage' },
          { id: 2, title: 'FAQ', url: '/faqs' },
          {
            id: 3,
            title: '로그아웃',
            action: () => signOut({ callbackUrl: '/' }),
          },
        ]
  return { menus, router }
}

export default useNavigation
