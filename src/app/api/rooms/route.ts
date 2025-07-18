import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

/**
 * @api GET /api/rooms
 * @description
 * 페이지네이션 파라미터가 있을 경우, 해당 페이지에 해당하는 room 목록을 반환.
 * 파라미터가 없으면 전체 room 목록을 반환함.
 *
 * @queryParam page {string} - (선택) 요청할 페이지 번호 (1부터 시작)
 * @queryParam limit {string} - (선택) 페이지 당 항목 수
 *
 * @returns {JSON}
 * - page: 요청한 페이지 번호
 * - data: room 리스트
 * - totalCount: 전체 room 개수
 * - totalPage: 총 페이지 수
 *
 * @example
 * // GET /api/rooms?page=2&limit=10
 * {
 *   "page": 2,
 *   "data": [ ... ],
 *   "totalCount": 45,
 *   "totalPage": 5
 * }
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get('page') as string
  const limit = searchParams.get('limit') as string
  const id = searchParams.get('id') as string

  const session = await getServerSession()

  if (id) {
    //상세 페이지 로직 ㄱㄱ
    const room = await prisma.room.findFirst({
      where: {
        id: parseInt(id),
      },
      include: {
        likes: {
          where: session ? { userId: session?.user?.id } : {},
        },
      },
    })
    return NextResponse.json(room, {
      status: 200,
    })
  } else if (page) {
    //무한 스토롤 로직 적용 ㄱㄱ
    const count = await prisma.room.count()
    const skipPage = parseInt(page) - 1
    const rooms = await prisma.room.findMany({
      orderBy: { id: 'asc' },
      take: parseInt(limit),
      skip: skipPage * parseInt(limit),
    })

    return NextResponse.json(
      {
        page: parseInt(page),
        data: rooms,
        totalCount: count,
        totalPage: Math.ceil(count / parseInt(limit)),
      },
      { status: 200 },
    )
  } else {
    const data = await prisma.room.findMany()

    return NextResponse.json(data, { status: 200 })
  }
}
