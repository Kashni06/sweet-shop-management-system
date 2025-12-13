import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Sweet Shop Application", () => {
  test("shows the application title on the screen", () => {
    // Render the main App component
    render(<App />);

    // Check if the text 'Sweet Shop Management System' is visible
    const titleText = screen.getByText("Sweet Shop Management System");

    // Expectation: the title should be present on the screen
    expect(titleText).toBeInTheDocument();
  });
});
