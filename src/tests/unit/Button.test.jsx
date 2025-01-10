import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

test("renders button with label", () => {
  render(<Button prompt={"Start Test"} />);
  const buttonElement = screen.getByText(/Start Test/i);
  expect(buttonElement).toBeInTheDocument();
});

test("fires onClick event", () => {
  const handleClick = vi.fn();
  render(<Button prompt={"Start Test"} onClick={handleClick} />);
  const buttonElement = screen.getByText(/Start Test/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
