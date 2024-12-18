import { login } from '@/libs/services/user/create-user/login'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = signInSchema.parse(body)
    const loginData = { email: validatedData.email, password: validatedData.password }

    const { token, user } = await login(loginData)

    return NextResponse.json(
      { message: 'Login realizado com sucesso', token, user },
      { status: 200 }
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
        { status: 401 }
      )
    }

    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
