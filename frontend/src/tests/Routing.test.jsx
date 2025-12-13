import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Application Routing", function () {
  test("shows login page on /login route", function () {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("shows sweet list page on /dashboard route", function () {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Available Sweets")).toBeInTheDocument();
  });
});
