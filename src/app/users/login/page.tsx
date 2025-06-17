import Authform from '../components/Authform'

const LoginPage = () => {
  return (
    <main className="flex justify-center">
      <section className="flex flex-col">
        <h1 className="flex w-full justify-center border-b-2 pb-8 sm:w-[40vw] sm:pb-8">
          <div className="text-md font-semibold sm:text-lg">
            로그인 또는 회원가입
          </div>
        </h1>
        <h1 className="mt-2 text-2xl font-semibold sm:text-xl">
          ROOMWAVE에 오신것을 환영합니다
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          SNS계정을 이용해서 로그인 또는 회원가입을 해주세요.
        </p>
        <div className="mt-7">
          <Authform />
        </div>
      </section>
    </main>
  )
}

export default LoginPage
