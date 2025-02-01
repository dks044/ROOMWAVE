import prisma from '@/lib/prismadb'

const getRooms = async () => {
  const data = await prisma.room.findMany()

  return { data }
}

export default getRooms
