export type TQueryObj = {
  [key: string]: unknown
  page?: string
  searchTerm?: string
  limit?: string
  sortBy?: string
  sortOrder?: string
  fields?: string
  minPrice?: string
  maxPrice?: string
}
