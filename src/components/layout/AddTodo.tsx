import { useState } from "react";
import { v4 as uuid } from "uuid";

interface AddTodoProps {
  addTodo: any;
  user: any;
}

const AddTodo = (props: AddTodoProps) => {
  const [todo, setTodo] = useState({
    id: "",
    content: "",
    checked: false,
    authorEmail: "",
  });

  const handleChange = (e: any) => {
    setTodo({ ...todo, content: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //const id = uuid();
    const authorEmail = props.user.email;
    if (todo.content.trim()) {
      // function to add item to the server/database:
      addTodoToServer({ ...todo, authorEmail });

      // callback function to add item to the state:
      props.addTodo({ ...todo, authorEmail });
      // sets the form text back to empty, after the item was added to the "items" state via the "addItem" callback function:
      setTodo({ ...todo, content: "" });
    }
  };

  const addTodoToServer = (todo: any) => {
    fetch("http://localhost:5000/task/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
