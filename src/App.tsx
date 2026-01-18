import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import RefundPolicy from './pages/RefundPolicy'
import Mentors from './pages/Mentors'
import Success from './pages/Success'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
