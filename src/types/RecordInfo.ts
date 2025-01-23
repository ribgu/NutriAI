export type WaterRecordInfo = {
  waterAmount: number
  waterDateHour?: Date | string
}

export type MealRecordInfo = {
  mealType: string
  mealTime: string
  foodDescription: string
  hasBeverage: boolean
  beverageDescription: string
  beverageAmount: string
  location: string
  hungerLevel: string
  moodAfterEating: string
  estimatedCalories: string
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
