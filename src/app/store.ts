import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { api } from './services/api'
import auth from './features/auth/authSlice'
import category from './features/category/categorySlice'
import { rtkQueryErrorLogger } from '../middleware/error.middleware'

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth,
      category
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware, rtkQueryErrorLogger]),
    ...options
  })

export const store = createStore()

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
