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

test("Should render the todos", async () => {
  const { container } = render(<Todos user={user} />, { route: "/todos" });

  userEvent.type(screen.getByRole("textbox"), "test todo");
  userEvent.click(screen.getByRole("button"));

  //await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  let loading: any;
  await waitFor(() => {
    loading = screen.queryByText("Loading...");
  });

  const todo = container.querySelector(".todo");
  expect(todo).toBeDefined();

  screen.debug();
});
