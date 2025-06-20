import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import MyPageSection from './components/MyPageSection'

const MyPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }
  return (
    <main className="mx-auto mt-10 max-w-5xl px-4">
      <header className="text-3xl font-semibold">
        <h1>계정</h1>
        <div className="mt-2 flex gap-2 text-lg">
          <div className="font-semibold">{session.user?.name ?? '사용자'}</div>
          <div className="font-semibold">ㆍ</div>
          <div className="font-semibold text-gray-500">
            {session.user?.email ?? '이메일이 없는 사용자입니다.'}
          </div>
        </div>
      </header>
      <MyPageSection session={session} />
    </main>
  )
}

export default MyPage
