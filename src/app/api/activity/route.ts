import { prisma } from '@/libs/clients/prisma-client'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const activitySchema = z.object({
  userId: z.string(),
  type: z.enum(['WATER', 'MEAL', 'EXERCISE', 'SLEEP']),
  RecordInfo: z.record(z.any())
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = activitySchema.parse(body)

    const newRecord = await prisma.record.create({
      data: {
        userId: validatedData.userId,
        type: validatedData.type,
        RecordInfo: validatedData.RecordInfo
      }
    })

    return NextResponse.json(
      { message: 'Registro de atividade criado com sucesso', record: newRecord },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Dados inválidos', errors: error.errors },
        { status: 400 }
      )
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { message: 'userId é obrigatório' },
        { status: 400 }
      )
    }

    const records = await prisma.record.findMany({
      where: { userId }
    })

    return NextResponse.json(
      { records },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
