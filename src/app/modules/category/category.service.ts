import { TCategory } from './category.interface'
import Category from './category.model'

// Creating Category

const createCategoryIntoDB = async (categoryData: TCategory) => {
  const result = await Category.create(categoryData)
  return result
}

// Get All Category

const getAllCategoriesFromDB = async () => {
  const result = await Category.find()
  return result
}

export const categoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
}
