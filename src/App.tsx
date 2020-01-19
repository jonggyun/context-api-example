import * as React from "react";
import "./styles.css";

import { TodoContextProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}
