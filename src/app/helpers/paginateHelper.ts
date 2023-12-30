import { Query } from 'mongoose'
import { TQueryObj } from './TQueryObj'

export const paginate = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  if (query.page) {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    const skip = (page - 1) * limit
    modelQuery.skip(skip).limit(limit)
  } else if (query.limit) {
    const limit = Number(query.limit) || 10
    modelQuery.limit(limit)
  } else {
    modelQuery.skip(0).limit(10)
  }

  return modelQuery
}
