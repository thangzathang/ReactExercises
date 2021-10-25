import React from "react";
import { ACTIONS } from "./CounterApp";

function CountComponent({ count, dispatch }) {
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DECREMENT });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default CountComponent;
