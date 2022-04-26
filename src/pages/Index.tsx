import { Link } from "react-router-dom";

interface IndexProps {
  user: any;
  removeUser: any;
}

const Index = (props: IndexProps) => {
  return (
    <div className="flex-column">
      <h1 className="header-primary">The Modern To Do Application</h1>
      <br />
      <p>Welcome!</p>
      {props.user === "" ? (
        <div className="flex-column">
          <p>To proceed please register or login. Thank you!</p>
          <div>
            <div className="flex-column">
              <button className="mt-medium">
                <Link to="/register">Register</Link>
              </button>
              <Link className="mt-small" to="/login">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-column">
          <div>{props.user}</div>
          <button className="mt-medium" onClick={props.removeUser}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
