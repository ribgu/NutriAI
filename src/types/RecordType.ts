export type RecordType = 'WATER' | 'MEAL' | 'EXERCISE' | 'SLEEP'

export type WaterRecord = {
  waterAmount: string
}

export type MealRecord = {
  foodDescription: string
}

export type ExerciseRecord = {
  trainingDescription: string
}

export type SleepRecord = {
  sleepStart: string
  sleepEnd: string
  sleepHours: string
}

export type RecordInfo = WaterRecord | MealRecord | ExerciseRecord | SleepRecord

export interface ActivityRecord {
  type: RecordType
  RecordInfo: RecordInfo
  createdAt: string
  userId: string
}
