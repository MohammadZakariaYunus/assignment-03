import { z } from 'zod'

const createCategoryValidateSchema = z.object({
  body: z.object({
    name: z.string().min(1).max(25),
  }),
})

export const categoryValidateSchema = {
  createCategoryValidateSchema,
}
