import CourseModel from './course.model'
import { TCourse } from './course.interface'

const calculateDurationInWeeks = (
  startDate: string,
  endDate: string
): number => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const timeDifference = end.getTime() - start.getTime()
  const weeks = Math.ceil(timeDifference / (1000 * 60 * 60 * 24 * 7))
  return weeks
}

const createCourseIntoDB = async (courseData: TCourse) => {
  const durationInWeeks = calculateDurationInWeeks(
    courseData.startDate,
    courseData.endDate
  )
  const updatedCourseData = {
    ...courseData,
    durationInWeeks,
  }
  const result = await CourseModel.create(updatedCourseData)
  return result
}

const getCourseIntoDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query }
  let searchTerm = ''

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string
  }
  const result = await CourseModel.find({
    $or: ['title', 'instructor'].map(field => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  })
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

const getBestCourse = async () => {
  const result = await CourseModel.aggregate([
    {
      $addFields: {
        reviews: { $ifNull: ['$reviews', []] },
      },
    },
    {
      $unwind: {
        path: '$reviews',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: '$_id',
        averageRating: { $avg: '$reviews.rating' },
        reviewCount: { $sum: 1 },
        course: { $first: '$$ROOT' },
      },
    },
    {
      $sort: { averageRating: -1, reviewCount: -1 },
    },
    {
      $limit: 1,
    },
    {
      $project: {
        _id: 1,
        reviewCount: 1,
        course: 1,
        averageRating: { $ifNull: ['$averageRating', 0] },
      },
    },
  ])

  if (result.length === 0) {
    throw new Error('No courses found')
  }

  return result[0]
}

export const courseServices = {
  createCourseIntoDB,
  getCourseIntoDB,
  getSingleCourseIntoDB,
  updateCourseIntoDB,
  getSingleCourseReviewIntoDB,
  getBestCourse,
}
