import { api } from './api'
import { IOptions } from '../../models/Common'
import { API_ENDPOINT } from '../../constants/endpoint'

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    categories: build.query<IOptions[], any>({
      query: () => ({
        url: API_ENDPOINT.CATEGORIES,
        method: 'GET'
      }),
      providesTags: ['Category']
    })
  })
})

export const { useCategoriesQuery } = categoryApi
