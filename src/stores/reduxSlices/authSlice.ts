import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import authApi from 'apis/axiosClient/authApi'
import { AccountScopes } from 'models/auth'
import { AppState } from 'stores'
import { redirectToLogout } from 'utils/common'

type AuthState = {
  current: undefined | AccountScopes
}

export const getAccountScopes = createAsyncThunk('auth/getAccountScopes', async (accountId: string) => {
  const data = await authApi.getScopes(accountId)

  return data
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    current: undefined
  } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccountScopes.fulfilled, (state, action) => {
      state.current = action.payload
    })
    builder.addCase(getAccountScopes.rejected, (state, action) => {
      redirectToLogout()
    })
  }
})

export default authSlice.reducer

const currentAuthSelector = (state: AppState) => state.auth.current

export const accountSelector = createSelector(currentAuthSelector, (current) => current?.account)

export const primitiveScopesSelector = createSelector(currentAuthSelector, (current) => current?.scopes)

export const idScopesSelector = createSelector(currentAuthSelector, (current) => current?.idScopes)
