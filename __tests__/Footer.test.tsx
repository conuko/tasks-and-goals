import "@testing-library/jest-dom";
import { render, screen } from "../src/utils/test-utils";
import Footer from "../src/components/layout/Footer";

test("Should render footer", () => {
  // Arrange
  const { baseElement } = render(<Footer />);

  // Act
  const footerHeader = screen.getByText("Shortlist");
  const githubLink = screen.getByAltText("GitHub");
  const linkedinLink = screen.getByAltText("LinkedIn");

  // Assert
  expect(baseElement).toMatchSnapshot();
  expect(footerHeader).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
});
