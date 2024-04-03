import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { counterReducer } from 'stores/reducers/counter'
import { isNotProduction } from 'utils/common'

const rootReducer = combineReducers({
  counter: counterReducer,
  counterReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: isNotProduction()
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
