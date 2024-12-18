import { NextResponse } from 'next/server'
import { createUser, CreateUserCommand } from '@/libs/services/user/create-user/create-user'
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
  weight: z.number().positive(),
  height: z.number().positive(),
  additionalInfo: z.record(z.any()).optional()
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData: CreateUserCommand = signUpSchema.parse(body)

    await createUser(validatedData)

    return NextResponse.json(
      { message: 'Usuário criado com sucesso' },
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
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Hello World' }
  )
}