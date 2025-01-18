import { ActivityType } from "./ActivityType"

export type getActivityCommand = {
    userId: string
    type: ActivityType
}
  