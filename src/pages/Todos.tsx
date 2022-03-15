import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Todos = () => {
  const msg = useContext(UserContext);

  return (
    <div>
      <h2>TODOS</h2>
      <br />
      <div>{msg}</div>
    </div>
  );
};

export default Todos;
