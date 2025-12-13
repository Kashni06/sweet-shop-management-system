import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Navigation Flow", function () {
  test("user can navigate from login to dashboard", function () {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    // User sees login page
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();

    // User clicks login button
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    // User lands on dashboard
    expect(
      screen.getByRole("heading", { name: "Available Sweets" })
    ).toBeInTheDocument();
  });
});
