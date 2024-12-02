import React from "react";
import { expect } from "vitest";
import { render, screen } from "../test-utils";
import { vi } from "vitest";
import DroppableInput from "../../components/DroppableInput";
import ratData from "../../data/ratTestData";

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

const mockRatOption = "helper";
const mockRatData = ratData;
const mockHandleDataChange = vi.fn();

/* -------------------------------------------------------------------------- */
/*                                 Unit Tests                                 */
/* -------------------------------------------------------------------------- */

test("should render droppable input", () => {
  render(
    <DroppableInput
      option={mockRatOption}
      test={"RAT"}
      data={mockRatData}
      currentSetId={1}
      handleDataChange={mockHandleDataChange}
    />
  );

  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
});
