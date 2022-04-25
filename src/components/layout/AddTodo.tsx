import { useState } from "react";
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = (e: any) => {
    setTodo({ ...todo, content: e.target.value });
  };

  const handleOnSubmit = (e: any) => {
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
    <div className="flex-column">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          {...register("task", {
            maxLength: {
              value: 30,
              message: "Not more than 30 characters are allowed",
            },
          })}
          className="input mr-medium"
          type="text"
          name="task"
          id="task"
          placeholder="Add a task"
          value={todo.content}
          onChange={handleChange}
        />
        <button type="submit" disabled={todo.content === ""}>
          Add
        </button>
      </form>
      <span>{errors.task?.message}</span>
    </div>
  );
};

export default AddTodo;
