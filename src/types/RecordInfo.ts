export type WaterRecordInfo = {
  waterAmount: number
  waterDateHour?: Date | string
}

export type MealRecordInfo = {
  foodDescription: string
}

export type ExerciseRecordInfo = {
  trainingDescription: string
  type?: string
}

export type SleepRecordInfo = {
  sleepStart: string
  sleepEnd: string
  sleepHours: string
}

export type RecordInfo = 
  | WaterRecordInfo 
  | MealRecordInfo 
  | ExerciseRecordInfo 
  | SleepRecordInfo
