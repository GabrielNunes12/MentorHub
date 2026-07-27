import { BrowserRouter as Router } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import AppRoutes from './AppRoutes'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <AppRoutes />
      <Analytics />
    </Router>
  )
}

export default App
