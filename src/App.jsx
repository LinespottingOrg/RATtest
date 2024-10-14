import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './assets/pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
