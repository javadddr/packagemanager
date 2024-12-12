
import HomeOne from './HomeOne'

import Contact from "./Contact";
import Pricing from "./Pricing";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
function App() {


  return (
    <Router>

    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
  </Routes>

    </Router>

  )
}

export default App
