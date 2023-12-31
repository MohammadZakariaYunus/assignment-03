import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { courseController } from './course.controller'
import { courseValidateSchema } from './course.validation'

const router = express.Router()

router.post(
  '/course',
  validateRequest(courseValidateSchema.createCourseValidateSchema),
  courseController.createCourse
)
router.get('/courses', courseController.getCourses)
router.get('/course/best', courseController.getBestCourse)
router.get('/courses/:courseId', courseController.getSingleCourse)
router.put(
  '/courses/:courseId',
  validateRequest(courseValidateSchema.updateCourseValidateSchema),
  courseController.updateCourse
)
router.get('/courses/:courseId/reviews', courseController.getSingleCourseReview)

export const courseRoutes = router
