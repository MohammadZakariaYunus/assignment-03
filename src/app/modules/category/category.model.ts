import { Schema, model } from 'mongoose'
import { TCategory } from './category.interface'

const categorySchema = new Schema<TCategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

categorySchema.pre('save', async function (next) {
  const isCategoryExists = await Category.findOne({
    name: this.name,
  })
  if (isCategoryExists) {
    throw new Error(`${isCategoryExists.name} all ready Exists`)
  }
})

const Category = model<TCategory>('Category', categorySchema)
export default Category
