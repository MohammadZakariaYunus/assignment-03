import CourseModel from './course.model'
import { TCourse } from './course.interface'

const createCourseIntoDB = async (courseData: TCourse) => {
  const result = await CourseModel.create(courseData)
  return result
}
const getCourseIntoDB = async () => {
  const result = await CourseModel.find().populate('reviews')
  return result
}
const getSingleCourseIntoDB = async (id: string) => {
  const result = await CourseModel.findById(id)
  return result
}

// Update Data

const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
  const { tags, details, ...remainingStudentData } = payload

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  }

  if (tags && Object.keys(tags).length) {
    for (const [key, value] of Object.entries(tags)) {
      modifiedUpdatedData[`tags.${key}`] = value
    }
  }

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value
    }
  }

  const result = await CourseModel.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
  })
  return result
}

// Get Single Data

const getSingleCourseReviewIntoDB = async (id: string) => {
  const result = await CourseModel.findById(id).populate('reviews')
  return result
}

// const getSingleCourseIntoDB = async (id: string) => {
//   const course = await CourseModel.findById(id)
//   const review = ReviewModel.findById(id).populate('courseId')
//   const result = { course, review }
//   return result
// }

export const courseServices = {
  createCourseIntoDB,
  getCourseIntoDB,
  getSingleCourseIntoDB,
  updateCourseIntoDB,
  getSingleCourseReviewIntoDB,
}
