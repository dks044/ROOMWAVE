import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    console.log('[세션 유저]', session?.user) // 이거 꼭 찍어봐라
    if (!session?.user) {
      return NextResponse.json(
        {
          error: 'unauthorized user',
        },
        { status: 401 },
      )
    }

    const formData = await req.json()
    console.log('[🔥formData]', formData)

    if (!formData || typeof formData !== 'object') {
      return NextResponse.json({ error: 'invalid body' }, { status: 400 })
    }

    const { roomId } = formData
    console.log('[roomId]', roomId)
    //Like 데이터가 있는지 아닌지 확인 상태 (있다면 찜하기임)
    let like = await prisma?.like.findFirst({
      where: {
        roomId,
        userId: session?.user?.id,
      },
    })

    //이미 찜을 함
    if (like) {
      like = await prisma?.like.delete({
        where: {
          id: like.id,
        },
      })
      return NextResponse.json(like, {
        status: 200,
      })
    } else {
      //찜을 하지않았으므로 생성
      like = await prisma?.like.create({
        data: {
          roomId,
          userId: session?.user?.id,
        },
      })

      return NextResponse.json(like, {
        status: 201,
      })
    }
  } catch (error) {
    return NextResponse.json(
      { error: `server error: ${error}` },
      { status: 500 },
    )
  }
}
