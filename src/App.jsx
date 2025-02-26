
import HomeOne from './HomeOne'
import Hero from './Hero';
import Contact from "./Contact";
import Pricing from "./Pricing";
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Impressum from './Impressum';
import HeroMain from './HeroMain';
import Learn from "./Learn";
import ThankYou from './ThankYou';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
function App() {


  return (
    <Router>

    <Routes>
      <Route path="/" element={<HeroMain />} />
      {/* <Route path="/home" element={<HomeOne />} /> */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/thankyou" element={<ThankYou />} />
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
