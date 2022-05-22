/* import { expect, it } from "vitest";
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from "../src/utils/test-utils";
import Todos from "../src/pages/Todos";
import { user, todos } from "../src/mocks/handlers";

it("Should render the todos", async () => {
  render(<Todos user={user} />);

  await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

  expect(screen.getByText("running")).toBeInTheDocument();
});
 */
