import React, { useState } from "react";
import { useTodoDispatch } from "../contexts/TodoContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = (e: React.MouseEvent) => {
    dispatch({ type: "ADD", content: value });
  };
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button type="button" onClick={onClick}>
        {" "}
        확인{" "}
      </button>
    </div>
  );
}

export default TodoForm;
