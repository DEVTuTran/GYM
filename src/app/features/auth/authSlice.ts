import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../../services/auth'

const initialState = {
  user: {},
  isAuthenticated: false,
  access_token: ''
}

export const access_token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('access_token')
      state.access_token = ''
      state.isAuthenticated = false
      state.user = {}
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.isAuthenticated = true
      state.access_token = payload.access_token
      localStorage.setItem('access_token', payload.access_token)
    })
    builder.addMatcher(authApi.endpoints.profile.matchFulfilled, (state, { payload }) => {
      state.user = payload.user
    })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
