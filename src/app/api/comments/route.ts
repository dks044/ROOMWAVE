import { authOptions } from '@/lib/authOptions'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

//무한스크롤로 댓글가져올려고함
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const roomId = searchParams.get('roomId') as string
    const limit = searchParams.get('limit') as string
    const page = searchParams.get('page') as string

    // page 값이 있는 경우 => 댓글 모달 리스트 무한 스크롤
    if (page) {
      const count = await prisma.comment.count({
        where: { roomId: parseInt(roomId) },
      })

      const skipPage = parseInt(page) - 1
      const comments = await prisma.comment.findMany({
        orderBy: { createdAt: 'desc' },
        take: parseInt(limit),
        where: {
          roomId: roomId ? parseInt(roomId) : {},
        },
        skip: skipPage * parseInt(limit),
        include: {
          User: true,
        },
      })

      return NextResponse.json(
        {
          page: parseInt(page),
          data: comments,
          totalCount: count,
          totalPage: Math.ceil(count / parseInt(limit)),
        },
        {
          status: 200,
        },
      )
    } else {
      // page 값이 없는 경우, limit 값 기준으로 최신 데이터 가져오기
      const count = await prisma.comment.count({
        where: { roomId: parseInt(roomId) },
      })

      const comments = await prisma.comment.findMany({
        orderBy: { createdAt: 'desc' },
        take: parseInt(limit),
        where: {
          roomId: roomId ? parseInt(roomId) : {},
        },
        include: {
          User: true,
        },
      })

      return NextResponse.json(
        {
          data: comments,
          totalCount: count,
        },
        { status: 200 },
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: `server error: ${error}` },
      { status: 500 },
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const formData = await req.json()

    const { roomId, body } = formData

    if (!session?.user) {
      return NextResponse.json({ error: `Unauthorized user` }, { status: 401 })
    }

    const comment = await prisma.comment.create({
      data: {
        roomId,
        body,
        userId: session?.user.id,
      },
    })

    return NextResponse.json(comment, {
      status: 200,
    })
  } catch (error) {
    return NextResponse.json(
      { error: `server error: ${error}` },
      { status: 500 },
    )
  }
}
