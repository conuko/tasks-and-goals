import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import TodoItem from "../components/layout/TodoItem";
import AddTodo from "../components/layout/AddTodo";

const Todos = () => {
  //const user = useContext(UserContext);
  const [todos, setTodos] = React.useState<any[]>([]);
  // TODO: the array for todos should go into the context and be accessible from anywhere!!

  // callback function to add todo to the todos state:
  const addTodo = (todo: any) => {
    setTodos([todo, ...todos]);
  };
  // callback function to remove todo from the todos state:
  const removeTodo = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // callback function to toggle todo at the todos state:
  const toggleTodo = (id: String) => {
    setTodos(
      todos.map((todo: { id: String; checked: any }) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <AddTodo addTodo={addTodo} />
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Todos;
