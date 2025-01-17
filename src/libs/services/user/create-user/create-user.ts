import { prisma } from '../../../clients/prisma-client'
import { Prisma } from '@prisma/client'
import { hash } from 'bcryptjs'

export type CreateUserCommand = {
  email: string
  password: string
  name: string
  weight: number
  height: number
  additionalInfo?: Prisma.JsonValue
}

export async function createUser(user: CreateUserCommand) {
  const { email, password, name, weight, height, additionalInfo } = user

  const hashedPassword = await hash(password, 10)
  console.log('password:', password)
  console.log('Hashed password:', hashedPassword)

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    throw new Error('Usuário já cadastrado')
  }

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    }
  })

  await prisma.profileHistory.create({
    data: {
      userId: newUser.id,
      weight,
      height,
      healthInfo: additionalInfo || Prisma.JsonNull
    }
  })
}
