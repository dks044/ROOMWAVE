import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <div className="mt-20 p-10 min-h-[80vh]">{children}</div>
}

export default HomeLayout
