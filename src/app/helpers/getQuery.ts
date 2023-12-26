import { Query } from 'mongoose'
import { TQueryObj } from './TQueryObj'
import { filter } from './filterHelpers'
import { search } from './searchHelpers'
import { sort } from './sortHelper'
import { paginate } from './paginateHelper'
import { select } from './fieldSelectHelper'

export const getQuery = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  const filteredQuery = filter(modelQuery, query)
  const searchedQuery = search(filteredQuery, query)
  const sortedQuery = sort(searchedQuery, query)
  const paginatedQuery = paginate(sortedQuery, query)
  const selectedFieldQuery = select(paginatedQuery, query)
  return selectedFieldQuery
}
