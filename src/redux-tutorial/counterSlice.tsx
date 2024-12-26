import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByValue:(state, action: PayloadAction<number>) => {
      state.value -= action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue,decrementByValue } = counterSlice.actions

export default counterSlice.reducer