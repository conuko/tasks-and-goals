import "@testing-library/jest-dom";
import { render, screen } from "../src/utils/test-utils";
import Footer from "../src/components/layout/Footer";

test("Should render footer", () => {
  const { baseElement } = render(<Footer />);
  const footerHeader = screen.getByText("Shortlist");
  const githubLink = screen.getByAltText("GitHub");
  const linkedinLink = screen.getByAltText("LinkedIn");

  expect(baseElement).toMatchSnapshot();
  expect(footerHeader).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
});
