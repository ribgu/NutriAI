import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../../../clients/prisma-client'

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  const JWT_SECRET = process.env.JWT_SECRET!
  const JWT_EXPIRATION = process.env.JWT_EXPIRATION!

  if (!user) {
    throw new Error('Credenciais inválidas')
  }

  const isPasswordValid = await compare(password, user.password)

  if (!isPasswordValid) {
    throw new Error('Credenciais inválidas')
  }

  // Gerar token JWT
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

  return { token, user }
}
