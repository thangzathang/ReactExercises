import React from "react";
import { ACTIONS } from "./TodoApp";

export default function Todo({ todo, dispatch }) {
  const done = {
    color: "red",
    fontStyle: "italic",
    textDecoration: "line-through",
  };

  return (
    <div>
      <br />
      <span style={todo.complete ? done : null}>{todo.name}</span>
      {"   "}
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Complete</button>
      {"   "}
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}> Delete</button>
    </div>
  );
}
