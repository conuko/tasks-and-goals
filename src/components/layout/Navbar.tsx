import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__element">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__element">
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
