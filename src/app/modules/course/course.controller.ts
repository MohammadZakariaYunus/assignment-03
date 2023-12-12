import catchAsync from '../../utils/catchAsync'
import { courseService } from './course.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const createCourse = catchAsync(async (req, res) => {
  const result = await courseService.createCourseIntoDb(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully',
    data: result,
  })
})

const getAllCourses = catchAsync(async (req, res) => {
  const result = await courseService.getAllCoursesFromDb(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved successfully',
    data: result,
  })
})

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await courseService.getSingleCourseFromDb(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  })
})

// const updateAcademicFaculty = catchAsync(async (req, res) => {
//   const { facultyId } = req.params
//   const result = await courseService.deleteCourseFromDb(facultyId, req.body)

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic faculty is updated succesfully',
//     data: result,
//   })
// })

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await courseService.deleteCourseFromDb(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course are deleted successfully',
    data: result,
  })
})

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
}
