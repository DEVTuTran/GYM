export type ISort = 'asc' | 'desc'

export type DateTimeFormat = 'YYYY/MM/DD HH:mm' | 'YYYY年MM月DD日' | 'YYYY/MM/DD'

export interface ISelectOption {
  label: string
  value: string
}

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
