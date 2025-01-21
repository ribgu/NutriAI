import { useQuery } from '@tanstack/react-query'
import Client from '@/libs/clients/client'
import { useAuth } from '@/contexts/AuthContext'

export function useGetActivityList() {
  const { user } = useAuth()
  const client = new Client()

  return useQuery({
    queryKey: ['activities', user?.id],
    queryFn: async () => {
      if (!user) throw new Error('Usuário não autenticado')
      const response = await client.getActivityRecords({ userId: user.id, type: 'WATER' })

      return response.records
    },
    enabled: !!user
  })
}