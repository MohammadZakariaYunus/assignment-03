import { z } from 'zod'

const courseTitlesValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    isDeleted: z.boolean().optional(),
  }),
})

const courseDetailsValidationSchema = z.object({
  body: z.object({
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    description: z.string(),
  }),
})

const createCourseValidationSchema = z.object({
  body: z.object({
    _id: z.string(),
    title: z.array(courseTitlesValidationSchema),
    instructor: z.string(),
    categoryId: z.string(),
    price: z.number(),
    tags: z.array(z.object({})),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string(),
    durationInWeeks: z.number(),
    details: courseDetailsValidationSchema,
  }),
})

export const CourseValidation = {
  createCourseValidationSchema,
}
