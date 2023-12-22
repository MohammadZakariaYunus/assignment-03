import { TReview } from './review.interface'
import ReviewModel from './review.model'

const createReviewIntoDB = async (reviewData: TReview) => {
  const result = await ReviewModel.create(reviewData)
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
