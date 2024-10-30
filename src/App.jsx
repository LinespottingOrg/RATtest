import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import translationSV from './locales/sv.json'
import HomePage from './pages/HomePage'
import RATTestPage from './pages/RATTestPage'
import DragLayer from './components/DragLayer'
import LASTestPage from './pages/LASTestPage'

i18n.use(initReactI18next).init({
  resources: {
    sv: { translation: translationSV },
  },
  lng: 'sv',
  interpolation: { escapeValue: false },
})

function App() {
  return (
    <div className="w-full h-dvh md:max-w-1440 md:h-appheight md:max-h-1024 mx-auto">
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <DragLayer />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rat/test" element={<RATTestPage />} />
            <Route path="/las/test" element={<LASTestPage />} />
          </Routes>
        </Router>
      </DndProvider>
    </div>
  )
}

export default App
