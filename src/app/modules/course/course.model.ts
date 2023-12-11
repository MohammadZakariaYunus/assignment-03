import { Schema, model } from 'mongoose'
import { TCourse, TDetails, TTags } from './course.interface'

const tagsScheme = new Schema<TTags>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const courseDetailsScheme = new Schema<TDetails>({
  level: {
    type: String,
    enum: {
      values: ['Beginner', 'Intermediate', 'Advanced'],
      message: '{VALUE} is not a valid level',
    },
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const courseScheme = new Schema<TCourse>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: [tagsScheme],
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  durationInWeeks: {
    type: Number,
    required: true,
  },
  details: {
    courseDetailsScheme,
  },
  provider: {
    type: String,
    required: true,
  },
})

export const Course = model<TCourse>('Course', courseScheme)
