import React, { useEffect, useState, useContext } from "react";
import TodoItem from "../components/layout/TodoItem";
import AddTodo from "../components/layout/AddTodo";

interface TodoProps {
  user: any;
}

const Todos = (props: TodoProps) => {
  const [todos, setTodos] = React.useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tasks/author/${props.user.id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + props.user.accessToken,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

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
        <AddTodo addTodo={addTodo} user={props.user} />
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
