import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import logo from "./component/logo5.png"; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <div className="footer-links">
          <Link to="https://globalpackagetracker.com/policies/impressum" className="footer-link">Legal Notice</Link>
          <Link to="https://globalpackagetracker.com/policies/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="https://globalpackagetracker.com/policies/terms-of-service" className="footer-link">Terms of Service</Link>
          <Link to="https://globalpackagetracker.com/policies/impressum" className="footer-link">Impressum</Link>
        </div>
        <p>Copyright © {new Date().getFullYear()} DynamoChart UG. All rights reserved.</p>
        Global Package Tracker is a product of DynamoChart
      </div>
   
      <div className="footer-company-info">
        <h1>DynamoChart UG</h1>
        <p>Holzheimer Weg 11</p>
        <p>41464 Neuss, Germany</p>
        <p>Internet: <a href="https://Dynamochart.com/" className="footer-link">Dynamochart.com</a></p>
        <p>Contact: <a href="mailto:Contact@globalpackagetracker.com" className="footer-link">Contact@globalpackagetracker.com</a></p>
        <p>Sitz der Gesellschaft/Registered office:<span> Neuss</span></p>
        <p>Eintragung/Commercial Register:<span> Amtsgericht Neuss HRB 23027</span></p>
        <p>VAT identification number (USt-ID):<span> DE361618143</span></p>
        <p>Geschäftsführung/Managing Directors:<span><br></br> Javad Khalil Arjmandi</span></p>
      </div>
    </footer>
  );
}

export default Footer;
