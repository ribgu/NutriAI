export type ActivityRecord = {
  userId: string
  type: 'WATER' | 'MEAL' | 'EXERCISE' | 'SLEEP'
  RecordInfo: Record<string, any>
  createdAt?: string
}
