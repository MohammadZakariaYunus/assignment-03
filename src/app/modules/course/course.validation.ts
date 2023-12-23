import { z } from 'zod'
const tagsValidationSchema = z.object({
  name: z.string().min(1),
  isDeleted: z.boolean().default(false),
})

const detailsValidationSchema = z.object({
  level: z.string(),
  description: z.string(),
})

const reviewValidationSchema = z.object({
  courseId: z.string(),
  rating: z.number().min(1).max(5),
  review: z.string(),
})

const createCourseValidateSchema = z.object({
  body: z.object({
    title: z.string(),
    instructor: z.string(),
    categoryId: z.string(),
    price: z.number(),
    tags: z.array(tagsValidationSchema),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string().min(1),
    details: detailsValidationSchema,
    reviews: reviewValidationSchema.optional(),
  }),
})

// Update Schemas

const updateTagsValidationSchema = z.object({
  name: z.string().min(1).optional(),
  isDeleted: z.boolean().default(false),
})

const updateDetailsValidationSchema = z.object({
  level: z.string().optional(),
  description: z.string().optional(),
})

const updateCourseValidateSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    instructor: z.string().optional(),
    categoryId: z.string().optional(),
    price: z.number().optional(),
    tags: z.array(updateTagsValidationSchema).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    language: z.string().optional(),
    provider: z.string().min(1).optional(),
    details: updateDetailsValidationSchema.optional(),
  }),
})

export const courseValidateSchema = {
  createCourseValidateSchema,
  updateCourseValidateSchema,
}
