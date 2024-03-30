import { api } from './api'
import { IFranchise, IStoreDetailRes } from '../../models/Store'
import { RegisterSchemaType } from '../../libs/validation/register'
import { IMetaParams } from '../../models/Common'
import { API_ENDPOINT } from '../../constants/endpoint'

export const franchiseApi = api.injectEndpoints({
  endpoints: (build) => ({
    list: build.query<{ data: IStoreDetailRes[]; meta: IMetaParams }, any>({
      query: ({ limit, page }) => ({
        url: `${API_ENDPOINT.FRANCHISES}?limit=${limit}&page=${page}`,
        method: 'GET'
      }),
      providesTags: (result) => [
        ...(result?.data || []).map(({ id }) => ({ type: 'Franchise', id } as const)),
        { type: 'Franchise' as const, id: 'LIST' }
      ]
    }),
    getOneFranchise: build.query<IFranchise, string>({
      query: (id) => ({
        url: `${API_ENDPOINT.FRANCHISES}/${id}`,
        method: 'GET'
      }),
      providesTags: (_post, _err, id) => [{ type: 'Franchise', id }]
    }),
    register: build.mutation<RegisterSchemaType, any>({
      query: (data: RegisterSchemaType) => ({
        url: `${API_ENDPOINT.FRANCHISES}/create`,
        method: 'POST',
        body: data
      }),
      extraOptions: { maxRetries: 0 },
      invalidatesTags: [{ type: 'Franchise', id: 'LIST' }]
    }),
    export: build.mutation({
      query: () => ({
        url: `${API_ENDPOINT.FRANCHISES}/export-csv`,
        method: 'POST',
        responseHandler: async (response) => window.location.assign(window.URL.createObjectURL(await response.blob())),
        cache: 'no-cache'
      })
    }),
    createStripeAccount: build.mutation<{ URL: string }, any>({
      query: (data: { franchiseEmail: string; franchiseName: string; returnUrl: string }) => ({
        url: `${API_ENDPOINT.FRANCHISES}/create-stripe-account`,
        method: 'POST',
        body: data
      })
    }),
    checkStripeAccount: build.query({
      query: (id) => ({
        url: `${API_ENDPOINT.FRANCHISES}/check-complete-stripe/${id}`,
        method: 'GET'
      })
    }),
    activeFranchise: build.mutation({
      query: (id: string) => ({
        url: `${API_ENDPOINT.FRANCHISES}/active/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (franchise) => [{ type: 'Franchise', id: franchise?.id }]
    }),
    deleteFranchise: build.mutation({
      query: (data: { franchiseId: string; stripeId: string }) => ({
        url: `${API_ENDPOINT.FRANCHISES}/delete`,
        method: 'DELETE',
        body: data
      }),
      invalidatesTags: (franchise) => [{ type: 'Franchise', id: franchise?.id }]
    })
  })
})

export const {
  useListQuery,
  useRegisterMutation,
  useExportMutation,
  useCreateStripeAccountMutation,
  useActiveFranchiseMutation,
  useGetOneFranchiseQuery,
  useCheckStripeAccountQuery,
  useDeleteFranchiseMutation
} = franchiseApi
