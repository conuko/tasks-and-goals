import { Link } from "react-router-dom";

interface IndexProps {
  user: any;
  removeUser: any;
}

const Index = (props: IndexProps) => {
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
          <button onClick={props.removeUser}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Index;
