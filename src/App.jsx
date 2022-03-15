import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Todos from "./pages/Todos";
import Goals from "./pages/Goals";
import { UserContext } from "./context/UserContext";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/goals">Goals</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <br />

        <UserContext.Provider value="hello from context">
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/goals/" element={<Goals />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
