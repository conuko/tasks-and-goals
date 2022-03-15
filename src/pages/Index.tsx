import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Index = () => {
  const msg = useContext(UserContext);

  return (
    <div>
      <h2>HOME</h2>
      <br />
      <div>{msg}</div>
    </div>
  );
};

export default Index;
