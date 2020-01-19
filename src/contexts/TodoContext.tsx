import React, { useContext, useReducer } from "react";

const TodoContext = React.createContext(undefined);
const TodoDispatchContext = React.createContext(undefined);

interface TodoProps {
  id: number;
  content: string;
}

type TodosState = TodoProps[];

interface Action {
  type: string;
  id: number;
  content: string;
}

const initialState: TodosState = [
  {
    id: 1,
    content: "TodoList number122"
  },
  {
    id: 2,
    content: "TodoList number2"
  }
];

function reducer(state: TodosState, action: Action) {
  switch (action.type) {
    case "ADD":
      const newId = state.length + 1;
      return [...state, { id: newId, content: action.content }];
    case "REMOVE":
      return state.filter((todo: TodoProps) => todo.id !== action.id);
    default:
      return state;
  }
}

export function TodoContextProvider({
  children
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
    </TodoDispatchContext.Provider>
  );
}

export function useTodoList(): Array<TodoProps> {
  const todos = useContext(TodoContext);
  if (!todos) throw new Error("Cannot found Todos");
  return todos;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("Cannot found Dispatch");
  return dispatch;
}
