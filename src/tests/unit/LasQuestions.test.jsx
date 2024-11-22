import React from 'react'
import { expect } from 'vitest'
import { render, screen, fireEvent } from '../test-utils'
import { vi } from 'vitest'
import LASQuestions from '../../components/lasComponents/LASQuestions'
import lasData from '../../data/lasTestData'
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

/* -------------------------------------------------------------------------- */
/*                                 Unit Tests                                 */
/* -------------------------------------------------------------------------- */

test('renders draggableNumberContainer', () => {
  render(<LASQuestions data={lasData} currentSetId={1} />)

  const container = screen.getByTestId('draggableNumberContainer')
  expect(container).toBeInTheDocument()
})

test('renders droppableInputContainer', () => {
  render(<LASQuestions data={lasData} currentSetId={1} />)

  const container = screen.getByTestId('droppableInputContainer')
  expect(container).toBeInTheDocument()
})
