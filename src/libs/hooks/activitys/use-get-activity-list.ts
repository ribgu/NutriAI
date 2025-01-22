import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/contexts/AuthContext'
import Client from '@/libs/clients/client'

const client = new Client()

export function useGetActivityList() {
  const { user } = useAuth()
  
  return useQuery({
    queryKey: ['activities', user?.id],
    queryFn: async () => {
      const response = await client.getActivityRecords({ userId: user?.id || '' })
      
      return response.records
    },
    enabled: !!user
  })
}