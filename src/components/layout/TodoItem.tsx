import { VscClose } from "react-icons/vsc";
import { useEffect } from "react";

interface TodoItemProps {
  todo: any;
  toggleTodo: Function;
  removeTodo: any;
}

const TodoItem = (props: TodoItemProps) => {
  const handleToggle = () => {
    props.toggleTodo(props.todo.id);
  };

  const handleRemove = () => {
    // function to remove todo from the server:
    handleRemoveServer(props.todo.id);
    // callback function to remove todo from the state:
    props.removeTodo(props.todo.id);
  };

  /*   const handleRemoveServer = (todo: any) => {
    fetch(`http://localhost:5000/task/${todo}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }; */

  const handleRemoveServer = async (todo: any) => {
    try {
      const response = await fetch(`http://localhost:5000/task/${todo}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2></h2>
      <input type="checkbox" id="toggle" name="toggle" onClick={handleToggle} />
      <label htmlFor="toggle">{props.todo.content}</label>
      <VscClose onClick={handleRemove} />
      <br />
    </div>
  );
};

export default TodoItem;
