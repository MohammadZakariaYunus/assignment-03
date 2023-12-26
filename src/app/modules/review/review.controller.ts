import { RequestHandler } from 'express'
import { ReviewServices } from './review.service'
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../utils/catchAsync'

const createReview: RequestHandler = catchAsync(async (req, res) => {
  const reviewData = req.body
  const result = await ReviewServices.createReviewIntoDB(reviewData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review created successfully',
    data: result,
  })
})

const getReview: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewServices.getReviewIntoDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    // message: 'Category created successfully',
    data: result,
  })
})

export const reviewController = {
  createReview,
  getReview,
}
