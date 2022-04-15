import { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = (e: any) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = uuid();
  };
};

export default AddTodo;
