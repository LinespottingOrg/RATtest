import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../utils/i18n'
import { render, screen, fireEvent } from '@testing-library/react'
import RATMainPageHero from '../../components/ratComponents/RATMainPageHero'
import RATTestPage from '../../pages/RATTestPage'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import DragLayer from '../../components/DragLayer'
import { vi } from 'vitest'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

test('contains button', () => {
  i18n.changeLanguage('en')
  render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <RATMainPageHero />
      </I18nextProvider>
    </MemoryRouter>
  )

  expect(screen.getByText(/Start Test/i)).toBeInTheDocument()
})

test('renders logo', () => {
  render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <RATMainPageHero />
      </I18nextProvider>
    </MemoryRouter>
  )

  const logo = screen.getByAltText(/rat logo/i)

  expect(logo).toHaveAttribute('src', expect.stringContaining('RAT_LOGO_2'))
})

test('contains translation input', () => {
  render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <RATMainPageHero />
      </I18nextProvider>
    </MemoryRouter>
  )

  const translationToggle = screen.getByRole('checkbox')

  expect(translationToggle).toBeInTheDocument()
})

test('button navigates to rat test page', () => {
  i18n.changeLanguage('en')

  render(
    <DndProvider backend={TouchBackend}>
      <DragLayer />
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<RATMainPageHero />} />
          <Route path="/rat/test" element={<RATTestPage />} />
        </Routes>
      </MemoryRouter>
    </DndProvider>
  )

  const startButton = screen.getByText(/Start Test/i)
  fireEvent.click(startButton)

  expect(mockNavigate).toHaveBeenCalledWith('rat/test')
})
