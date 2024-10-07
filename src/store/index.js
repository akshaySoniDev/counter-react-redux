import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import toggleSlice from "./messageToggle";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    toggle: toggleSlice.reducer,
  },
});

export default counterStore;
