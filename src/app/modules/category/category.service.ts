import { TCategory } from './category.interface'
import Category from './category.model'

const createCategoryIntoDB = async (categoryData: TCategory) => {
  const result = await Category.create(categoryData)
  return result
}

const getAllCategoriesFromDB = async () => {
  const result = await Category.find()
  return result
}

export const categoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
}
