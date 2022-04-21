import { useState } from "react";
import { v4 as uuid } from "uuid";

interface AddTodoProps {
  addTodo: any;
}

const AddTodo = (props: AddTodoProps) => {
  const [todo, setTodo] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const handleChange = (e: any) => {
    setTodo({ ...todo, content: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = uuid();
    if (todo.content.trim()) {
      // TODO: function to add item to the server/database:

      // callback function to add item to the state:
      props.addTodo({ ...todo, id });
      // sets the form text back to empty, after the item was added to the "items" state via the "addItem" callback function:
      setTodo({ ...todo, content: "" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Add a task"
          onChange={handleChange}
        />
        <button type="submit" disabled={todo.content === ""}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
