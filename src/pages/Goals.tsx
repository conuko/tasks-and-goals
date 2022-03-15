import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Goals = () => {
  const msg = useContext(UserContext);

  return (
    <div>
      <h2>GOALS</h2>
      <br />
      <div>{msg}</div>
    </div>
  );
};

export default Goals;
