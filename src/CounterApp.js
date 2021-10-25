import React, { useReducer } from "react";
import CountComponent from "./CountComponent";

export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function countReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

function CounterApp() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <CountComponent count={state.count} dispatch={dispatch} />
    </div>
  );
}

export default CounterApp;
