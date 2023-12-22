import mongoose, { Schema } from 'mongoose'
import { TReview } from './review.interface'

export const reviewSchema = new Schema<TReview>({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
})

const ReviewModel = mongoose.model<TReview>('Review', reviewSchema)

export default ReviewModel
