import UserEditForm from './components/UserEditForm'

const UserEditPage = () => {
  return (
    <main>
      <header className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-900">개인정보수정</h2>
        <p className="mt-1 text-sm/6 text-gray-600">
          사용자님의 개인정보를 수정해주세요.
        </p>
      </header>
      <UserEditForm />
    </main>
  )
}

export default UserEditPage
