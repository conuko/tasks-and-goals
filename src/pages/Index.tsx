import { Link } from "react-router-dom";

interface IndexProps {
  user: any;
  removeUser: any;
}

const Index = (props: IndexProps) => {
  return (
    <div>
      <h1 className="header-primary">The Modern To Do Application</h1>
      <br />
      <p>Welcome!</p>
      {props.user === "" ? (
        <div>
          <p>To proceed please register or login. Thank you!</p>
          <div>
            <button>
              <Link to="/register">Register</Link>
            </button>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      ) : (
        <div>
          <div>{props.user}</div>
          <button onClick={props.removeUser}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Index;
