import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Todos = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user}'s Todos.</h2>
      <br />
    </div>
  );
};

export default Todos;
