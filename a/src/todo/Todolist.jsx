import React, { useState } from "react";
import { useTodos } from "./todocontext";

function Todolist() {
  const { tasks, addOrUpdate, remove, clear, setEditId } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    addOrUpdate(text);
    setText("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleSubmit}>Add/Update</button>
      <button onClick={clear}>Clear All</button>

      <ol>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.task}
            <button onClick={() => remove(item.id)}>❌</button>
            <button onClick={() => { setText(item.task); setEditId(item.id); }}>✏️</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todolist;
