import { VscClose } from "react-icons/vsc";

interface TodoItemProps {
  todo: any;
  toggleTodo: Function;
  removeTodo: any;
}

const TodoItem = (props: TodoItemProps) => {
  const handleToggle = () => {
    // callback function to toggle todo at the todos state:
    props.toggleTodo(props.todo.id);

    !props.todo.checked
      ? handleToggleServer(props.todo.id)
      : handleUntoggleServer(props.todo.id);
  };

  const handleRemove = () => {
    // function to remove todo from the server:
    handleRemoveServer(props.todo.id);
    // callback function to remove todo from the state:
    props.removeTodo(props.todo.id);
  };

  const handleToggleServer = async (todo: any) => {
    try {
      const response = await fetch(
        `https://shortlist-backend.herokuapp.com/task/check/${todo}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            checked: !todo.checked,
          }),
        }
      );
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUntoggleServer = async (todo: any) => {
    try {
      const response = await fetch(
        `https://shortlist-backend.herokuapp.com/task/uncheck/${todo}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            checked: todo.checked,
          }),
        }
      );
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveServer = async (todo: any) => {
    try {
      const response = await fetch(
        `https://shortlist-backend.herokuapp.com/task/${todo}`,
        {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        }
      );
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todo mt-medium">
      <input
        className="checkbox"
        type="checkbox"
        id={props.todo.content}
        name="toggle"
        checked={props.todo.checked}
        onChange={handleToggle}
      />
      <label htmlFor={props.todo.content}>{props.todo.content}</label>
      <VscClose className="todo__close" onClick={handleRemove} />
    </div>
  );
};

export default TodoItem;
