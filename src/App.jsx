import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import HomePage from './pages/HomePage'
import RATTestPage from './pages/RATTestPage'
import DragLayer from './components/DragLayer'

function App() {
  return (
    <div className="w-full h-dvh md:max-w-1440 md:h-appheight md:max-h-1024 mx-auto">
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <DragLayer />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rat/test" element={<RATTestPage />} />
          </Routes>
        </Router>
      </DndProvider>
    </div>
  )
}

export default App
