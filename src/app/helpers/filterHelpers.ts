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
    'startDate',
    'endDate',
  ]

  excludeField.forEach(keyWord => delete queryObj[keyWord])

  // max & min Price

  if (query.minPrice !== undefined) {
    queryObj.price = { $gte: parseFloat(query.minPrice) }
  }
  if (query.maxPrice !== undefined) {
    queryObj.price = {
      ...(queryObj.price || {}),
      $lte: parseFloat(query.maxPrice),
    }
  }

  // Tags

  if (query.tags !== undefined) {
    const tags = Array.isArray(query.tags) ? query.tags : [query.tags]
    queryObj.tags = { $elemMatch: { name: { $in: tags } } }
  }

  // details

  if (query.level !== undefined) {
    queryObj['details.level'] = query.level
  }
  modelQuery = modelQuery.find(queryObj)

  // Date
  if (query.startDate !== undefined || query.endDate !== undefined) {
    queryObj.startDate = {} as Record<string, any>

    if (query.startDate !== undefined && query.startDate !== null) {
      ;(queryObj.startDate as Record<string, any>).$gte = new Date(
        String(query.startDate)
      )
    }

    if (query.endDate !== undefined && query.endDate !== null) {
      ;(queryObj.startDate as Record<string, any>).$lte = new Date(
        String(query.endDate)
      )
    }
  }

  // Return Data
  return modelQuery
}
