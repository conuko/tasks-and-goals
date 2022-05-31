import { expect, it } from "vitest";
import {
  render,
  screen,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "../src/utils/test-utils";
import Todos from "../src/pages/Todos";
import { user, todos } from "../src/mocks/handlers";

test("Should render the mocked todos", async () => {
  // Arrange
  render(<Todos user={user} />, { route: "/todos" });

  // Act
  await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));

  // Assert
  todos.forEach((todo) => {
    expect(screen.getByText(todo.content)).toBeDefined();
  });

  screen.debug();
});

test("Should toggle a todo", async () => {
  // Arrange
  const { container } = render(<Todos user={user} />, { route: "/todos" });

  // Act
  await waitForElementToBeRemoved(() => screen.queryByLabelText("loading"));
  const todo = todos[0].content;
  const firstTodo = container.querySelector(`#${todo}`);
  userEvent.click(firstTodo);

  // Assert
  await waitFor(() => {
    expect(firstTodo).toHaveProperty("checked");
  });
});
