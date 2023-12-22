import { RequestHandler } from 'express'
import { courseServices } from './course.service'
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../utils/catchAsync'
import ReviewModel from '../review/review.model'

const createCourse: RequestHandler = catchAsync(async (req, res) => {
  const courseData = req.body
  const result = await courseServices.createCourseIntoDB(courseData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})

const getCourse: RequestHandler = catchAsync(async (req, res) => {
  const result = await courseServices.getCourseIntoDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    // message: 'Category created successfully',
    data: result,
  })
})
const getSingleCourse: RequestHandler = catchAsync(async (req, res) => {
  const { courseId } = req.params
  const result = await courseServices.getSingleCourseIntoDB(courseId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    // message: 'Category created successfully',
    data: result,
  })
})

const updateCourse: RequestHandler = catchAsync(async (req, res) => {
  const { courseId } = req.params
  // Remove the following line
  // const { courseData } = req.body;

  // Use req.body directly
  const result = await courseServices.updateCourseIntoDB(courseId, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  })
})

const getSingleCourseReview: RequestHandler = catchAsync(async (req, res) => {
  const { courseId } = req.params
  const result = await courseServices.getSingleCourseReviewIntoDB(courseId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    // message: 'Category created successfully',
    data: result,
  })
})

export const courseController = {
  createCourse,
  getCourse,
  updateCourse,
  getSingleCourse,
  getSingleCourseReview,
}
