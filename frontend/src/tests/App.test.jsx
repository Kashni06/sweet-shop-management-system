import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Component", function () {
  test("renders without crashing", function () {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
