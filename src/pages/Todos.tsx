import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import TodoItem from "../components/layout/TodoItem";
import AddTodo from "../components/layout/AddTodo";

const Todos = () => {
  const user = useContext(UserContext);
  const [todos, setTodos] = useState([]);
  // TODO: the array for todos should go into the context and be accessible from anywhere!!

  // callback function to add todo to the todos state:
  const addTodo = (todo: any) => {
    setTodos([todo, ...todos]);
  };
  // callback function to remove item from the items state:
  /*     const removeTodo = (id: any) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }; */

  // callback function to toggle item at the items state:
  /*     const toggleTodo = (id) => {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todos,
              checked: !todo.checked
            }
          }
          return todo;
        })
      );
    }; */

  return (
    <div>
      <h2>{user}'s Todos.</h2>

      <div>
        <AddTodo addTodo={addTodo} />
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo} /* removeTodo={removeTodo} toggleTodo={toggleTodo} */
            />
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Todos;
