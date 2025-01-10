import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import i18n from './utils/i18n'
import HomePage from './pages/HomePage'
import RATTestPage from './pages/RATTestPage'
import DragLayer from './components/DragLayer'
import LASTestPage from './pages/LASTestPage'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import ScrollToTopOfPage from './components/ScrollToTopOfPage'

function App() {
  /* ------------------- initializing i18n for translations ------------------- */
  const { i18n } = useTranslation()
  emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY)

  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en')
  const toggleLanguage = () => {
    const newLang = isEnglish ? 'sv' : 'en'
    i18n.changeLanguage(newLang)
    setIsEnglish(!isEnglish)
  }

  useEffect(() => {
    setIsEnglish(i18n.language === 'en')
  }, [i18n.language])

  return (
    <div className="w-full h-dvh md:max-w-1440 md:h-appheight md:max-h-1024 mx-auto">
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <DragLayer />
        <Router>
          <ScrollToTopOfPage />
          <Routes>
            <Route path="/" element={<HomePage toggleLanguage={toggleLanguage} isEnglish={isEnglish} />} />
            <Route
              path="/rat/test"
              element={<RATTestPage handleTranslation={toggleLanguage} isEnglish={isEnglish} />}
            />
            <Route
              path="/las/test"
              element={<LASTestPage handleTranslation={toggleLanguage} isEnglish={isEnglish} />}
            />
          </Routes>
        </Router>
      </DndProvider>
    </div>
  )
}

export default App
