import "@testing-library/jest-dom";
import { render, screen, userEvent } from "../src/utils/test-utils";
import Todos from "../src/pages/Todos";

const user = {
  id: "1",
  name: "John Doe",
  email: "john@doe.com",
  accessToken: "123456789",
};

describe("Todos", () => {
  test("renders Todos component", () => {
    render(<Todos user={user} />);

    screen.debug();
  });
});
