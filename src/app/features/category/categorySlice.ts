import { createSlice } from '@reduxjs/toolkit'
import { categoryApi } from '../../services/category'
import { ICategory } from '../../../models/Store'

interface InitialState {
  categories: ICategory[]
}

const initialState: InitialState = {
  categories: []
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(categoryApi.endpoints.categories.matchFulfilled, (state, { payload }) => {
      state.categories = payload
    })
  }
})

export default categorySlice.reducer
