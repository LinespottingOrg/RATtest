import React from "react";
import { render, screen, fireEvent } from "../test-utils";
import i18n from "../../utils/i18n";
import LASTestPage from "../../pages/LASTestPage";
import { expect } from "vitest";
import { VscLibrary } from "react-icons/vsc";

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
/* ----- Mock ResizeObserver from ResponsiveContainer in LasResultChart ----- */
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});
/* -------------------------------------------------------------------------- */
/*                                 unit tests                                 */
/* -------------------------------------------------------------------------- */
test("contains translation input", () => {
  render(<LASTestPage />);

  const translationToggle = screen.getByRole("checkbox");
  expect(translationToggle).toBeInTheDocument();
});

test("translation input toggles language", () => {
  /* ----------------- todo, needs mocking of isEnglish state ----------------- */
});

test("renders logo 1", () => {
  render(<LASTestPage />);

  const logo = screen.getByAltText("LAS LOGO 1");
  expect(logo).toHaveAttribute("src", expect.stringContaining("LAS_LOGO_1"));
});

test("renders logo 3", () => {
  render(<LASTestPage />);

  const logo = screen.getByAltText("LAS LOGO 3");
  expect(logo).toHaveAttribute("src", expect.stringContaining("LAS_LOGO_3"));
});

test("contains return button", () => {
  render(<LASTestPage />);

  const button = screen.getByTestId("returnButton");
  expect(button).toBeInTheDocument();
});

test("contains result button", () => {
  render(<LASTestPage />);

  const button = screen.getByTestId("resultButton");
  expect(button).toBeInTheDocument();
});

test("contains progressbar", () => {
  render(<LASTestPage />);

  const progressbar = screen.getByTestId("progressbar");
  expect(progressbar).toBeInTheDocument();
});

test("contains question panel", () => {
  render(<LASTestPage />);

  const questionPanel = screen.getByTestId("questionPanel");
  expect(questionPanel).toBeInTheDocument();
});

test("progressbar percent mirrors setid", () => {
  render(<LASTestPage />);

  const progressbar = screen.getByTestId("progressbar");
  const testSetButton = screen.getByTestId("testSetButton");
  const nextPromptButton = screen.getByTestId("nextPromptButton");
  /* --------------------------- initial state of 1 --------------------------- */
  expect(progressbar).toHaveAttribute("value", expect.stringContaining("1"));
  /* --------------------------- walk up to setId 2 --------------------------- */
  fireEvent.click(testSetButton);
  fireEvent.click(nextPromptButton);
  expect(progressbar).toHaveAttribute("value", expect.stringContaining("2"));
});

test("contains next-prompt button", () => {
  render(<LASTestPage />);

  const button = screen.getByTestId("nextPromptButton");
  expect(button).toBeInTheDocument();
});

test("next-prompt button is disabled when setId === 9", () => {
  render(<LASTestPage />);
  const nextPromptButton = screen.getByTestId("nextPromptButton");
  const testSetButton = screen.getByTestId("testSetButton");
  /* --------------------------- walk up tp setId 9 --------------------------- */
  for (let i = 0; i <= 9; i++) {
    fireEvent.click(testSetButton);
    fireEvent.click(nextPromptButton);
  }
  fireEvent.click(testSetButton);
  expect(nextPromptButton).toBeDisabled();
});

test("contains previuos-prompt button", () => {
  render(<LASTestPage />);

  const button = screen.getByTestId("prevPromptButton");
  expect(button).toBeInTheDocument();
});

test("previous-prompt button disabled when setId <= 1", () => {
  render(<LASTestPage />);

  const button = screen.getByTestId("prevPromptButton");
  expect(button).toBeDisabled();
});

test("previous-prompt button enabled when setId > 1", () => {
  render(<LASTestPage />);

  const prevPromptButton = screen.getByTestId("prevPromptButton");
  const nextPromptButton = screen.getByTestId("nextPromptButton");
  const testSetButton = screen.getByTestId("testSetButton");
  /* --------------------------- walk up to setId 2 --------------------------- */
  fireEvent.click(testSetButton);
  fireEvent.click(nextPromptButton);
  expect(prevPromptButton).toBeEnabled();
});

test("result button is disabled when setId != 9 && current prompt is answered", () => {
  render(<LASTestPage />);

  const resultButton = screen.getByTestId("resultButton");
  expect(resultButton).toBeDisabled();
});

test("result button is enabled when setId === 9 && current prompt is answered", () => {
  render(<LASTestPage />);

  const resultButton = screen.getByTestId("resultButton");
  const nextPromptButton = screen.getByTestId("nextPromptButton");
  const testSetButton = screen.getByTestId("testSetButton");
  /* --------------------------- walk up to setId 9 --------------------------- */
  for (let i = 1; i <= 9; i++) {
    fireEvent.click(testSetButton);
    fireEvent.click(nextPromptButton);
  }
  fireEvent.click(testSetButton);
  expect(resultButton).toBeEnabled();
});
/* -------------------------------------------------------------------------- */
/*                              integration tests                             */
/* -------------------------------------------------------------------------- */

test("return button navigates to homepage", () => {
  render(<LASTestPage />, {
    route: "/las/test",
  });

  const returnButton = screen.getByTestId("returnButton");
  fireEvent.click(returnButton);
  expect(mockNavigate).toHaveBeenCalledWith("/");
});

test("result button renders resultpanel", () => {
  render(<LASTestPage />);

  const nextPromptButton = screen.getByTestId("nextPromptButton");
  const testSetButton = screen.getByTestId("testSetButton");
  const resultButton = screen.getByTestId("resultButton");
  /* --------------------------- walk up to setId 9 --------------------------- */
  for (let i = 1; i <= 9; i++) {
    fireEvent.click(testSetButton);
    fireEvent.click(nextPromptButton);
  }
  fireEvent.click(testSetButton);
  fireEvent.click(resultButton);
  const resultScreen = screen.getByTestId("resultPanel");
  expect(resultScreen).toBeInTheDocument();
});
