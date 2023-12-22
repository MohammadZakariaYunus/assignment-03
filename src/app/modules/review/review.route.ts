import express from 'express'
import { reviewController } from './review.controller'
import validateRequest from '../../middlewares/validateRequest'
import { reviewValidation } from './review.validation'

const router = express.Router()

router.post(
  '/reviews',
  validateRequest(reviewValidation.createReviewValidationSchema),
  reviewController.createReview
)
router.get('/reviews', reviewController.getReview)

export const reviewRoutes = router
