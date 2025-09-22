import { configureStore } from "@reduxjs/toolkit";

import counterReducer, { counter } from "./features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


