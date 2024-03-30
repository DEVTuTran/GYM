import { useMemo, useState } from 'react'

import { ITEMS_PER_PAGE } from 'constants/common'
import { ISearchPrams, ISort } from 'models/Common'
import { removeFalsyProperty } from 'utils/common'

interface defaultRecord {
  id?: number | string

  [key: string]: any
}

interface IDefaultParamsProps<T extends defaultRecord, K extends ISearchPrams> {
  page?: number
  sort?: ISort
  orderBy?: keyof T
  rowsPerPage?: number
  search?: string
  extraParams?: Partial<K>
}

const sortAPIEnum = {
  asc: 'ascending',
  desc: 'descending'
}

function useTableParams<T extends defaultRecord = defaultRecord, K extends ISearchPrams = ISearchPrams>(
  params?: IDefaultParamsProps<T, K>
) {
  const [page, setPage] = useState(params?.page || 0)
  const [sort, setSort] = useState<ISort>(params?.sort || 'desc')
  const [orderBy, setOrderBy] = useState<keyof T>(params?.orderBy || 'id')
  const [rowsPerPage, setRowsPerPage] = useState(params?.rowsPerPage || ITEMS_PER_PAGE)
  const [search, setSearch] = useState<string>('')
  const [extraParams, setExtraParams] = useState<Partial<K> | undefined>(params?.extraParams)

  const searchParams = useMemo(() => {
    return removeFalsyProperty({
      limit: rowsPerPage,
      orderBy,
      page: page + 1,
      search,
      sort: sortAPIEnum[sort],
      ...extraParams
    }) as K
  }, [rowsPerPage, page, sort, extraParams, orderBy, search])

  return {
    tableParams: {
      page,
      sort,
      orderBy,
      rowsPerPage,
      setPage,
      setSort,
      setOrderBy,
      setRowsPerPage
    },
    searchParams,
    search,
    setSearch,
    setExtraParams
  }
}

export default useTableParams
