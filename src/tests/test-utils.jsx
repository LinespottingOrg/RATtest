import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../utils/i18n'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import DragLayer from '../components/DragLayer'

const customRender = (ui, { wrapper: Wrapper = MemoryRouter, route = '/' } = {}) =>
  rtlRender(
    <DndProvider backend={TouchBackend}>
      <DragLayer />
      <I18nextProvider i18n={i18n}>
        <Wrapper initialEntries={[route]}>{ui}</Wrapper>
      </I18nextProvider>
    </DndProvider>
  )

export * from '@testing-library/react'

export { customRender as render }
