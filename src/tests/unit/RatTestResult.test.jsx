import React from "react";
import { expect } from "vitest";
import { render, screen } from "../test-utils";
import RatTestResult from "../../components/RatTestResult";
import { vi } from "vitest";

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
/*                                 Unit Tests                                 */
/* -------------------------------------------------------------------------- */

test("renders end test button", () => {
  render(<RatTestResult data={1} />);

  const button = screen.getByTestId(/endButton/i);
  expect(button).toBeInTheDocument();
});

test("renders email button", () => {
  render(<RatTestResult data={1} />);

  const button = screen.getByTestId(/emailButton/i);
  expect(button).toBeInTheDocument();
});
