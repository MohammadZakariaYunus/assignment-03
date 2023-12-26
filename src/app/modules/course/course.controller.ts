import { RequestHandler } from 'express'
import { courseServices } from './course.service'
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../utils/catchAsync'

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
  const result = await courseServices.getCourseIntoDB(req.query)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
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
    message: 'Course and Reviews retrieved successfully',
    data: result,
  })
})

const getBestCourse: RequestHandler = catchAsync(async (req, res) => {
  const result = await courseServices.getBestCourse()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Best course retrieved successfully',
    data: result,
  })
})

export const courseController = {
  createCourse,
  getCourse,
  updateCourse,
  getSingleCourse,
  getSingleCourseReview,
  getBestCourse,
}
