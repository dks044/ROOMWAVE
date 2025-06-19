import { ReactNode } from 'react'

const UserLoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-20 min-h-[80vh] py-10 sm:p-10 sm:py-14">{children}</div>
  )
}

export default UserLoginLayout
