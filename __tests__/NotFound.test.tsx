import "@testing-library/jest-dom";
import { render, screen, userEvent } from "../src/utils/test-utils";
import NotFound from "../src/pages/NotFound";

describe("NotFound", () => {
  test("renders NotFound component", () => {
    render(<NotFound />);

    screen.debug();
  });
});
