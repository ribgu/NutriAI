import { useMutation, useQueryClient } from '@tanstack/react-query'
import Client from '@/libs/clients/client'
import { ActivityRecord } from '@/types/ActivityRecord'

export function useSaveActivity() {
  const client = new Client()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: ActivityRecord) => client.createActivityRecord(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] })
    }
  })
}
