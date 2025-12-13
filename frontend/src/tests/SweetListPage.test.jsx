import { render, screen } from "@testing-library/react";
import SweetListPage from "../pages/SweetListPage";

describe("Sweet List Page", function () {
  test("shows heading for available sweets", function () {
    render(<SweetListPage />);

    const heading = screen.getByText("Available Sweets");
    expect(heading).toBeInTheDocument();
  });

  test("shows a message when no sweets are available", function () {
    render(<SweetListPage />);

    const message = screen.getByText("No sweets available at the moment");
    expect(message).toBeInTheDocument();
  });

  // 🔴 NEW TEST (RED PHASE)
  test("shows sweet cards when sweets are available", function () {
    const sweets = [
      { name: "Gulab Jamun", quantity: 5 },
      { name: "Rasgulla", quantity: 0 },
    ];

    render(<SweetListPage sweets={sweets} />);

    // User should see sweet names as cards
    expect(screen.getByText("Gulab Jamun")).toBeInTheDocument();
    expect(screen.getByText("Rasgulla")).toBeInTheDocument();
  });
});
