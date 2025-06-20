import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

import prisma from '@/lib/prismadb'

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json(
        {
          error: 'Unauthorized user',
        },
        {
          status: 401,
        },
      )
    }
    const user = await prisma.user.findFirst({
      where: {
        id: session?.user?.id,
      },
      include: {
        accounts: true,
      },
    })

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error: `Server error : ${error}`,
      },
      {
        status: 401,
      },
    )
  }
}
