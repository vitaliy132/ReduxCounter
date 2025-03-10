import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create the slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Configure the store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;
