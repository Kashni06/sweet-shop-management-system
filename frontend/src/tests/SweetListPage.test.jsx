import { render, screen } from "@testing-library/react";
import SweetListPage from "../pages/SweetListPage";

describe("Sweet List Page", function () {
  test("shows heading for available sweets", function () {
    render(<SweetListPage />);

    const heading = screen.getByText("Available Sweets");
    expect(heading).toBeInTheDocument();
  });

  test("informs user when no sweets are available", function () {
    render(<SweetListPage />);

    const message = screen.getByText("No sweets available at the moment");
    expect(message).toBeInTheDocument();
  });
});
