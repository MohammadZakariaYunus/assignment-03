import express from 'express'
import { courseController } from './course.controller'
import validateRequest from '../../middlewares/validateRequest'
import { courseValidateSchema } from './course.validation'

const router = express.Router()

router.post(
  '/course',
  validateRequest(courseValidateSchema.createCourseValidateSchema),
  courseController.createCourse
)
router.get('/course', courseController.getCourse)
router.get('/course/best', courseController.getBestCourse)
router.get('/course/:courseId', courseController.getSingleCourse)
router.put(
  '/course/:courseId',
  validateRequest(courseValidateSchema.updateCourseValidateSchema),
  courseController.updateCourse
)
router.get('/course/:courseId/reviews', courseController.getSingleCourseReview)

export const courseRoutes = router
