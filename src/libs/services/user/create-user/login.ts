import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../../../clients/prisma-client'

export type LoginCommand = {
  email: string
  password: string
}

export async function login(loginData: LoginCommand) {
  const user = await prisma.user.findUnique({ where: { email: loginData.email } })
  const JWT_SECRET = process.env.JWT_SECRET!

  if (!user) {
    throw new Error('Credenciais inválidas, o usuário não existe')
  }

  const isPasswordValid = await compare(loginData.password, user.password)

  if (!isPasswordValid) {
    throw new Error('Credenciais inválidas, a senha está incorreta')
  }

  const token = jwt.sign(
    { userId: user.id },
    JWT_SECRET,
    { expiresIn: '7d' }
  )

  return { token, user }
}
