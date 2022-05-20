import "@testing-library/jest-dom";
import { render, screen } from "../src/utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/layout/Navbar";

// Arrange
test("Should have Home and Todos link", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  // Act
  const home = screen.getByText("Home");
  const todos = screen.getByText("Todos");

  // Assert
  expect(home).toHaveTextContent("Home");
  expect(todos).toHaveTextContent("Todos");

  screen.debug();
});

// Arrange
test("Should have Links enabled", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  // Act
  const homeLink = screen.getByText("Home");
  const todosLink = screen.getByText("Todos");

  // Assert
  expect(homeLink).toBeEnabled();
  expect(todosLink).toBeEnabled();
});
