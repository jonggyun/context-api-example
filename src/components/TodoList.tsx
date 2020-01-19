import React from "react";
import { useTodoList, useTodoDispatch } from "../contexts/TodoContext";

function TodoList() {
  const todos = useTodoList();
  const dispatch = useTodoDispatch();

  const onClickRemove = (id: number) => {
    dispatch({ type: "REMOVE", id });
  };
  return (
    <section>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => onClickRemove(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
