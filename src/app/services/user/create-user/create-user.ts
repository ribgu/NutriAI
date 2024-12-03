import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { prisma } from '@/app/clients/prisma-client'

export async function createUser(user: User) {
  const { email, password, name } = user

  const hashedPassword = await hash(password, 10)

  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    }
  })
}
