import { render, screen } from "@testing-library/react";
import SweetCard from "../components/SweetCard";

describe("Sweet Card", function () {
  test("shows sweet name and purchase button", function () {
    const sweet = {
      name: "Gulab Jamun",
      quantity: 5,
    };

    render(<SweetCard sweet={sweet} />);

    const sweetName = screen.getByText("Gulab Jamun");
    const purchaseButton = screen.getByRole("button", {
      name: "Purchase",
    });

    expect(sweetName).toBeInTheDocument();
    expect(purchaseButton).toBeInTheDocument();
  });

  test("disables purchase button when sweet is out of stock", function () {
    const sweet = {
      name: "Rasgulla",
      quantity: 0,
    };

    render(<SweetCard sweet={sweet} />);

    const purchaseButton = screen.getByRole("button", {
      name: "Purchase",
    });

    expect(purchaseButton).toBeDisabled();
  });
});
