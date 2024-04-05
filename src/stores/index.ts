import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import langAndUnitReducer from 'stores/reduxSlices/langAndUnitSlice'
import { isNotProduction } from 'utils/common'

const rootReducer = combineReducers({
  langAndUnit: langAndUnitReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: isNotProduction()
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
