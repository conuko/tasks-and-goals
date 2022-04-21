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

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const addUser = (data) => {
    setUser({
      name: data.name,
      email: data.email,
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Index user={user.name} />} />
        <Route path="/register" element={<Register addUser={addUser} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todos"
          element={
            <ProtectedRoute user={user.name}>
              <Todos />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
