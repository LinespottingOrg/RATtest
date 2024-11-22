import React from "react";
import { expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "../test-utils";
import EmailModal from "../../components/EmailModal";

/* -------------------------------------------------------------------------- */
/*          Using a custom render setup in test-utils for the moment          */
/* -------------------------------------------------------------------------- */

beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

test("renders open modal button", () => {
  render(<EmailModal data-testid={"emailModal"} />);

  const button = screen.getByTestId("emailModal");
  expect(button).toBeInTheDocument();
});

test("does not display error when entering a valid email", () => {
  render(<EmailModal />);

  const textBox = screen.getByPlaceholderText("example@email.com");
  expect(textBox).toBeInTheDocument();

  fireEvent.change(textBox, { target: { value: "test@example.com" } });
  expect(textBox.value).toBe("test@example.com");

  expect(screen.queryByTestId("error")).not.toBeInTheDocument();
});

test("displays error when entering an invalid email", () => {
  render(<EmailModal />);

  const textbox = screen.getByPlaceholderText("example@email.com");
  expect(textbox).toBeInTheDocument();

  fireEvent.change(textbox, { target: { value: "invalidEmail.com" } });
  expect(textbox.value).toBe("invalidEmail.com");

  expect(screen.queryByTestId("error")).toBeInTheDocument();
});
