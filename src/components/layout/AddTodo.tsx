import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

  // form validation rules
  const validationSchema = Yup.object().shape({
    task: Yup.string().max(30, "A task cannot be more than 30 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setValue, reset, formState } =
    useForm(formOptions);
  const { errors } = formState;

  const handleOnChange = (c: any) => {
    setValue(c.target.name, c.target.value);
    setTodo({ ...todo, content: c.target.value });
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
    fetch("https://shortlist-backend.herokuapp.com/task/", {
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
          {...register("task")}
          className="input mr-medium"
          type="text"
          name="task"
          id="task"
          placeholder="Add a task"
          onChange={(c) => handleOnChange(c)}
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
