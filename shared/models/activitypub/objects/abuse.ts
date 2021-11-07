import { ActivityFlagReasonObject } from './common'

export interface AbuseObject {
  type: 'Flag'
  content: string
  object: string | string[]

  tag?: ActivityFlagReasonObject[]

  startAt?: number
  endAt?: number
}