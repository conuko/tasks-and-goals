import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

interface IndexProps {
  user: any;
}

const Index = (props: IndexProps) => {
  //const [user, setUser] = useContext(UserContext);
  /*   const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  }); */

  /*   const addUser = (data: { id: any; name: any; email: any; }) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
    });
  } */

  return (
    <div>
      <h1>The Modern To Do Application</h1>
      <br />
      <h2>Welcome!</h2>
      {props.user === "" ? (
        <div>
          <p>To proceed please register or login. Thank you!</p>
          <div>
            <button>
              <Link to="/register">Register</Link>
            </button>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>{props.user}</div>
          {/* <button onClick={() => setUser(null)}>Logout</button> */}
        </div>
      )}
    </div>
  );
};

export default Index;
