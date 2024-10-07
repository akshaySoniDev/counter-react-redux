import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
