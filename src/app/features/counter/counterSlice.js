import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    //though we are directly accessing and mutating state (which is not allowed because compare to rerender will be the same even with change)
    // but the immer library bts, so it's actually crating a new immutable obj
    increment(curState) {
      curState.count += 1;
    },
    decrement(curState) {
      curState.count -= 1;
    },
  },
});

export const {increment,decrement} = counter.actions
export default counterSlice.reducer