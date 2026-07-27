import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import RefundPolicy from './pages/RefundPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Success from './pages/Success'
import MentorHubTechStudios from './pages/MentorHubTechStudios'
import MentorHubTechIT from './pages/MentorHubTechIT'

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Services page removed; redirecting /services to MentorHubTechStudios */}
      <Route path="/services" element={<Navigate to="/mentorhubtech/studios" replace />} />
      <Route path="/mentorhubtech/studios" element={<MentorHubTechStudios />} />
      <Route path="/mentorhubtech/it" element={<MentorHubTechIT />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />

      <Route path="/success" element={<Success />} />
    </Routes>
  </Layout>
)

export default AppRoutes
