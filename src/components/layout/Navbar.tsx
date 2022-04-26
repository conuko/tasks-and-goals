import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link className="navbar__element" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__element" to="/todos">
            Todos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
