import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    add: (state, action) => {
      state.counterValue += action.payload.number;
    },
    subtract: (state, action) => {
      state.counterValue -= action.payload.number;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
