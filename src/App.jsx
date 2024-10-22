import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import HomePage from './pages/HomePage'
import RATTestPage from './pages/RATTestPage'
import RATResultPage from './pages/RATResultPage'

function App() {
  return (
    <div className="md:max-w-1440 md:h-appheight md:max-h-1024 mx-auto">
      <DndProvider backend={HTML5Backend}>
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
