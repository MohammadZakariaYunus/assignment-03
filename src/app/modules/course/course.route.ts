import express from 'express'
import { CourseValidation } from './course.validation'
import { CourseController } from './course.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post(
  '/create-course',
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseController.createCourse
)

router.delete('/:id', CourseController.deleteCourse)

router.get('/:id', CourseController.getSingleCourse)

// router.patch(
//   '/:facultyId',
//   validateRequest(
//     AcademicFacultyValidation.updateAcademicFacultyValidationSchema
//   ),
//   AcademicFacultyControllers.updateAcademicFaculty
// )

router.get('/', CourseController.getAllCourses)

export const CourseRoutes = router
