import { prisma } from '@/libs/clients/prisma-client'
import { getActivityCommand } from '@/types/GetActivityCommand'

export async function getActivities(command: getActivityCommand) {
  const { userId, type } = command
  
  const records = await prisma.record.findMany({
    where: {
      userId,
      ...(type && { type })
    }
  })

  return records
}