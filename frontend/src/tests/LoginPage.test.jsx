import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";

describe("Login Page", () => {
  test("shows email and password input fields", () => {
    // Show the login page to the user
    render(<LoginPage />);

    // User should see an email input
    const emailInput = screen.getByLabelText("Email");

    // User should see a password input
    const passwordInput = screen.getByLabelText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("shows a login button", () => {
    render(<LoginPage />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButton).toBeInTheDocument();
  });
});
