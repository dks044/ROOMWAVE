import { ReactNode } from 'react'

const FaqLayout = ({ children }: { children: ReactNode }) => {
  return <div className="mt-20 min-h-[80vh] p-10">{children}</div>
}

export default FaqLayout
