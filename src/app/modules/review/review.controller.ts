import { RequestHandler } from 'express'
import catchAsync from '../../../utils/catchAsync'
import sendResponse from '../../../utils/sendResponse'
import { ReviewServices } from './review.service'

const createReview: RequestHandler = catchAsync(async (req, res) => {
  const reviewData = req.body
  const result = await ReviewServices.createReviewIntoDB(reviewData)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Review created successfully',
    data: result,
  })
})

const getReview: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewServices.getReviewIntoDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})

export const reviewController = {
  createReview,
  getReview,
}
