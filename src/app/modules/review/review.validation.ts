import { z } from 'zod'

const createReviewValidationSchema = z.object({
  body: z.object({
    courseId: z.string(),
    rating: z.number().min(1).max(5),
    review: z.string(),
  }),
})

export const reviewValidation = {
  createReviewValidationSchema,
}
