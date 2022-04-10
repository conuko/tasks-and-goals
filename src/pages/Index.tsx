import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Index = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h1>The Modern To Do Application</h1>
      <br />
      <h2>Welcome!</h2>
      <div>{user}</div>
      {user === null ? (
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
        <div>{/* <button onClick={setUser(null)}>Logout</button> */}</div>
      )}
    </div>
  );
};

export default Index;
