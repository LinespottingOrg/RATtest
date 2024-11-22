import React from "react";
import { expect } from "vitest";
import { fireEvent, render, screen } from "../test-utils";
import { vi } from "vitest";
import LasTestResult from "../../components/LasTestResult";

const mocknavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mocknavigate,
  };
});
vi.mock("recharts", async () => {
  const OriginalModule = await vi.importActual("recharts");
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ width = "100%", height = 400, children }) => (
      <div style={{ width, height }}>{children}</div>
    ),
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
/*                                 unit tests                                 */
/* -------------------------------------------------------------------------- */

test("contains end-test button", () => {
  render(<LasTestResult />);

  const button = screen.getByTestId("endTestButton");
  expect(button).toBeInTheDocument();
});

test("contains EmailModal", () => {
  render(<LasTestResult />);

  const button = screen.getByTestId("emailModal");
  expect(button).toBeInTheDocument();
});

/* -------------------------------------------------------------------------- */
/*                              integration tests                             */
/* -------------------------------------------------------------------------- */

test("end-test button navigates to homepage", () => {
  render(<LasTestResult />);

  const button = screen.getByTestId("endTestButton");
  fireEvent.click(button);

  expect(mocknavigate).toHaveBeenCalledWith("/");
});
