import { render, screen } from "@testing-library/react";
import SweetListPage from "../pages/SweetListPage";

describe("Sweet List Page", () => {
  test("shows heading for available sweets", () => {
    // Show the sweet list page
    render(<SweetListPage />);

    // User should see a clear heading
    const heading = screen.getByText("Available Sweets");

    expect(heading).toBeInTheDocument();
  });

  test("informs user when no sweets are available", () => {
    render(<SweetListPage />);

    // When there are no sweets, user should be informed
    const message = screen.getByText("No sweets available at the moment");

    expect(message).toBeInTheDocument();
  });
});
