import { useState, useEffect } from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    accessToken: "",
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const addUser = (data: {
    id: any;
    name: any;
    email: any;
    accessToken: any;
  }) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      accessToken: data.accessToken,
    });
    localStorage.setItem("user", JSON.stringify(data));
  };

  const removeUser = () => {
    setUser({
      id: "",
      name: "",
      email: "",
      accessToken: "",
    });
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Index user={user.name} removeUser={removeUser} />}
        />
        <Route path="/register" element={<Register addUser={addUser} />} />
        <Route path="/login" element={<Login addUser={addUser} />} />
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <Todos user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
