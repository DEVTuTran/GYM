import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "stores/index";

const REDUCER_NAME = "counter";

export type CounterState = {
  counter: number;
};

const initialState: CounterState = { counter: 0 };

export const counterSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    increase(state) {
      state.counter = state.counter + 1;
    },
    decrease(state) {
      state.counter = state.counter - 1;
    }
  }
});

export const counterReducer = counterSlice.reducer;

export const selectCounter = () => (state: AppState) => state.counter;
