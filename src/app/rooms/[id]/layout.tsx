import { ReactNode } from 'react'

const RoomLayout = ({ children }: { children: ReactNode }) => {
  return <div className="mt-20 min-h-[80vh] py-2 sm:p-10">{children}</div>
}

export default RoomLayout
