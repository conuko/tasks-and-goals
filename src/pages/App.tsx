import "../styles/main.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Index";
import Todos from "./Todos";
import Goals from "./Goals";
import { UserContext } from "../context/UserContext";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value="hello from context">
          <Route path="/" exact component={Index} />
          <Route path="/todos" component={Todos} />
          <Route path="/goals/" component={Goals} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
