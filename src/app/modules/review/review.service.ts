import { Types } from 'mongoose'
import CourseModel from '../course/course.model'
import { TReview } from './review.interface'
import ReviewModel from './review.model'

const createReviewIntoDB = async (reviewData: TReview) => {
  if (typeof reviewData.courseId === 'string') {
    reviewData.courseId = new Types.ObjectId(reviewData.courseId)
  }
  const result = await ReviewModel.create(reviewData)
  await CourseModel.findByIdAndUpdate(
    reviewData.courseId,
    { $push: { reviews: result._id } },
    { new: true }
  )

  return result
}

const getReviewIntoDB = async () => {
  const result = await ReviewModel.find()
  return result
}

export const ReviewServices = {
  createReviewIntoDB,
  getReviewIntoDB,
}
