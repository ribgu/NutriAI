import { prisma } from '@/libs/clients/prisma-client'
import { getActivityCommand } from '@/types/GetActivityCommand'
import { ActivityRecord } from '@/types/RecordType'

export async function getActivities(command: getActivityCommand): Promise<ActivityRecord[]> {
  const { userId, type } = command
  
  const records = await prisma.record.findMany({
    where: {
      userId,
      ...(type && { type })
    },
    select: {
      type: true,
      RecordInfo: true,
      createdAt: true,
      userId: true
    }
  })

  return records.map(record => ({
    ...record,
    createdAt: record.createdAt.toISOString()
  })) as ActivityRecord[]
}