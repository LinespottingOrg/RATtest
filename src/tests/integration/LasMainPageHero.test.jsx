import React from "react";
import { render, screen, fireEvent } from "../test-utils";
import { expect, vi } from "vitest";
import LASMainPageHero from "../../components/lasComponents/LASMainPageHero";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});
/* -------------------------------------------------------------------------- */
/*                                 unit tests                                 */
/* -------------------------------------------------------------------------- */
test("contains translation input", () => {
  render(<LASMainPageHero />);

  const toggle = screen.getByRole("checkbox");
  expect(toggle).toBeInTheDocument();
});

test("contains start-test button", () => {
  render(<LASMainPageHero />);

  const button = screen.getByTestId("startTestButton");
  expect(button).toBeInTheDocument();
});

test("renders logo", () => {
  render(<LASMainPageHero />);

  const logo = screen.getByAltText("LAS LOGO 1");
  expect(logo).toHaveAttribute("src", expect.stringContaining("LAS_LOGO_1"));
});

/* -------------------------------------------------------------------------- */
/*                              integration tests                             */
/* -------------------------------------------------------------------------- */

test("start-test button navigates to las test page", () => {
  render(<LASMainPageHero />);

  const button = screen.getByTestId("startTestButton");
  fireEvent.click(button);
  expect(mockNavigate).toHaveBeenCalledWith("las/test");
});

test("translation input should toggle language", () => {
  //todo, needs mocking of isEnglish state
});
