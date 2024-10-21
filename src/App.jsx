import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import HomePage from './pages/HomePage'
import RATTestPage from './pages/RATTestPage'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rat/test" element={<RATTestPage />} />
        </Routes>
      </Router>
    </DndProvider>
  )
}

export default App
