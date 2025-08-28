import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);


  const addOrUpdate = (text) => {
    if (text.trim() === "") return;

    if (editId) {
    
      axios.put(`http://localhost:3000/todos/${editId}`, { task: text })
        .then(res => {
          setTasks(tasks.map(item => item.id === editId ? res.data : item));
          setEditId(null);
        })
        .catch(err => console.log(err));
    } else {
      // Add
      axios.post("http://localhost:3000/todos", { task: text })
        .then(res => setTasks([...tasks, res.data]))
        .catch(err => console.log(err));
    }
  };

 
  const remove = (id) => {
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(() => setTasks(tasks.filter(item => item.id !== id)))
      .catch(err => console.log(err));
  };

 
  const clear = () => {
    Promise.all(tasks.map(item => axios.delete(`http://localhost:3000/todos/${item.id}`)))
      .then(() => setTasks([]))
      .catch(err => console.log(err));
  };

  return (
    <TodoContext.Provider value={{ tasks, addOrUpdate, remove, clear, setEditId }}>
      {children}
    </TodoContext.Provider>
  );
};


export const useTodos = () => useContext(TodoContext);
