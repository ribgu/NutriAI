import { useQuery } from '@tanstack/react-query'
import Client from '@/libs/clients/client'
import { useAuth } from '@/contexts/AuthContext'

export function useGetActivityList() {
  const { getUserId } = useAuth()
  const client = new Client()
  
  const userId = getUserId()

  return useQuery({
    queryKey: ['activities', userId],
    queryFn: async () => {
      if (!userId) throw new Error('Usuário não autenticado')
      const response = await client.getActivityRecords({ userId })
    
      return response.records
    },
    enabled: !!userId
  })
}