export interface ISelectOption {
  label: string
  value: string
}

export type ISort = 'asc' | 'desc'

export interface ISearchPrams {
  limit: number
  orderBy?: string
  page: number
  sort?: ISort
  search?: string
  [key: string]: any
}

export interface IMetaParams {
  currentPage: number
  itemsPerPage: number
  sortBy: string[]
  totalItems: number
  totalPages: number
}

export interface IOptions {
  id: string
  label: string
  value: string
}
