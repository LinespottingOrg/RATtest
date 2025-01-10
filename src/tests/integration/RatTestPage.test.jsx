import React from "react";
import i18n from "../../utils/i18n";
import { expect } from "vitest";
import { render, screen, fireEvent } from "../test-utils";
import RATTestPage from "../../pages/RATTestPage";
import { vi } from "vitest";

/* -------------------------------------------------------------------------- */
/*          Using a custom render setup in test-utils for the moment          */
/* -------------------------------------------------------------------------- */

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});
/* ----- Mock ResizeObserver from ResponsiveContainer in RatResultChart ----- */
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

/* -------------------------------------------------------------------------- */
/*                                 Unit Tests                                 */
/* -------------------------------------------------------------------------- */
test("contains translation input", () => {
  i18n.changeLanguage("en");
  render(<RATTestPage />);

  const translationToggle = screen.getByRole("checkbox");

  expect(translationToggle).toBeInTheDocument();
});

test("translation input toggles language", () => {
  /** TODO, needs mocking of isEnglish state */
});

test("renders logo 3", () => {
  render(<RATTestPage />);

  const logo = screen.getByAltText(/rat logo 3/i);

  expect(logo).toHaveAttribute("src", expect.stringContaining("RAT_LOGO_3"));
});

test("renders logo 1", () => {
  render(<RATTestPage />);

  const logo = screen.getByAltText(/rat logo 1/i);

  expect(logo).toHaveAttribute("src", expect.stringContaining("RAT_LOGO_1"));
});

test("contains return button", () => {
  i18n.changeLanguage("en");
  render(<RATTestPage />);

  const button = screen.getByText(/Return/i);

  expect(button).toBeInTheDocument();
});

test("contains result button", () => {
  i18n.changeLanguage("en");
  render(<RATTestPage />);

  const button = screen.getByText(/Result/i);

  expect(button).toBeInTheDocument();
});

test("previous prompt-set button is disabled when setId is <= 1", () => {
  render(<RATTestPage />);

  const button = screen.getByTestId(/prevSetButton/i);
  expect(button).toBeDisabled();
});

test("previous prompt-set button is enabled when setId is > 1", () => {
  render(<RATTestPage />);
  const testSetButton = screen.getByTestId(/testButton/i);
  const prevSetButton = screen.getByTestId(/prevSetButton/i);
  const nextSetButton = screen.getByTestId(/nextSetButton/i);

  expect(prevSetButton).toBeDisabled();
  /* -------------------------- walk up to state of 1 ------------------------- */
  fireEvent.click(testSetButton);
  fireEvent.click(nextSetButton);
  expect(prevSetButton).toBeEnabled();
});

test("next prompt-set button is disabled when setId == 20", () => {
  render(<RATTestPage />);
  const testSetButton = screen.getByTestId(/testButton/i);
  const nextSetButton = screen.getByTestId(/nextSetButton/i);
  /* --------------------------- initial state of 1 --------------------------- */
  expect(nextSetButton).toBeDisabled();
  /* ------------------------- walk up to state of 20 ------------------------- */
  for (let i = 1; i <= 20; i++) {
    fireEvent.click(testSetButton);
    fireEvent.click(nextSetButton);
  }
  expect(nextSetButton).toBeDisabled();
});

test("next prompt-set button is enabled when setId < 20", () => {
  render(<RATTestPage />);
  const testSetButton = screen.getByTestId(/testButton/i);
  const nextSetButton = screen.getByTestId(/nextSetButton/i);
  /* ---------------------------- inital state of 1 --------------------------- */
  fireEvent.click(testSetButton);
  expect(nextSetButton).toBeEnabled();
  /* ------------------------ walk trough states to 19 ------------------------ */
  for (let i = 1; i < 20; i++) {
    fireEvent.click(testSetButton);
    expect(nextSetButton).toBeEnabled();
    fireEvent.click(nextSetButton);
  }
});

test("result button is disabled when data is not set as answered", () => {
  render(<RATTestPage />);

  const button = screen.getByTestId(/resultButton/i);
  expect(button).toBeDisabled();
});

test("result button is enabled when data is answered and currentSetId === 20", () => {
  render(<RATTestPage />);
  const testSetButton = screen.getByTestId(/testButton/i);
  const nextSetButton = screen.getByTestId(/nextSetButton/i);
  const resultButton = screen.getByTestId(/resultButton/i);
  /* ---------------------------- inital state of 1 --------------------------- */
  fireEvent.click(testSetButton);
  expect(resultButton).toBeDisabled();
  /* ------------------------ walk up to 20 ------------------------ */
  for (let i = 1; i <= 20; i++) {
    fireEvent.click(testSetButton);
    fireEvent.click(nextSetButton);
  }
  fireEvent.click(testSetButton);
  () => expect(resultButton).toBeEnabled();
});

/* -------------------------------------------------------------------------- */
/*                              Integration Tests                             */
/* -------------------------------------------------------------------------- */
test("result button renders resultpanel", () => {
  render(<RATTestPage />);
  const testSetButton = screen.getByTestId(/testButton/i);
  const nextSetButton = screen.getByTestId(/nextSetButton/i);
  const resultButton = screen.getByTestId(/resultButton/i);

  /* ------------------------ walk up to setId 20 and click result button------------------------ */
  for (let i = 1; i <= 20; i++) {
    fireEvent.click(testSetButton);
    fireEvent.click(nextSetButton);
  }
  /* -------------------- answer last set and click result -------------------- */
  fireEvent.click(testSetButton);
  fireEvent.click(resultButton);

  const resultPanel = screen.getByTestId(/ratResultPanel/i);
  expect(resultPanel).toBeInTheDocument();
});

test("go back button navigates to homepage", () => {
  render(<RATTestPage />, {
    route: "/rat/test",
  });

  const returnButton = screen.getByText(/Return/i);

  fireEvent.click(returnButton);

  expect(mockNavigate).toHaveBeenCalledWith("/");
});
