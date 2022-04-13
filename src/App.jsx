import { useState } from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Navbar />

      <UserContext.Provider value={[user, setUser]}>
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
    </Router>
  );
};

export default App;
