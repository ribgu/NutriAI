import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'
import Client from '@/libs/clients/client'
import { ActivityType } from '@/types/ActivityType'

const client = new Client()

export function useGetActivityList(activitieType?: ActivityType) {
  const { user } = useAuth()
  
  return useQuery({
    queryKey: ['activities', user?.id],
    queryFn: async () => {
      const response = await client.getActivityRecords({ userId: user?.id || '', type: activitieType })
      
      return response.records
    },
    enabled: !!user
  })
}