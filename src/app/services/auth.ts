import { api } from './api'
import { API_ENDPOINT } from '../../constants/endpoint'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ access_token: string }, any>({
      query: (credentials: { email: string; password: string }) => ({
        url: API_ENDPOINT.AUTH_LOGIN,
        method: 'POST',
        body: credentials
      })
    }),
    profile: build.query<{ user: { email: string } }, any>({
      query: () => ({
        url: API_ENDPOINT.AUTH_PROFILE,
        method: 'GET'
      }),
      providesTags: ['Auth']
    })
  })
})

export const { useLoginMutation, useProfileQuery } = authApi
