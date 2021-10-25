import { useState, useReducer, useRef } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      // let confirmation = window.confirm("Are you sure?");
      // if (confirmation) {
      //   return state.filter((todo) => todo.id !== action.payload.id);
      // }
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  // not sure how I can implement this

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    inputRef.current.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default TodoApp;
