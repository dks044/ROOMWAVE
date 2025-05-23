import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await prisma.faq.findMany()
  return NextResponse.json(data, { status: 200 })
}
