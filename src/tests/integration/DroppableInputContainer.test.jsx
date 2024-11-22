import React from 'react'
import { expect } from 'vitest'
import { getAllByTestId, render, screen } from '../test-utils'
import { vi } from 'vitest'
import DroppableInputContainer from '../../components/DroppableInputContainer'
import ratData from '../../data/ratTestData'

/* -------------------------------------------------------------------------- */
/*          Using a custom render setup in test-utils for the moment          */
/* -------------------------------------------------------------------------- */

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})
/* ----- Mock ResizeObserver from ResponsiveContainer in RatResultChart ----- */
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

const mockRatOptions = ['helper', 'influence', 'autonomy']
const mockRatData = ratData
const mockHandleDataChange = vi.fn()

/* -------------------------------------------------------------------------- */
/*                                 Unit Tests                                 */
/* -------------------------------------------------------------------------- */

test('renders the correct amount of DroppableInput components', () => {
  render(
    <DroppableInputContainer
      data={mockRatData}
      currentSetId={1}
      handleDataChange={mockHandleDataChange}
      options={mockRatOptions}
      test={'RAT'}
    />
  )

  const inputs = screen.getAllByTestId('droppableInputs')
  expect(inputs).toHaveLength(mockRatOptions.length)
})

test('throws error for invalid test prop', () => {
  expect(() =>
    render(
      <DroppableInputContainer
        data={mockRatData}
        currentSetId={1}
        handleDataChange={mockHandleDataChange}
        options={mockRatOptions}
        test={''}
      />
    )
  ).toThrow('Invalid test prop: ')
})
