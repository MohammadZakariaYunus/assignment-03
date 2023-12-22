import express from 'express'
import { categoryController } from './category.controller'
import validateRequest from '../../middlewares/validateRequest'
import { categoryValidateSchema } from './category.validation'

const router = express.Router()

router.post(
  '/categories',
  validateRequest(categoryValidateSchema.createCategoryValidateSchema),
  categoryController.createCategory
)
router.get('/categories', categoryController.getAllCategories)

export const categoriesRoutes = router
