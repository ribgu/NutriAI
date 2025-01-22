export type WaterRecordInfo = {
  waterAmount: string
}

export type MealRecordInfo = {
  foodDescription: string
}

export type ExerciseRecordInfo = {
  trainingDescription: string
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
