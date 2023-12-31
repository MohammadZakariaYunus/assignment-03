import { RequestHandler } from 'express'
import catchAsync from '../../../utils/catchAsync'
import sendResponse from '../../../utils/sendResponse'
import { courseServices } from './course.service'

const createCourse: RequestHandler = catchAsync(async (req, res) => {
  const courseData = req.body
  const result = await courseServices.createCourseIntoDB(courseData)
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Category created successfully',
    data: result,
  })
})

const getCourses: RequestHandler = catchAsync(async (req, res) => {
  const result = await courseServices.getCourseIntoDB(req.query)
  let page = Number(req.query.page)
  let limit = Number(req.query.limit)
  let total = Number(result.length)
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'Courses retrieved successfully',
    meta: {
      page: page,
      limit: limit || total,
      total: total,
    },
    data: result,
  })
})

const getSingleCourse: RequestHandler = catchAsync(async (req, res) => {
  const { courseId } = req.params
  const result = await courseServices.getSingleCourseIntoDB(courseId)
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  })
})

const updateCourse: RequestHandler = catchAsync(async (req, res) => {
  const { courseId } = req.params
  const result = await courseServices.updateCourseIntoDB(courseId, req.body)
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'Course updated successfully',
    data: result,
  })
})

const getSingleCourseReview: RequestHandler = catchAsync(async (req, res) => {
  const { courseId } = req.params
  const result = await courseServices.getSingleCourseReviewIntoDB(courseId)
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'Course and Reviews retrieved successfully',
    data: result,
  })
})

const getBestCourse: RequestHandler = catchAsync(async (req, res) => {
  const result = await courseServices.getBestCourse()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Best course retrieved successfully',
    data: result,
  })
})

export const courseController = {
  createCourse,
  getCourses,
  updateCourse,
  getSingleCourse,
  getSingleCourseReview,
  getBestCourse,
}
