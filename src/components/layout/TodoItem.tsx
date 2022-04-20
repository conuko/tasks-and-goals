interface TodoItemProps {
  todo: string;
  /*   removeTodo: any,
  toggleTodo: any, */
}

/* const handleToggle = () => {
  toggleTodo(todo);
}; */

/* const handleRemove = () => {
  removeTodo(todo);
}; */

const TodoItem = (props: TodoItemProps) => {
  return (
    <div>
      <h2></h2>
      <input
        type="checkbox"
        id="toggle"
        name="toggle"
        /* onClick={handleToggle} */
      />
      <label htmlFor="toggle">{props.todo}</label>
      <br />
    </div>
  );
};

export default TodoItem;
