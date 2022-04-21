import { VscClose } from "react-icons/vsc";

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
    props.removeTodo(props.todo.id);
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
