import { useContext } from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./context/UserContext";

const App = () => {
  const user = useContext(UserContext);
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
          </ul>
        </nav>
        <hr />
        <br />

        <UserContext.Provider value={user}>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/todos"
              element={
                <ProtectedRoute user={user}>
                  <Todos />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
