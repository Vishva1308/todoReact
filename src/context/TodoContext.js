import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ( props ) => {
  const getTodos = localStorage.getItem('todos');
  const initialTodos = getTodos ? JSON.parse(getTodos) : [];
  const [todos, setTodos] = useState(initialTodos);

  console.log("list", todos);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
}