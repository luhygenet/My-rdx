import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./app/feaures/counter/counterSlice";

import React from "react";

const Counter = () => {
  //first -> read data from store
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <div>+</div>
      <div>-</div>
    </div>
  );
};

export default Counter;
