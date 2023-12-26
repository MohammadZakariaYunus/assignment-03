import { Query } from 'mongoose'
import { TQueryObj } from './TQueryObj'

export const filter = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  const queryObj = { ...query }
  const excludeField = [
    'page',
    'searchTerm',
    'limit',
    'sortBy',
    'sortOrder',
    'fields',
    'minPrice',
    'maxPrice',
    'level',
  ]

  excludeField.forEach(keyWord => delete queryObj[keyWord])
  if (query.minPrice !== undefined) {
    queryObj.price = { $gte: parseFloat(query.minPrice) }
  }

  if (query.maxPrice !== undefined) {
    queryObj.price = {
      ...(queryObj.price || {}),
      $lte: parseFloat(query.maxPrice),
    }
  }
  if (query.tags !== undefined) {
    const tags = Array.isArray(query.tags) ? query.tags : [query.tags]
    queryObj.tags = { $elemMatch: { name: { $in: tags } } }
  }
  if (query.level !== undefined) {
    queryObj['details.level'] = query.level
  }
  modelQuery = modelQuery.find(queryObj)
  return modelQuery
}
