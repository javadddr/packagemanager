
import HomeOne from './HomeOne'

import Contact from "./Contact";
import Pricing from "./Pricing";
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Impressum from './Impressum';
import Learn from "./Learn";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
function App() {


  return (
    <Router>

    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal-notice" element={<LegalNotice />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/learn" element={<Learn />} />
  </Routes>

    </Router>

  )
}

export default App
