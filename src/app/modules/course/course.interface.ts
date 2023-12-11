import { Types } from 'mongoose'

export type TTags = {
  name: string
  isDeleted: boolean
}
export type TDetails = {
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
}

export type TCourse = {
  _id: Types.ObjectId
  title: string
  instructor: string
  categoryId: Types.ObjectId
  price: number
  tags: [TTags]
  startDate: string
  endDate: string
  language: string
  provider: string
  durationInWeeks: number
  details: TDetails
}

export type TCategory = {
  _id: Types.ObjectId
  name: string
}

export type TReview = {
  _id: Types.ObjectId
  courseId: Types.ObjectId
  rating: number
  review: string
}
